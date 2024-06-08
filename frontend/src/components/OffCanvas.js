import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const OffCanvas = () => {
    // Get the current location
    const location = useLocation();

    // State to track which button is active
    const [activeButton, setActiveButton] = useState("");

    // Function to handle button clicks
    const handleClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    // Function to determine if a button is active based on the current location
    const isButtonActive = (buttonName) => {
        if (buttonName === "Course Review") {
            return location.pathname.includes("course-review");
        } else {
            return location.pathname.includes(buttonName.toLowerCase());
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center text-dark sticky-top" style={{backgroundColor:"#EFF1F3", height: '100vh', overflowY: 'hidden'}}>
            <nav className="navbar d-flex flex-column">
                <div></div>
                <Link to="/create" className={`btn btn-primary my-3`} style={{width: '100%', border: 'none'}} onClick={() => handleClick('Create Post')}>
                    Create Post
                </Link>
                <Link to="/feed" className={`btn  my-3 text-dark`} style={{width: '100%', backgroundColor: isButtonActive('Feed') ? 'white' : 'transparent', border: 'none'}} onClick={() => handleClick('Feed')}>
                    Feed
                </Link>
                <Link to="/explore" className={`btn  my-3 text-dark`} style={{width: '100%', backgroundColor: isButtonActive('Explore') ? 'white' : 'transparent', border: 'none'}} onClick={() => handleClick('Explore')}>
                    Explore
                </Link>
                <Link to="/course-review" className={`btn  my-3 text-dark`} style={{width: '100%', backgroundColor: isButtonActive('Course Review') ? 'white' : 'transparent', border: 'none'}} onClick={() => handleClick('Course Review')}>
                    Course Review
                </Link>
                <Link to="/opportunities" className={`btn  my-3 text-dark`} style={{width: '100%', backgroundColor: isButtonActive('Opportunities') ? 'white' : 'transparent', border: 'none'}} onClick={() => handleClick('Opportunities')}>
                    Opportunities
                </Link>
                <Link to="/profile" className={`btn  my-3 text-dark`} style={{width: '100%', backgroundColor: isButtonActive('Profile') ? 'white' : 'transparent', border: 'none'}} onClick={() => handleClick('Profile')}>
                    My Profile
                </Link>
            </nav>
        </div>
    );
}
 
export default OffCanvas;
