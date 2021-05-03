import React from 'react';
import "./HeaderMain.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Typewriter from "typewriter-effect";
import pdfFile from "../../../../File/resume.pdf";

const HeaderMain = () => {
    return (
        <main className="Header-main">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-md-6 d-flex align-items-center h-100">
                        <section>
                            <h1>HI, I'M <br></br>FARHAN ABSAR <br></br> TAFADER</h1>
                            <p className="mt-2">
                                <Typewriter options={{loop: true, autoStart: true,}} onInit={typewriter =>{
                                    typewriter.typeString("I'm a web developer, web designer, ux/ui designer and creator. I always Search for Excellence and always dream to be the light of tomorrow.")
                                    .pauseFor(500)
                                    .deleteAll()
                                    .start()
                                }}></Typewriter>
                            </p>
                            <button className="mt-2"><a href={pdfFile} download><FontAwesomeIcon icon={faDownload} color="black" /> Download My Resume</a></button>
                        </section>
                    </div>
                    <div className="col-md-6 d-flex align-items-end justify-content-end">
                        <section>
                            <a href="https://www.facebook.com/farhanabsartafader/"><FontAwesomeIcon className="mx-2" icon={faFacebook} color="white" size="2x"/></a>
                            <a href="https://github.com/farhanabsar21"><FontAwesomeIcon className="mx-2" icon={faGithub} color="white" size="2x"/></a>
                            <a href="https://www.linkedin.com/in/farhanabsartafader/"><FontAwesomeIcon className="mx-2" icon={faLinkedin} color="white" size="2x"/></a>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;
