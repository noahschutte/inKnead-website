import React, { Component } from 'react';
import arrow_down from '../../public/images/arrow_down@2x.png';
import arrow_down_hover from '../../public/images/arrow_down_hover@2x.png';

export default class RequestDonate extends Component {
  render() {
    return (
      <div className='request'>
      	<div className='request-donate-text-container'>
	      	<h2 className='text-center text-uppercase'><b>Be a requester</b></h2>
	      	<p className='text-center'>If you’ve ever requested a pizza through the RAoP community,
          you know how many hoops you have to jump through just to make sure your food gets to you.
          in knead cuts through all the red tape to take all that stress off your shoulders.</p>
      	</div>
      </div>
    )
  }
}
