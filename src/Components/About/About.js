import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import "./About.css";
import myImg from "../../Images/myImg.png";
import logos from "../../Images/logos.jpg";

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
                <div className="container bg-white about-skill-container p-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="skills-border pb-3">
                                <h2>My Skills</h2>
                                <ul>
                                    <li><h5>Core Skills:</h5> <p>React Js, MERN Stack, JavaScript (ES6), CSS, SASS, HTML5</p></li>
                                    <li><h5>Comfortable:</h5> <p>Redux, Next Js, Gatsby, Typescript</p></li>
                                    <li><h5>Frameworks:</h5> <p>Bootstrap, Tailwind, Material UI</p></li>
                                    <li><h5>Deployment:</h5> <p>Firebase, Netlify, Heroku, Docker </p></li>
                                    <li><h5>Design Software:</h5><p>Photoshop, Illustrator, XD, Figma</p></li>
                                </ul>
                            </div>
                            <div className="pt-3">
                                <h2>My Education</h2>
                                <p>Currently I'm studying Bachelor in International Relations</p>
                                <p>University of Dhaka</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={logos} alt="logos" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;