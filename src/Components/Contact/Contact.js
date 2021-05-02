import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Shared/Footer/Footer';

const Contact = () => {
    return (
        <section className="contact p-3">
            <div className="container">
                <Navbar></Navbar>
            </div>
            <div className="container">
                <div className="contact-content px-5 mt-5">
                    <div className="row h-100">
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <div>
                                <h2>Let's Talk?</h2>
                                <p>If you are interested in my working process, your are most welcome to create a contact with me.</p>
                                <p><FontAwesomeIcon icon={faPhone} color={"black"}/> +8801947476849</p>
                                <p><FontAwesomeIcon icon={faMailBulk} color={"black"} /> farhanabsarofficial21@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <form action="">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="your name.." />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="your subject.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" placeholder="your email.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <textarea name="" id="" cols="30" rows="5" placeholder="your message.."></textarea>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn mt-2"> <FontAwesomeIcon icon={faPaperPlane} color="white" /> Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Contact;