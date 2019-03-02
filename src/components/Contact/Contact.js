import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import './Contact.css';
import GoogleMap from './GoogleMap/GoogleMap';
import axios from '../.././axios-contact-form';
import Recaptcha from 'react-recaptcha';
import {withRouter} from 'react-router-dom';

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
            isButtonDisabled: false,
            isVerified: false,
            messageSuccess: false
        };
    }

    changeHandler = (event) => {
    	this.setState({
    		[event.target.name]: event.target.value
    	})
    }

    validate = () => {
    	let isError = false;
    	console.log(isError);
    	const errors = [];
    	
    	console.log(errors);

    	if(this.state.name.length < 5) {
    		isError = true;
    		errors.nameError = 'Name needs to be at least 5 long';
    	} else {
    		errors.nameError = '';
    	}

    	if(this.state.email.indexOf("@") === -1) {
    		isError = true;
    		errors.emailError = 'Requires valid email';
    	} else {
    		errors.emailError = '';
    	}

    	if(this.state.message.length > 1000) {
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

		const err = this.validate();

		const contact = { 
	        name: this.state.name, 
	        email: this.state.email, 
	        subject: this.state.subject, 
	        message: this.state.message, 
	    }															

		if(err === false && this.state.isVerified) {
	    	this.setState({
	    		name: '',
	          	nameError: '',
	            email: '',
	            emailError: '',
	            subject: '',
	            message: '',
	            messageError: ''
	    	})

	    axios.post('contact.json', contact)
          .then(response => console.log(response))
          .catch(error => console.log(error));
	    } else {
	    	alert('Pls.verify that you are a human');
	    }

	    

	    this.setState({
			isVerified: false
		})
    }

    recaptchaLoadedHandler = () => {
    	console.log('Recaptcha successfully loaded');
    }

    verifyCallbackHandler = (response) => {
    	if(response) {
    		this.setState({
    			isVerified: true
    		})
    	}
    }

    componentDidMount () {
    	console.log(this.props);
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response => {
        const paragraphs = response.data.slice(0, 1);
          	this.setState({paragraphs: paragraphs})
          	})
            .catch(error => {
                this.setState({error: true});
          	});

        if (this.captchaDemo) {
	        console.log("started, just a second...")
	        this.captchaDemo.reset();
	    }
    }

	render() {

		const paragraph = this.state.paragraphs.map((paragraph, index) => {
			return (
				<React.Fragment
					key={index}>
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
								<div>
									<input 
										type="text" 
										//required="required" 
										name="name" 
										placeholder="Name" 
										value={this.state.name}
			                    		onChange={event => this.changeHandler(event)}
	                    			/>
	                    			{/* Notification nameError */}
	                                <div className="nameError">
	                                    <span 
	                                        className={"tooltiptext" + (this.state.nameError === "Name needs to be at least 5 long" ?
	                                         ' visible' : '')}>{this.state.nameError}</span>
	                                </div>
								</div>
								
								<div>
									<input 
										type="email" 
										//required="required" 
										name="email" 
										placeholder="Email Address"
										value={this.state.email}
			                    		onChange={event => this.changeHandler(event)}
		                    		/>
		                    		{/* Notification emailError */}
	                                <div className="emailError">
	                                    <span 
	                                        className={"tooltiptext" + (this.state.emailError === "Requires valid email" ?
	                                         ' visible' : '')}>{this.state.emailError}</span>
	                                </div>
		                    	</div>

								<input 
									type="text" 
									name="subject" 
									placeholder="Subject"
									value={this.state.subject}
									onChange={event => this.changeHandler(event)}
									/>

								<div>
									<textarea 
										//required="required" 
										name="message" 
										cols="30" 
										rows="10"
										value={this.state.message}
			                    		onChange={event => this.changeHandler(event)}
	                    			>
									</textarea>
									{/* Notification messageError */}
	                                <div className="messageError">
	                                    <span 
	                                        className={"tooltiptext" + (this.state.messageError === "Message must be no longer then 1000 charachters long" ?
	                                         ' visible' : '')}>{this.state.messageError}</span>
	                                </div>
								</div>

								 <Recaptcha
								    sitekey="6Ld1h5QUAAAAALDNUdmIBZen1JSjVe0LpJJ185RV"
								    render="explicit"
								    onloadCallback={this.recaptchaLoadedHandler}
								    verifyCallback={this.verifyCallbackHandler}
								  />

								<button onClick={event => this.submitHandler(event)}>SEND MESSAGE</button>
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

export default withRouter(Contact);