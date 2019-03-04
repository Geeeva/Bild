import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Work from '../components/Work/Work';
import Contact from '../components/Contact/Contact';
import NotFound from '../components/NotFound/NotFound';
//import history from './history';
import './App.css';

class App extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Router /*history={history}*/>
                <div className="App">
                    <header>    
                        <div className="container-fluid header">
                            <div className="container">
                                <Header className="Header" />
                            </div>
                        </div>
                    </header>
                    <main>    
                        <div className="Main">
                            <Route className="Home" path="/" exact strict component={Home}/>
                            <Route className="About" path="/about" exact strict component={About}/>
                            <Route className="Work" path="/work" exact strict component={Work}/>
                            <Route className="Contact" path="/contact" exact strict component={Contact}/>
                            <Route path="/404" component={NotFound} />
                        </div>
                    </main>
                    <footer>
                        <Footer className="Footer" />
                    </footer>
                </div>
            </Router>
        );
    }
}

export default App;
