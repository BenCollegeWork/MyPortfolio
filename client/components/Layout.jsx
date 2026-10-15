import React from 'react';
import { Link } from 'react-router-dom';

{/* This is the layout component that contains the header and navigation bar for the entire application */}
export default function Layout() {
    return (
        <div>
            {/* Banner containing the custom logo and the title of the portfolio */}
            <div className="banner">
                <img src="/Custom_Logo.png" alt="Logo" width="170" height="100" />
                <h1>Benjamin Oliveria's Portfolio</h1>
            </div>

            {/* Navigation bar for the entire application. Accesible in all pages */}
            <hr />
            <nav className="navigationBar">
                <Link to="/">Home</Link> |
                <Link to="/about"> About</Link> |
                <Link to="/project"> Projects</Link> |
                <Link to="/education"> Education</Link> |
                <Link to="/services"> Services</Link> |
                <Link to="/contact"> Contact</Link>
            </nav>
            <hr />
        </div>
    );
}