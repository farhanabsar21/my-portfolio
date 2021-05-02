import React from 'react';
import "./ContactSummary.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
const ContactSummary = () => {
    const sendEmail = event => {
        event.preventDefault();
        emailjs.sendForm('service_cumo60h', 'template_ar1ixwt', event.target, 'user_3WN9y2EMsPdqNnxm8ip0T')
        .then(res => res)
        .catch(err => console.log(err.text))
    }
    return (
        <section className="Contact-summary">
            <div className="container text-center mt-5">
                <div>
                    <h2>Wanna Hire Me? Just Mail!</h2>
                </div>
                    <div className="row mt-5">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <form action="" onSubmit={sendEmail}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="name" placeholder="your name.." />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="subject" placeholder="your subject.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="email" name="email" placeholder="your email.." />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <textarea name="text" id="" cols="30" rows="5" placeholder="your message.."></textarea>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="btn mt-2"> <FontAwesomeIcon icon={faPaperPlane} color="white" /> Send</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
        </section>
    );
};

export default ContactSummary;