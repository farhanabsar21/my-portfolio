import React from 'react';
import "./ProjectSummary.css";
import roasterImg from "../../../Images/firstProject/roaster-home.png";
import doinikImg from "../../../Images/secondProject/doinik-bazar-home.png";
import liverpoolImg from "../../../Images/thirdProject/liverpool-home.png";
import { Link } from 'react-router-dom';

const ProjectSummary = () => {
    return (
       <section className="ProjectSummary text-center py-5">
           <div className="container h-100 text-center">
           <h2 className="text-white pt-3">My Top Projects</h2>
                <div className="project-container d-flex align-items-center justify-content-center">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="card project-card-details" style={{ width: "18rem" }}>
                                <img src={roasterImg} alt="roaster" />
                                <div className="card-body">
                                    <h5>Roaster The Bean</h5>
                                    <p>This project is all about coffee bean roasting service</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="card project-card-details" style={{ width: "18rem" }}>
                                <img src={doinikImg} alt="roaster" />
                                <div className="card-body">
                                    <h5>Doinik Bazar Ecommerce</h5>
                                    <p>This project is all about regular ecommerece service</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="card project-card-details" style={{ width: "18rem" }}>
                                <img src={liverpoolImg} alt="roaster" />
                                <div className="card-body">
                                    <h5>Liverpool Select Team</h5>
                                    <p>This project is all about selecting players for the club</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="/projects"><button>Show Details</button></Link>
                </div>
           </div>
       </section>
    );
};

export default ProjectSummary;