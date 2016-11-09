import React, { Component } from 'react';
import iphone from '../../public/images/iphone_6_request@2x.png'

export default class RequestDonate extends Component {
  render() { 
    return (
      <div className='one-step'>
      <div className='one-step-iphone-container'>
				<img src={iphone} className='img-responsive'/>
			</div>
        <div className='one-step-text-container'>
        	<h2 className='text-uppercase'>One step to request</h2>
        	<p>Fusce in purus euismod velit ullamcorper accumsan. 
        	Nam at commodo nibh, ac ultricies ligula. 
        	Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        	Integer tempus id dui eu consectetur. Sed non enim laoreet ante mattis commodo ut a odio. 
        	Cras augue ante, facilisis vitae lorem scelerisque, tempor scelerisque libero. 
        	Ut porta lobortis turpis in faucibus. Mauris id luctus sapien. </p>
        </div>
      </div>
    )
  }
}