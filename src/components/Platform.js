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
        <div className='food-icon'>
      		<img src={icon1}/>
      		<img src={icon2}/>
      		<img src={icon3}/>
      	</div>
      </div>

      )
  }

}