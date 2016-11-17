import React, { Component } from 'react';
import Platform from './Platform';
import RequestDonate from './RequestDonate';
import HowTo from './HowTo';
import OneStep from './OneStep';
import Creators from './Creators';
import Subscribe from './Subscribe';
import Footer from './Footer';
import facebook2x from '../../public/images/icon_facebook@2x.png';
import twitter2x from '../../public/images/icon_twitter@2x.png';
import iphone_big from '../../public/images/iphone_big.png'


export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
	      <div className="home-container">
					<div className="home">
						<div className='header-container'>
							<div className='logo-container'>
								<img role="presentation" src='./images/logo@2x.png' className='logo'/>
							</div>
							<div className='social-container'>
								<img src={facebook2x} className='social-icons'/>
								<img src={twitter2x} className='social-icons'/>
							</div>
							</div>
						<div className="main-text">
							<div className="headline">
								<h2>BEST HEADLINE IN THE WORLD</h2>
							</div>
							<div className="headline-info-temp">
								<p>Lorem ipsum dolor sit amet, consectetua adipiscing elit.
								Verstibulum rutrum urna felis.</p>
							</div>
							<div className='email-form-container'>
								<form action='/landing_page' method="POST">
									<input type='text' name='email' placeholder='Your E-mail' className='email-input'/>
									<input type='submit' className='white-button' />
								</form>
							</div>
							<div className='learn-demo-container'>
								<button className='white-button learn-button'>Learn More</button>
								<button className='demo-button'>Demo</button>

							</div>
						</div>


						<div className="iphone-container">
							<img src={iphone_big} className='iphone img-responsive'/>
						</div>
					</div>
				</div>
				<Platform />
				{/*<RequestDonate />*/}
				<HowTo />
				<OneStep />
				<Creators />
				<Subscribe />
				<Footer />
			</div>
    )
  }
}
