var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
var MailChimpAPI = require('mailchimp').MailChimpAPI;
 
var apiKey = process.env.MAIL_CHIMP_API_KEY;


try {
  var api = new MailChimpAPI(apiKey, { version : '1.3', secure : false });
} catch (error) {
  console.log('there is an error')
  console.log(error.message);
}

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));
}
  // app.use(express.static('client/build'));


// app.get('/api/food', (req, res) => {
//   const param = req.query.q;

//   if (!param) {
//     res.json({
//       error: 'Missing required parameter `q`',
//     });
//     return;
//   }
// })

app.post('/landing_page', (req, res) => {
  console.log(typeof req.body.email);
  var email = req.body.email;
  // res.json("herro")
  var subscriber = JSON.stringify({
      "email_address": email,
      "status": "subscribed"
    });

  var options = {
    method: 'POST',
    url: 'http://us14.api.mailchimp.com/3.0/lists/a7ac25a7c1/members',
    body: subscriber,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'apikey ' + apiKey
    }
  };

  // request.get(options, function(error, response, body) {
  //   console.log("in request")
  //   console.log(response)
  //   console.log(error)
  //   if (!error && response.statusCode == 200) {
  //     console.log('success')
  //     console.log(body)
  //   }
  // })

  request(options, function(error, response, body) {
    console.log("in request")
    console.log(typeof response.body)
    // console.log(response)
    var responseDetail = JSON.parse(response.body).detail
    // console.log(test1.detail);
    // console.log(error)
    if (!error && response.statusCode == 200) {
      console.log('success')
      // console.log(body)
      res.send('success');
    } else {
      res.send(responseDetail);
    }
  })

})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});