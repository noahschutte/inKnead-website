import React, { Component } from 'react';
import email from '../../public/images/icon_email@2x.png';
import $ from 'jquery';

export default class Subscribe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			status: null,
			returnMessage: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		// console.log(this);
		// console.log(e.target.value);
		this.setState({email: e.target.value});
	}
	handleSubmit(e) {
		// console.log(this.state.email)
		e.preventDefault();
		this.mailChimp(this.state.email)
	}
	mailChimp(email) {
		console.log(email);
		var test1 = this;
		$.ajax({
			url: '/landing_page',
			method: "POST",
			data: {
				email: email,
				test: false
			},
			success: function(data) {
				console.log(data);
				if (data == 'success') {
					test1.setState({status: true})
					test1.setState({returnMessage: 'Success!'})
				} else {
					test1.setState({status: false})
					test1.setState({returnMessage: data})
				}
				// console.log(test1.state)
			},
			error: function(xhr, status, err) {
				// console.log(status, err.toString());
			}
		});
	}
  render() {
    return (
      <div className='subscribe'>
      	<h2 className='text-uppercase text-center'>Subscribe to our newsletter</h2>
      	<div>
		    	<img src={email}/>
		    	<p>Start making the world a better place!</p>
		    	<div className='email-form-container'>
						<form onSubmit={this.handleSubmit}>
							<input type='text' name='email' placeholder='Your E-mail' className='email-input' onChange={this.handleChange}/>
							<input type='submit' className='white-button' />
						</form>
						{(this.state.status ? <div>{this.state.returnMessage}</div> : <div>{this.state.returnMessage}</div>)}
					</div>
	    	</div>
      </div>
    )
  }
}