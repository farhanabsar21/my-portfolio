import React from 'react';
import Footer from '../Shared/Footer/Footer';
import AboutSummary from './AboutSummary/AboutSummary';
import ContactSummary from './ContactSummary/ContactSummary';
import Header from './Header/Header';
import ProjectSummary from './ProjectSummary/ProjectSummary';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutSummary></AboutSummary>
            <ProjectSummary></ProjectSummary>
            <ContactSummary></ContactSummary>
            <Footer></Footer>
        </div>
    );
};

export default Home;