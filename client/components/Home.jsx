import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';

{/* This is the default home page where users can directly access other pages through the navigation bar */}
export default function Home() {
    
    {/* When the user clicks the button, they will be navigated to the about page */}
    const [leavePage, setLeavePage] = useState(false);
    const handleLeavePage = () => {
        setLeavePage(true);
    }
    if (leavePage) {
        return <Navigate to="/about" replace />;
    }

    {/* The home page contains a welcome message and a button to navigate directly to the about page */}
    return ( 
        <>  
            <h1>Welcome!</h1>
            <p>
                I'm Benjamin, a Software Engineering Co-op student at Centennial College. I am aspiring to become 
                a full-stack developer but have interests in other programming fields such as databases and game 
                development. My goal will always be to create client-first applications that are user-friendly and accessible to all. 
                I am excited to be on this journey and eager to learn and grow as a developer. 
            </p>

            <button onClick={handleLeavePage}>Click here to learn more about me!</button>
        </>
    );
}