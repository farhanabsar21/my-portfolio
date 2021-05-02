import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import "./About.css";
import myImg from "../../Images/myImg.png";
import cvOne from "../../Images/digital-1.jpg";
import cvTwo from "../../Images/digital-2.jpg";

const About = () => {
    return (
        <section>
            <div className="about-header p-3">
                <div className="container">
                    <Navbar></Navbar>
                </div>
            </div>
            <div className="about-body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 my-img">
                            <img src={myImg} alt="personal" className="img-fluid"/>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div>
                                <p>Hi, I'm Farhan Absat Tafader. I'm a web developer. I'm experiencing the most famous javascript framework React Js. Besides that, I'm a web designer so I have better experience in CSS, SASS, Photoshop, Illustrator, XD, Figma. I'm very comfortable with Bootstrap, Material UI, Tailwind. 
                            </p>
                            <p>
                            I'm also comfortable with Redux, Next Js, Typescript, Gatsby, GraphQL, Apollo. Most commonly I use VS Code but I have experience with Atom, Sublime, Brackets.   
                            </p>
                                <p>
                                    More are my works depends on full-stack so I'm very familiar with Node js, Express, Mongodb, Axios, Postman. I have little experience in PHP, Laravel. I'm also a wordpress developer. 
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={cvOne} alt="myCV" className="img-fluid"/>
                            <img src={cvTwo} alt="myCV" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;