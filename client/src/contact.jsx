import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

{/* This is the contact page where users can fill out a form to contact me */}
export default function Contact() {

    {/* The contact page contains a form that allows users to input their first name, last name, contact number, email, and message. 
        The form data is stored in the formData state variable and is updated using the handleChange function. When the form is submitted
        using the handleSubmit function, an alert is displayed with the form data and the user is redirected to the home page. */}
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    {/* This is where the form data is stored and updated using the handleChange function */}
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    {/* This function is called when the user types in the form fields. It updates the formData state variable with the new values. */}
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    {/* This function is called when the user submits the form. It displays an alert with the form data and redirects the user to the home page. */}
    const handleSubmit = (event) => {
        setIsSubmitted(true);
        event.preventDefault();
        alert(
            `
                First Name: ${formData.firstName}\n
                Last Name: ${formData.lastName}\n
                Contact Number: ${formData.contactNumber}\n
                Email: ${formData.email}\n
                Message: ${formData.message}
            `
        );
    };
    {/* We can't call the Navigate component directly in the handleSubmit function because it is not a valid React component. Instead,
        we use the isSubmitted state variable to conditionally render the Navigate component when the form is submitted. */}
    if (isSubmitted) {
        return <Navigate to="/" replace />
    }

    return (
        <div>
            <h1>Contact Me</h1>
            {/* Basic breakdown of my contacts if the user does not want to fill out the form */}
            <p>
                If you would like to get in touch with me, please fill out the form below and I will get back to you as soon as possible.<br /><br />
                Otherwise, you can reach me at any of the following of your choosing: <br />
                <b>Email:</b> bmoliveria@gmail.com<br />
                <b>School Email:</b> boliveri@my.centennialcollege.ca<br />
                <b>Phone:</b> 416-910-5982
            </p>
            
            {/* The form contains input fields for the user's first name, last name, contact number, email, and message. The form data is stored
                in the formData state variable and is updated using the handleChange function. When the form is submitted using the handleSubmit
                function, an alert is displayed with the form data and the user is redirected to the home page. */}
            <h2>Please fill in all information: </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />

                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />

                <label htmlFor="contactNumber">Contact Number: </label>
                <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />

                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="message">Message: </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}