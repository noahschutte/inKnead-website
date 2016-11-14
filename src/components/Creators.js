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
			      		<div id='circle'></div>
			      		<b><p>John Doe</p></b>
			      		<p>Developer</p>
			      		<img src={linkedin}/>
			      		<img src={github}/>
		      		</div>
			      	<div className='individual'>
			      		<div id='circle'></div>
			      		<b><p>John Doe</p></b>
			      		<p>Developer</p>
			      		<img src={linkedin}/>
			      		<img src={github}/>
		      		</div>
		      		<div className='individual'>
			      		<div id='circle'></div>
			      		<b><p>John Doe</p></b>
			      		<p>Developer</p>
			      		<img src={linkedin}/>
			      		<img src={github}/>
		      		</div>
		      		<div className='individual'>
			      		<div id='circle'></div>
			      		<b><p>John Doe</p></b>
			      		<p>Developer</p>
			      		<img src={linkedin}/>
			      		<img src={github}/>
		      		</div>
	      	</div>
      	</div>
      </div>
    )
  }
}