import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import './Contact.css';
import GoogleMap from './GoogleMap/GoogleMap';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

class Contact extends Component {
	constructor() {
        super();

        this.state = {
          	paragraphs: [],
          	name: '',
          	nameError: '',
            email: '',
            emailError: '',
            subject: '',
            message: '',
            messageError: '',
            isButtonDisabled: false
        };
    }

    changeHandler = (event) => {
    	//this.props.changedSource({[event.target.name]: event.target.value});
    	this.setState({
    		[event.target.name]: event.target.value
    	})
    }

    validate = () => {
    	let isError = false;
    	console.log(isError);
    	const errors = {};
    	
    	console.log(errors);

    	if(this.state.name.length < 5) {
    		isError = true;
    		errors.nameError = 'Task name needs to be at least 5 long';
    	} else {
    		errors.nameError = '';
    	}

    	if(this.state.email.indexOf("@") === -1) {
    		isError = true;
    		errors.emailError = 'Requires valid email';
    	} else {
    		errors.emailError = '';
    	}

    	if(this.state.message > 1000) {
    		isError = true;
    		errors.messageError = 'Message must be no longer then 1000 charachters long';
    	} else {
    		errors.messageError = '';
    	}

    	if(isError){
    		this.setState({
    			...errors
    		})
    	}	
    	console.log(isError);
    	return isError;
    }

    //Za submit button

    submitHandler = (event) => {
    	
        event.preventDefault();

    	let taskTitle = this.state.taskTitle;
        let taskDescription = this.state.taskDescription;

		const err = this.validate();															
    	console.log(err);
		if(!err) {
	    	this.setState({
	    		name: '',
	          	nameError: '',
	            email: '',
	            emailError: '',
	            subject: '',
	            message: '',
	            messageError: ''
	    	})
	    }
    }

    componentDidMount () {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response => {
        const paragraphs = response.data.slice(0, 1);
          	this.setState({paragraphs: paragraphs})
          	})
            .catch(error => {
                this.setState({error: true});
          	});
    }

	render() {

		const paragraph = this.state.paragraphs.map((paragraph, index) => {
			return (
				<React.Fragment>
					{paragraph.body}
				</React.Fragment>
			)
		});
		return (
			<React.Fragment>
				<div className="container-fluid ContactWrapper">
					<div className="container">
						<MetaTags>
				            <title>Contact us Bild Studio</title>
				            <meta name="description" content="Contact Bild" />
				            <meta property="og:title" content="Bild Contact Page" />
				      	</MetaTags>
				      	<h1>Got a Question or INquiry?</h1>
				    </div>
				</div>
				<div className="container-fluid GoogleMapWrapper">
					<GoogleMap />
				</div>
				<div className="container-fluid ContactFormWrapper">
					<div className="container">
						<div className="ContactForm">
							<h3>CONTACT FORM</h3>
							<p>{paragraph}</p>
							<form>
								<input 
								type="text" 
								required="required" 
								name="name" 
								placeholder="Name" 
								value={this.state.name}
	                    		onChange={event => this.changeHandler(event)}
                    			/>

								<input 
									type="email" 
									required="required" 
									name="email" 
									placeholder="Email Address"
									value={this.state.email}
		                    		onChange={event => this.changeHandler(event)}
	                    		/>

								<input 
									type="text" 
									name="subject" 
									placeholder="Subject"
									value={this.state.subject}
									onChange={event => this.changeHandler(event)}
									/>

								<textarea required="required" 
									name="message" 
									cols="30" 
									rows="10"
									value={this.state.message}
		                    		onChange={event => this.changeHandler(event)}
	                    		>
								</textarea>

								<ReCAPTCHA
						            style={{ display: "inline-block" }}
						            theme="dark"
						            ref={this._reCaptchaRef}
						            sitekey={'6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
						            onChange={this.handleChange}
						            asyncScriptOnLoad={this.asyncScriptOnLoad}
						          />

								<button>SEND MESSAGE</button>
							</form>
							
						</div>
						<div className="ContactInfoWrapper">
							<h3>CONTACT INFO</h3>
							<p>{paragraph}</p>
							<p>email: <span>info@display.com</span></p>
							<p>home: <span>1.306.222.4545</span></p>
							<p>222 2nd Ave South</p>
							<p>Saskabush, SK S7M 1T6</p>

							<h3>STORE HOURS</h3>
							<div><p>Monday - Thursday</p>
							     <p>8 am - 5 pm</p>
							</div>
							<div><p>Friday</p><p>8 am - 6 pm</p></div>
							<div><p>Saturday</p><p>9 am - 5 pm</p></div>
							<div><p>Sunday & Holidays</p><p>Closed</p></div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Contact;