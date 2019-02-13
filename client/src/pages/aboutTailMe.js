import React, { Component } from 'react';
// import { Link } from "react-router-dom";
//import ReactDOM from 'react-dom';
import "../index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";



class aboutTailMe extends Component {
    render() {
        return (
            <div className="aboutTailMe">
                <Header />
                <div className="aboutTailMe__grid">
                    <div className="aboutTailMe__grid--heading">
                        Welcome to tailME!
        </div>
                    <div className="aboutTailMe__grid--text">
                            TailME is a service for professional dog walkers, dedicated to providing a premium experience to their clients,
                         better and easier management of their business and keeping puppies happy and well exercised. Here at TailME we 
                         know the challenges of running a small business, that you love, and we strive to facilitate that keep those schedules filled and 
                         your clientele satisfied. To that end we've developed a tool that allows you to intake chosen users, interact with them  more meaningfully, 
                         manage accounts with greater effeciency and, if you choose, grow your business.  Join us and help keep more healthy tails wagging!


        </div>
                </div>
                    <Footer />
            </div>
        )
    }
}
export default aboutTailMe