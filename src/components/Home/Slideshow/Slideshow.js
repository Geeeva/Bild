import React, { Component } from 'react';
import Slider from "react-slick";
import BoyAndGirl from '../../../assets/images/project-boy-and-girl.jpg';
import Buttons from '../../../assets/images/project-buttons.jpg';
import Jes from '../../../assets/images/project-jes.jpg';
import Jezik from '../../../assets/images/project-jezik.jpg';
import SocialMedia from '../../../assets/images/project-social-media.jpg';
import Link from '../../../assets/images/link.png';
import './Slideshow.css';
import axios from 'axios';
import Project from './Project/Project';
 
class Slideshow extends Component {
    state = {
        nav1: null,
        nav2: null,
        projects: []
    }

    componentDidMount () {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });

        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response => {
        const projects = response.data.slice(0, 10);
            this.setState({projects: projects})
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    render() {
        const settingsGallery = {
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        infinite: true,
                        arrows: true,
                    }
                }
            ]
        };

        return (
            <div className="container">
                <h3 className="FeaturedTitle">A Couple of Our Featured Projects</h3>
                <p className="FeaturedTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. 
                    Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros.
                </p>
                <div className="FirstImage"><img src={Jezik} alt="Jezik"/></div>
                <div className="SecondImage"><img src={Jes} alt="Jes"/></div>
                <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                    {...settingsGallery}
                >
                <div className="LinkWrapper">
                    <img src={BoyAndGirl} alt="Boy and girl"/>
                    <img src={Link} alt="Link"/>
                </div>
                <div className="LinkWrapper">
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img src={Buttons} alt="Buttons"/>
                        <img src={Link} alt="Link"/>
                    </a>
                </div>
                <div className="LinkWrapper">
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img src={Jes} alt="Jes"/>
                        <img src={Link} alt="Link"/>
                    </a>
                </div>
                <div className="LinkWrapper">
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img src={Jezik} alt="Jezik"/>
                        <img src={Link} alt="Link"/>
                    </a>
                </div>
                <div className="LinkWrapper">
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img src={SocialMedia} alt="Social Media"/>
                        <img src={Link} alt="Link"/>
                    </a>
                </div>
                <div className="LinkWrapper">
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img src={BoyAndGirl} alt="Boy and girl"/>
                        <img src={Link} alt="Link"/>
                    </a>
                </div>
                <div className="LinkWrapper">
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img src={Buttons} alt="Buttons"/>
                        <img src={Link} alt="Link"/>
                    </a>
                </div>
                <div className="LinkWrapper">
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img src={Jes} alt="Jes"/>
                        <img src={Link} alt="Link"/>
                    </a>
                </div>
                <div className="LinkWrapper">
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img src={Jezik} alt="Jezik"/>
                        <img src={Link} alt="Link"/>
                    </a>
                </div>
                <div className="LinkWrapper">
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img src={SocialMedia} alt="Social Media"/>
                        <img src={Link} alt="Link"/>
                    </a>
                </div>
                <div className="LinkWrapper">
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img src={SocialMedia} alt="Social Media"/>
                        <img src={Link} alt="Link"/>
                    </a>
                </div>
          </Slider>

          <Slider
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
              arrows={false}
              slidesToShow={1}
              swipeToSlide={true}
              focusOnSelect={true}
          >
    
            {
            this.state.projects.map((project, index) => {
                return (
                    <Project
                        id={project.id}
                        title={project.title}
                        project={project.body}
                        key={index}
                    />
                    )
                })
            }
          </Slider>
        </div>
      );
    }
}

export default Slideshow;