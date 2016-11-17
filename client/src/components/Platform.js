import React, { Component } from 'react';

import icon1 from '../../public/images/icon_1@2x.png';
import icon2 from '../../public/images/icon_2@2x.png';
import icon3 from '../../public/images/icon_3@2x.png';


export default class Platform extends Component {
  render() {
    return (
      <div className='platform'>
        <h2 className='text-uppercase text-center platform-text'>why use our platform</h2>
        <p className='platform-info text-center'>Inspired by the Random Acts of Pizza community on Reddit, 
        In Knead connects those struggling to make ends meet with those who can lend a hand.</p>
        <div className='food-icon-container'>
        	<div className='food-descrip-container'>
	      		<img src={icon1} className='food-icon'/><br/>
	      		<b><p>Who uses it?</p></b>
	      		<p>Starving student? Aspiring philanthropist? 
            Or maybe you’re just looking to restore a little faith in humanity, 
            our community brings together the best people in the world. Cheesy? 
            Maybe, but that’s how we like it. </p>
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