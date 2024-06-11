import React from "react";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    const { isLoggedIn, userData, logout } = useContext(AuthContext);
    const location = useLocation();
    const history = useHistory();
    //console.log(location);
    const isSpecialRoute =
        location.pathname !== "/create" &&
        location.pathname !== "/feed" &&
        location.pathname !== "/explore" &&
        location.pathname !== "/course-review" &&
        location.pathname !== "/opportunities" &&
        location.pathname !== "/profile";
    //console.log(isSpecialRoute);

    return (
        <div className="d-flex align-items-center">
            {isSpecialRoute && (
                <button
                    onClick={() => history.goBack()}
                    className="m-3 btn btn-light"
                    style={{ color: "#3b3b3b" }}
                >
                    <FontAwesomeIcon icon={faArrowLeft} /> Back
                </button>
            )}
            {!isSpecialRoute && <p className="m-3">Hello {userData.username}!</p>}
            <div className="ms-auto d-flex align-items-center m-3">
                <button className="btn btn-light me-4" style={{ color: "#3b3b3b" }}>
                    <i className="bi bi-bell"></i>
                </button>
                <button onClick={logout} className="btn btn-primary">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Nav;
