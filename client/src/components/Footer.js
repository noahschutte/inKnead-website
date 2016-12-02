import React, { Component } from 'react';
import email from '../../public/images/icon_email@2x.png';

export default class Footer extends Component {
  render() {
    return (
    	<footer>
    		<div>
	    		<p className='text-uppercase'>privacy policy</p>
	    		<p className='text-uppercase'>faq</p>
	    		<p className='text-uppercase'>contact us</p>
    		</div><br/>
    		<p>Designed in New York. Built in React. &copy;2016 in knead.</p>
  		</footer>
    )
  }
}