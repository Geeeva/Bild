import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import HeroBanner from '../.././assets/images/devices.png';
import Video from '../.././assets/images/video.jpg';
import Modal from 'react-responsive-modal';
import Slideshow from './Slideshow/Slideshow';
import MetaTags from 'react-meta-tags';
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Home extends Component {
	state = {
      	open: false,
      	posts: []
    };
   
    onOpenModal = () => {
      	this.setState({ open: true });
    };
   
    onCloseModal = () => {
      	this.setState({ open: false });
    };

	render () {
		return (
			<div className="Home">
			 	<MetaTags>
		            <title>Home Bild Studio</title>
		            <meta name="description" content="Home page of Bild" />
		            <meta property="og:title" content="Bild Home Page" />
	          	</MetaTags>
				<div className="container-fluid Portfolio">      
	                <div className="container">   
						<div className="HeroBannerWrapper">
							<div className="HeroBanner">
								<img src={HeroBanner} alt="HeroBanner"/>
							</div>
							<p className="HeroBannerTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Pellentesque eu eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus eu.
							</p>
							<NavLink className="work" to="/work"><button className="HeroBannerBtn">Browse Portfolio</button></NavLink>
						</div>
					</div>
				</div>
				<div className="container-fluid GetToKnow"> 
					<div className="container">
						<div className="Video">
							<div className="YouTube">
								<button className="Modal" onClick={this.onOpenModal}>
									<img src={Video} alt="Video"/>
								</button>
								<Modal open={this.state.open} onClose={this.onCloseModal} center>
									<iframe title="youtube" width="560" height="315" src="https://www.youtube.com/embed/0FzMZ3jNoco" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
								</Modal>
							</div>
							<div className="GetToKnowWrapper">
								<h3 className="GetToKnowTitle">Get To Know Us a Little Better!</h3>
								<p className="GetToKnowTitleTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. 
									Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. 
									Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. 
									Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
								</p>

								<p className="GetToKnowTitleTxt">Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. 
									Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. 
									Pellentesque pellentesque arcu a elit congue lacinia.
								</p>
							</div>
						</div>  
					</div>
				</div>
				<div className="container-fluid Slideshow"> 
					<Slideshow />
				</div>
			</div>
		)
	}
}

export default Home;