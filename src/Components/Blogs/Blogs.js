import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import "./Blogs.css";

const Blogs = () => {
    return (
        <section className="blogs p-3">
            <div className="container">
                <Navbar></Navbar>
            </div>
            <div className="d-flex justify-content-center align-items-center text-white blog-content">
                <h1>Page Under Construction</h1>
            </div>
        </section>
    );
};

export default Blogs;