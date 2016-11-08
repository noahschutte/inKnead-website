import React, { Component } from 'react';
import iphone_big from '../../public/images/iphone_big.png'


export default class RequestDonate extends Component {
  render() { 
    return (
      <div className='how-to'>

	      <div className='how-to-text-container'>
	        <h2 className='text-center text-uppercase'>How to donate</h2>
	        <p className='text-center'> Fusce in purus euismod velit ullamcorper accumsan. 
	        Nam at commodo nibh, ac ultricies ligula. 
	        Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
	        per inceptos himenaeos. </p>
	      </div>
	      
	      <img src={iphone_big} className='img-responsive'/>
      </div>
    )
  }
}