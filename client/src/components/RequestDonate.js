import React, { Component } from 'react';
import arrow_down from '../../public/images/arrow_down@2x.png';
import arrow_down_hover from '../../public/images/arrow_down_hover@2x.png';

export default class RequestDonate extends Component {
  render() { 
    return (
      <div className='request'> 
      	<div className='request-donate-text-container'>
	      	<h2 className='text-center text-uppercase'><b>Be a requester</b></h2>
	      	<p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
	      	Sed tortor lacus, imperdiet vitae nibh malesuada, 
	      	egestas accumsan ligula. Nunc ullamcorper mauris et molestie auctor. 
	      	Vivamus consequat tortor purus, nec vestibulum turpis ultrices et. 
	      	Curabitur scelerisque viverra volutpat.</p>
      	</div>
      </div>
    )
  }
}