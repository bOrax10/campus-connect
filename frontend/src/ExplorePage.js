import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import OffCanvas from './components/OffCanvas';
import RightOffCanvas from './components/RightOffCanvas';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Nav from './components/Nav';
import PostsFeed from './components/PostsFeed';
import ProjectsFeed from './components/ProjectsFeed';

const ExplorePage = () => {
    const { isLoggedIn, userData, logout } = useContext(AuthContext);
    const [navState, setNavState] = useState("Posts");

    const handleNavClick = (navItem) => {
        setNavState(navItem);
    };

    const getButtonStyle = (navItem) => {
        if (navState === navItem) {
            return {
                backgroundColor: '#ffffff',
                color: '#262634'
            };
        } else {
            return {
                backgroundColor: '#e8eaee',
                color: '#939498'
            };
        }
    };
    
    return (
        <div className="d-flex flex-row" style={{ backgroundColor: "#f8f8fa" }}>
            <div className="col-lg-2 col-md-3">
                <OffCanvas />
            </div>

            <div className="d-flex flex-column col-10">
                <Nav/>

                <div className="d-flex flex-row">
                    <div className="col-lg-8 col-md-8">
                        <div className="card ms-4 mb-4">
                            <div className="card-body">
                                <div className="justify-content-center">
                                    <div className="card-title d-flex justify-content-between rounded py-2 px-0" style={{backgroundColor: "#e8eaee"}}>
                                        <button
                                            className='btn col-3 mx-2'
                                            style={getButtonStyle("Posts")}
                                            onClick={() => handleNavClick("Posts")}
                                        >
                                            Posts
                                        </button>
                                        <button
                                            className='btn col-3 mx-2'
                                            style={getButtonStyle("Projects")}
                                            onClick={() => handleNavClick("Projects")}
                                        >
                                            Projects
                                        </button>
                                        <button
                                            className='btn col-3 mx-2'
                                            style={getButtonStyle("Requests")}
                                            onClick={() => handleNavClick("Requests")}
                                        >
                                            Requests
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                    {navState==='Posts' && <PostsFeed/>}
                                    {navState==='Projects' && <ProjectsFeed/>}
                            </div>
                        </div>
                    </div>    

                    <div className="col-lg-4 col-md-4 d-flex justify-content-center">
                        <RightOffCanvas />
                    </div>                
                </div>
            </div>
            
            
        </div>
    );
}

export default ExplorePage;
