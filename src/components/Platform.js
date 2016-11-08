import React, { Component } from 'react';
import icon1 from '../../public/images/icon_1@2x.png';
import icon2 from '../../public/images/icon_2@2x.png';
import icon3 from '../../public/images/icon_3@2x.png';


export default class Platform extends Component {
  render() {
    return (
      <div className='platform'>
        <h1 className='text-uppercase text-center platform-text'>why use our platform</h1>
        <p className='platform-info text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
        <div className='food-icon-container'>
        	<div className='food-descrip-container'>
	      		<img src={icon1} className='food-icon'/><br/>
	      		<b><p>Who uses the app?</p></b>
	      		<p>I'm a really good feature. That's why we want to talk about it</p>
      		</div>
      		<div className='food-descrip-container'>
	      		<img src={icon2} className='food-icon'/><br/>
	      		<b><p>Who uses the app?</p></b>
	      		<p>I'm a really good feature. That's why we want to talk about it</p>
      		</div>
      		<div className='food-descrip-container'>
	      		<img src={icon3} className='food-icon'/><br/>
	      		<b><p>Who uses the app?</p></b>
	      		<p>I'm a really good feature. That's why we want to talk about it</p>
      		</div>
      	</div>
      </div>

      )
  }

}