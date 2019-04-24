import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import './About.css';
import axios from 'axios';
import AboutPic from '../.././assets/images/about.jpg';
import Websites from '../.././assets/images/websites.svg';
import Photography from '../.././assets/images/photography.svg';
import Seo from '../.././assets/images/seo.svg';
import Applications from '../.././assets/images/applications.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import AboutArrow from '../.././assets/images/about-arrow.svg';

class About extends Component {
	 state= {
			articles: [],
			services: null,
			active: null
	};
	
    tabHanddler = event => {
    	this.setState({active: true})
    }

    componentDidMount () {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response => {
        const articles = response.data.slice(0, 3);
          	this.setState({articles: articles})
          	})
            .catch(error => {
                this.setState({error: true});
          	});
    }

	render(){
		const articlesBody = this.state.articles.map((article, index) => {
			return (
				<React.Fragment>
					{article.body}
				</React.Fragment>
			)
		});

		const articlesTitle = this.state.articles.map((article, index) => {
			return (
				<React.Fragment>
					{article.title}
				</React.Fragment>
			)
		});

		return (
			<React.Fragment>
				<div className="container-fluid AboutWrapper">
					<div className="container">
					<MetaTags>
			            <title>About us Bild Studio</title>
			            <meta name="description" content="About us Bild" />
			            <meta property="og:title" content="Bild About Page" />
		          	</MetaTags>
		          	<h1>About My Business</h1>
		          	</div>
		        </div>
	          	<div className="container">
					<div className="About">
						<div className="AboutPic">
							<img src={AboutPic} alt="About"/>
						</div>
						<div className="AboutPicTxt">
							<div>{articlesBody[0]}</div>
							<div>{articlesBody[1]}</div>
							<div>{articlesBody[2]}</div>
							<div>{articlesBody[0]}</div>
							<div>{articlesBody[1]}</div>
							<div>{articlesBody[2]}</div>
						</div>
						<div className="AboutSectionFirst">
							<h3>Mission Statement</h3>
							<div>
								{articlesBody[0]}
								{articlesBody[1]}
							</div>
						</div>
						<div className="AboutSectionSecond">
							<h3>Fun Facts</h3>
							<div>
								{articlesBody[1]}
								{articlesBody[0]}
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<h3 className="ServicesTitle">Services</h3>
				</div>
				
				<div className="container-fluid ServicesWrapper">
					<div className="container">
						<Tabs>
						    <TabList>
						      <Tab>
						      	<div className="Websites">
									<img src={Websites} alt="Websites"/>
									<h3>WEBSITES</h3>
								</div>
						      </Tab>
						      <Tab>
						    	<div className="Photography">
									<img src={Photography} alt="Photography"/>
									<h3>PHOTOGRAPHY</h3>
								</div>
						      </Tab>
						      <Tab>
						      	<div className="Seo">
									<img src={Seo} alt="Seo"/>
									<h3>SEO</h3>
								</div>
						      </Tab>
						      <Tab>
						      	<div className="Applications">
									<img src={Applications} alt="Applications"/>
									<h3>APPLICATIONS</h3>
								</div>
						      </Tab>
						    </TabList>

						    <TabPanel>
						      	<div className="AboutTxt">
						      		{articlesBody[0]}
							   		{articlesBody[1]}
							    </div>
							    <div className="Sentences">
							    	<div><span><img src={AboutArrow} alt="arrow"/></span><div className="Particle">{articlesTitle[0]}</div></div>
							    	<div><span><img src={AboutArrow} alt="arrow"/></span><div className="Particle">{articlesTitle[1]}</div></div>
							    	<div><span><img src={AboutArrow} alt="arrow"/></span><div className="Particle">{articlesTitle[2]}</div></div>
							    </div>
						    </TabPanel>
						    <TabPanel>
						      	<div className="AboutTxt">
						      		{articlesBody[1]}
							   		{articlesBody[0]}
							    </div>
							    <div className="Sentences">
							    	<div><span><img src={AboutArrow} alt="arrow"/></span><div className="Particle">{articlesTitle[2]}</div></div>
							    	<div><span><img src={AboutArrow} alt="arrow"/></span><div className="Particle">{articlesTitle[1]}</div></div>
							    	<div><span><img src={AboutArrow} alt="arrow"/></span><div className="Particle">{articlesTitle[0]}</div></div>
							    </div>
						    </TabPanel>
						    <TabPanel>
						      	<div className="AboutTxt">
						      		{articlesBody[1]}
							   		{articlesBody[0]}
							    </div>
							    <div className="Sentences">
							    	<div><span><img src={AboutArrow} alt="arrow"/></span><div className="Particle">{articlesTitle[0]}</div></div>
							    	<div><span><img src={AboutArrow} alt="arrow"/></span><div className="Particle">{articlesTitle[1]}</div></div>
							    	<div><span><img src={AboutArrow} alt="arrow"/></span><div className="Particle">{articlesTitle[2]}</div></div>
							    </div>
						    </TabPanel>
						    <TabPanel>
						      	<div className="AboutTxt">
						      		{articlesBody[0]}
							   		{articlesBody[1]}
							    </div>
							     <div className="Sentences">
							    	<div><span><img src={AboutArrow} alt="arrow"/></span><div className="Particle">{articlesTitle[2]}</div></div>
							    	<div><span><img src={AboutArrow} alt="arrow"/></span><div className="Particle">{articlesTitle[2]}</div></div>
							    	<div><span><img src={AboutArrow} alt="arrow"/></span><div className="Particle">{articlesTitle[0]}</div></div>
							    </div>
						    </TabPanel>
						  </Tabs>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default About;