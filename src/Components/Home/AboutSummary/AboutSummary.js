import React from 'react';
import "./AboutSummary.css";
import mySign from "../../../Images/mySign.png";
import { Link } from 'react-router-dom';

const AboutSummary = () => {
    return (
        <section className="AboutSummary">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-md-6 h-100 px-5 d-flex justify-content-center align-items-center">
                        <div>
                            <h2>About Me</h2>
                            <p className="mt-2">I'm Farhan Absar Tafader. I'm a web developer. Currently I'm experiencing most famous Javascript framework "React Js". I dream to be the top developer of the world.</p>
                            <p>I'm also web designer. Designing is one of my dream. I'm also UX/UI consultant.</p>
                            <Link to="/about"><button className="mt-2">Read More</button></Link>
                        </div>
                    </div>
                    <div className="col-md-6 h-100 px-5 d-flex justify-content-center align-items-center">
                        <div>
                            <img src={mySign} alt="signature" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSummary;