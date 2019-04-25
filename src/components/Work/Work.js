import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import WorkButtons from '../.././assets/images/work-buttons.jpg';
import WorkEgg from '../.././assets/images/work-egg.jpg';
import WorkGiraffe from '../.././assets/images/work-giraffe.jpg';
import WorkGuys from '../.././assets/images/work-guys.jpg';
import WorkJes from '../.././assets/images/work-jes.jpg';
import WorkPistol from '../.././assets/images/work-pistol.jpg';
import WorkSliding from '../.././assets/images/work-sliding.jpg';
import WorkSocialMedia from '../.././assets/images/work-social-media.jpg';
import WorkSmiling from '../.././assets/images/work-smiling.jpg';
import Overlay from '../.././assets/images/work-overlay.png';
import Link from '../.././assets/images/link.png';
import './Work.css';

const filters = {
	ALL: [WorkButtons, WorkEgg, WorkGiraffe, WorkGuys, WorkJes, WorkPistol, WorkSliding, WorkSocialMedia, WorkSmiling],
		PRINT: [WorkJes, WorkEgg, WorkPistol, WorkGiraffe],
		PHOTOGRAPHY: [WorkSliding],
		WEB: [WorkSmiling, WorkGuys, WorkGiraffe],
		APPLICATIONS: [WorkButtons]
};

class Work extends Component {
	constructor(props) {
		super(props)

		this.state = {
			grid: true,
			list: false,
			selectedFilter: "ALL"
		}
	}

	gridViewHandler = () => {
		this.setState ({
            grid: true,
            list: false
        });
	}

	listViewHandler = () => {
		this.setState ({
            grid: false,
            list: true
        });
	}

	filterHandler (e) {
	    this.setState({
	      selectedFilter: e.target.value
	    });
	}

	render() {
		return (
			<React.Fragment>
				<div className="container-fluid WorkWrapper">
					<div className="container">
					<MetaTags>
			            <title>Our Work Bild Studio</title>
			            <meta name="description" content="Work by Bild" />
		            	<meta property="og:title" content="Bild Portfolio Page" />
		          	</MetaTags>
		          	<h1>Work</h1>
		          	</div>
		        </div>
		        <div className="container-fluid">
		        	<div className="container">
						<div className="Works">
							<div className="FilteredView">
								<React.Fragment>{Object.keys(filters).map((filter, index) => (
									<button key={index} className={(this.state.selectedFilter ? ' active' : '')} value={filter} onClick={this.filterHandler.bind(this)}>
										{filter}<span className="slash">&#47;</span>
									</button>
								))}
								</React.Fragment>
							</div>
							<div className="GridListView">
								<button onClick={this.gridViewHandler}>
									<svg preserveAspectRatio="xMidYMid" width="15" height="15" viewBox="0 0 15 15">
										 <path id="grid" d="M8.967,15.000 L8.967,8.905 L15.000,8.905 L15.000,15.000 L8.967,15.000 ZM8.946,0.000 L15.000,0.000 L15.000,6.012 L8.946,6.012 L8.946,0.000 ZM0.000,0.000 L6.033,0.000 L6.033,5.929 L0.000,5.929 L0.000,0.000 ZM6.012,15.000 L0.000,15.000 L0.000,8.905 L6.012,8.905 L6.012,15.000 Z"/>
									</svg>
								</button>
								<button onClick={this.listViewHandler}>
									<svg  width="15" height="15" viewBox="0 0 15 15">
									  	<g id="list">
										    <rect y="12" width="15" height="3" className="cls-1"/>
										    <rect y="5.969" width="15" height="3.031" className="cls-1"/>
										    <rect y="-0.031" width="15" height="3.031" className="cls-1"/>
									  	</g>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="container">
						<ul className={"Preview" + (this.state.list ? ' List' : '')}>
							{filters[this.state.selectedFilter].map((item, index) => (
									<a key={index} href="https://www.google.com/">
											<li>
													<div className="ImageWrapper">
															<img src={item} alt="Potfolio + {link}"/>
															<div className="OverlayWrapper">
																	<img className="Background" src={Overlay} alt="Overlay"/>
																	<img className="Link" src={Link} alt="link"/>
															</div>
												</div>
											</li>
									</a>
					    ))}
						</ul>
					</div>
				</div>
		    </React.Fragment>
		)
	}
}

export default Work;