var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 3100));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


app.get('/api/food', (req, res) => {
  const param = req.query.q;

  if (!param) {
    res.json({
      error: 'Missing required parameter `q`',
    });
    return;
  }
})

app.post('/landing_page', (req, res) => {
  console.log('test');
  res.json("herro")
  return;
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});