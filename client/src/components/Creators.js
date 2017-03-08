import React, { Component } from 'react';
import linkedin from '../../public/images/icon_linkedin@2x.png';
import github from '../../public/images/icon_github@2x.png'


export default class Home extends Component {
  render() {
    return (
      <div className='creators-container'>
      	<div className='creators'>
	      	<h2 className='text-center'>Who built this</h2>
		      	<div className='staff-container'>
              <div className='individual'>
                <div className='circle-base noah'></div>
                <b><p>Noah</p></b>
                <p>Founder</p>
                <img src={linkedin}/>
                <img src={github}/>
              </div>
              <div className='individual'>
                <div className='circle-base jameson'></div>
                <b><p>Jameson</p></b>
                <p>Community</p>
                <img src={linkedin}/>
                <img src={github}/>
              </div>
		      		<div className='individual'>
			      		<div className='circle-base fj'></div>
			      		<b><p>FJ</p></b>
			      		<p>Mobile Developer</p>
			      		<img src={linkedin}/>
			      		<img src={github}/>
		      		</div>
		      		<div className='individual'>
			      		<div className='circle-base koty'></div>
			      		<b><p>Koty</p></b>
			      		<p>Lead Web Developer</p>
			      		<img src={linkedin}/>
			      		<img src={github}/>
		      		</div>
              <div className='individual'>
                <div className='circle-base kristi'></div>
                <b><p>Kristi</p></b>
                <p>Designer</p>
                <img src={linkedin}/>
                <img src={github}/>
              </div>
              <div className='individual'>
                <div className='circle-base susan'></div>
                <b><p>Susan</p></b>
                <p>Designer</p>
                <img src={linkedin}/>
                <img src={github}/>
              </div>
	      	</div>
      	</div>
      </div>
    )
  }
}
