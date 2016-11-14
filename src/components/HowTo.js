import React, { Component } from 'react';
import iphone_big from '../../public/images/iphone_big.png'


export default class HowTo extends Component {
  render() { 
    return (
    	<div className='how-to-container'>
	      <div className='how-to'>
		      <div className='how-to-text-container'>
		        <h2 className='text-center text-uppercase'>Be a donator</h2>
		        <p className='text-center'> Fusce in purus euismod velit ullamcorper accumsan. 
		        Nam at commodo nibh, ac ultricies ligula. 
		        Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
		        per inceptos himenaeos. </p>
		      </div>
		      <div className='steps-container'>
			      <h2 text-uppercase>Step 1</h2>
			      <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, 
			      sit amet adipiscing sem neque sed ipsum. 
			      </p><br/>
			      <h2 text-uppercase>Step 2</h2>
			      <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, 
			      sit amet adipiscing sem neque sed ipsum. 
			      </p><br/>
			      <h2 text-uppercase>Step 3</h2>
			      <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, 
			      sit amet adipiscing sem neque sed ipsum. 
			      </p><br/>
		      </div>
		      <img src={iphone_big} className='img-responsive'/>
	      </div>
      </div>
    )
  }
}