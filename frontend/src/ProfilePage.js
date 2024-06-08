import Nav from "./components/Nav";
import RightOffCanvas from "./components/RightOffCanvas";
import OffCanvas from "./components/OffCanvas";
import { AuthContext } from "./AuthContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useContext, useState } from "react";
import PostsFeed from "./components/PostsFeed";
import Certifications from "./components/Certifications";

const ProfilePage = () => {
    const { isLoggedIn, userData, logout } = useContext(AuthContext);

    const user = {
        name: "John Tarader",
        course: 'B.Tech',
        dept: 'ECE',
        year: 3,
        avatar: './assets/Avatar.jpg',
        bio: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        skills: ["Photoshop", "Figma", "C++", "Python"],
        connections: 375,
        projects: [
            { title: 'Project 1', description: 'Description for project 1' },
            { title: 'Project 2', description: 'Description for project 2' },
            { title: 'Project 3', description: 'Description for project 3' },
            { title: 'Project 4', description: 'Description for project 4' },
            { title: 'Project 5', description: 'Description for project 5' },
            { title: 'Project 6', description: 'Description for project 6' }
        ]
    };

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
        <div>
            <div className="d-flex flex-row" style={{ backgroundColor: "#f8f8fa" }}>
                <div className="col-lg-2 col-md-3">
                    <OffCanvas />
                </div>
                
                <div className="d-flex flex-column col-10">
                    <Nav/>

                    <div className="d-flex flex-row">
                        <div className="col-lg-8 col-md-8">
                            <div className="card ms-4">
                                <div className="card-body">
                                    <div className="justify-content-center">
                                        <div className='d-flex align-items-center'>
                                            <div className='avatar-container me-3' style={{backgroundColor: "grey", width: "12%"}}>
                                                <img src={user.avatar} alt="Avatar" />
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <h3 className="card-title">{user.name}</h3>
                                                <h5 className="card-subtitle mb-2 text-body-secondary">{user.course} • {user.dept} • {user.year} Year</h5>
                                            </div>

                                            <div className="ms-auto">
                                                <button className="btn btn-primary">+ Connect</button>
                                            </div>
                                        </div>
                                        <p className="mt-2 text-secondary">{user.bio}</p>
                                        <hr />
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex col-8 flex-wrap">
                                                {user.skills.map((skill, index) => (
                                                    <div key={index}>
                                                        <button className="mx-2 mb-2 btn btn-secondary">{skill}</button>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="ms-auto"><b>{user.connections}</b> connections</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card ms-4 mt-3">
                                <div className="card-body">
                                    <div className="justify-content-center">
                                        <div className='d-flex align-items-center'>
                                            Projects
                                        </div>
                                        <hr />
                                        <div className="project-carousel d-flex overflow-auto">
                                            {user.projects.map((project, index) => (
                                                <div className="col-5" key={index} style={{ flex: '0 0 auto' }}>
                                                    <div className="card mx-2">
                                                        <div className="card-body" style={{ height: '200px', backgroundColor: '#e9ecef' }}>
                                                            <h5 className="card-title">{project.title}</h5>
                                                            <p className="card-text">{project.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card ms-4 my-3">
                                <div className="card-body">
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
                                            style={getButtonStyle("Recommendations")}
                                            onClick={() => handleNavClick("Recommendations")}
                                        >
                                            Recommendations
                                        </button>
                                        <button
                                            className='btn col-3 mx-2'
                                            style={getButtonStyle("Certifications")}
                                            onClick={() => handleNavClick("Certifications")}
                                        >
                                            Certifications
                                        </button>
                                    </div>
                                    <hr />
                                    {navState=="Posts" && 
                                        <PostsFeed/>
                                    }
                                    {navState=="Certifications" &&
                                        <Certifications/>
                                    }
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-4 col-md-4 d-flex justify-content-center">
                            <RightOffCanvas />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
