import React, { Component } from 'react';
import email from '../../public/images/icon_email@2x.png';

export default class Subscribe extends Component {
  render() {
    return (
      <div className='subscribe'>
      	<h2 className='text-uppercase text-center'>Subscribe to our newsletter</h2>
      	<div>
		    	<img src={email}/>
		    	<p>Learn more on how to use our product and sign up for our newsletter</p>
		    	<div className='email-form-container'>
						<form action='/landing_page' method="POST">
							<input type='text' name='email' placeholder='Your E-mail' className='email-input'/>
							<input type='submit' className='white-button' />
						</form>
					</div>
	    	</div>
      </div>
      )
  }
}