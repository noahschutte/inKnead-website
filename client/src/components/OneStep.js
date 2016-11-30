import React, { Component } from 'react';
import iphone from '../../public/images/iphone_6_request@2x.png'

export default class OneStep extends Component {
  render() { 
    return (
      <div className='one-step-container'>
        <div className='one-step'>
          <div className='one-step-iphone-container'>
    				<img src={iphone} className='img-responsive'/>
    			</div>
          <div className='one-step-text-container'>
          	<h2 className='text-uppercase text-center'>One step to request</h2>
          	<p><i className="fa fa-caret-right"></i> Upload a short video (No longer than 20 seconds)</p>
            <p><i className="fa fa-caret-right"></i> Decide how many pizzas you need and where you’d like them to come from.</p>
            <p><i className="fa fa-caret-right"></i> Submit!</p>
          </div>
        </div>
      </div>
    )
  }
}