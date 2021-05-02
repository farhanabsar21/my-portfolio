import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import "./Projects.css";
import roaster from "../../Images/firstProject/roaster-home.png";
import roasterFirstSc from "../../Images/firstProject/first-one.png";
import roasterSecondSc from "../../Images/firstProject/first-two.png";
import roasterThirdSc from "../../Images/firstProject/first-three.png";
import roasterFourthSc from "../../Images/firstProject/first-four.png";

import doinik from "../../Images/secondProject/doinik-bazar-home.png";
import doinikOne from "../../Images/secondProject/doinik-one.png";
import doinikTwo from "../../Images/secondProject/doinik-two.png";
import doinikThree from "../../Images/secondProject/doinik-three.png";

import liverpool from "../../Images/thirdProject/liverpool-home.png";
import liverOne from "../../Images/thirdProject/liver-one.png";
import liverTwo from "../../Images/thirdProject/liver-two.png";
import liverThree from "../../Images/thirdProject/liver-three.png";
import liverFour from "../../Images/thirdProject/liver-four.png";
import Footer from '../Shared/Footer/Footer';

const Projects = () => {
    return (
        <section className="all-projects">
            <div className="container">
                <Navbar></Navbar>
            </div>
            <div className="container text-center">
                <h2 className="text-white my-5">My Project Details</h2>
                <div className="bg-white p-5 project-detail">
                    <div className="p-3">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={roaster} alt="roaster" className="img-fluid" />
                            </div>
                            <div className="col-md-6 text-left d-flex align-items-center">
                                <div>
                                    <h4>Roaster The Bean</h4>
                                    <p>Roaster The Bean is coffee roasting project service where the company mainly cleans the beans, washes them, roast them and also grind them as requirement.</p>
                                    <h6>Technology: MERN Stack, CSS, REST APIs, Bootstrap, Firebase, Netlify, Heroku</h6>
                                    <div className="code-link text-center mt-5">
                                        <a href="https://peaceful-sinoussi-0a72eb.netlify.app/">Live Demo</a>
                                        <a href="https://github.com/farhanabsar21/Roaster-The-Bean-React-Client">Client Side Code</a>
                                        <a href="https://github.com/farhanabsar21/Roster-The-Bean-React-Server">Server Side Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* screenshots */}
                    <div>
                        <h2 className="my-5">Check Out Some Screenshots</h2>
                        <div className="row screenshots">
                            <div className="col-md-3">
                                <img src={roasterFirstSc} alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-3">
                                <img src={roasterSecondSc} alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-3">
                                <img src={roasterThirdSc} alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-3">
                                <img src={roasterFourthSc} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* project detail start */}
                <div className="bg-white p-5 project-detail mt-5">
                    <div className="p-3">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={doinik} alt="roaster" className="img-fluid" />
                            </div>
                            <div className="col-md-6 text-left d-flex align-items-center">
                                <div>
                                    <h4>Doinik Bazar Ecommerce</h4>
                                    <p>Doinik Bazar is an ecommerce project for regular shopping.</p>
                                    <h6>Technology: MERN Stack, CSS, REST APIs, Bootstrap, Firebase, Netlify, Heroku</h6>
                                    <div className="code-link text-center mt-5">
                                        <a href="https://sad-poitras-a082bf.netlify.app/">Live Demo</a>
                                        <a href="https://github.com/farhanabsar21/Doinik-Bazar-React-Client">Client Side Code</a>
                                        <a href="https://github.com/farhanabsar21/Doinik-Bazar-React-Server">Server Side Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* screenshots */}
                    <div>
                        <h2 className="my-5">Check Out Some Screenshots</h2>
                        <div className="row screenshots">
                            <div className="col-md-3">
                                <img src={doinikOne} alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-3">
                                <img src={doinikTwo} alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-3">
                                <img src={doinikThree} alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-3">
                                <img src={doinik} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* project detail start */}
                <div className="bg-white p-5 project-detail mt-5">
                    <div className="p-3">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={liverpool} alt="roaster" className="img-fluid" />
                            </div>
                            <div className="col-md-6 text-left d-flex align-items-center">
                                <div>
                                    <h4>Liverpool Squad Selection</h4>
                                    <p>Liverpool squad selection is player selecting app before the match. Coath can select according to the players position, salary</p>
                                    <h6>Technology: React Js, CSS, REST APIs, Netlify, Heroku</h6>
                                    <div className="code-link text-center mt-5">
                                        <a href="https://dazzling-bartik-f439df.netlify.app/">Live Demo</a>
                                        <a href="https://github.com/farhanabsar21/Football-Team-Select-React">Client Side Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* screenshots */}
                    <div>
                        <h2 className="my-5">Check Out Some Screenshots</h2>
                        <div className="row screenshots">
                            <div className="col-md-3">
                                <img src={liverOne} alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-3">
                                <img src={liverTwo} alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-3">
                                <img src={liverThree} alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-3">
                                <img src={liverFour} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Projects;