import React, { useState } from "react";
import { Navigate } from "react-router-dom";

{/* This is the services page where users can view the services I offer */}
export default function Services() {
    {/* When the user clicks the "Click this box to contact me!" box, they will be navigated to the contact page */}
    const [contactMe, setContactMe] = useState(false);
    const handleContactMe = () => {
        setContactMe(true);
    }
    if (contactMe) {
        return <Navigate to="/contact" replace />;
    }

    {/* Display of the services I offer. Each service is represented by a box containing a title and an image. The last box is clickable
        and will navigate the user to the contact page when clicked. */}
    return (
        <div>
            <h1>Services</h1>
            <p style={{ textAlign: 'center' }}>I offer a range of services to help you achieve your goals.</p>

            <div className="servicesContainer">
                <div className="service">
                    <h4>General Programming: Python, Java, C#</h4>
                    <img src="/programming_img.avif"></img>
                </div>

                <div className="service">
                    <h4>Web Development</h4>
                    <img src="/web_dev_image.jpg"></img>
                </div>

                <div className="service">
                    <h4>Databases</h4>
                    <img src="/database_service.webp"></img>
                </div>

                <div className="service">
                    <h4>Software Development</h4>
                    <img src="/software_dev.jpg"></img>
                </div>

                <div className="service">
                    <h4>Game Development</h4>
                    <img src="/game_image.png"></img>
                </div>

                <div className="service" onClick={handleContactMe}>
                    <h4>Click this box to contact me!</h4>
                    <img src="/contact_image.jpg"></img>
                </div>
            </div>
        </div>
    );
}