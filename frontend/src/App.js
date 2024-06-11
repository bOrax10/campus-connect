import React, { useContext } from "react";
import { AuthProvider, AuthContext } from "./AuthContext";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import ExplorePage from "./ExplorePage";
import { useState, useEffect } from "react";
import "./App.css";
import PostPage from "./PostPage";
import CreatePage from "./CreatePage";
import ProfilePage from "./ProfilePage";
import Opportunities from "./OpportunitiesPage";
import CourseReviewPage from "./CourseReviewPage";
import CoursePage from "./CoursePage";
import ProjectPage from "./ProjectPage";

function App() {
    return (
        <AuthProvider>
            <Router>
                <AuthRoutes />
            </Router>
        </AuthProvider>
    );
}

const AuthRoutes = () => {
    const { isLoggedIn } = useContext(AuthContext);

    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = () => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    //console.log(screenSize);

    return (
        <div>
            <div className="d-lg-none">
                <div className="container-fluid">
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <h2>This website supports desktops only.</h2>
                    </div>
                </div>
            </div>

            {/* Routes */}
            {screenSize.width >= 992 && (
                <Switch>
                    <Route path="/" exact>
                        {!isLoggedIn ? <LandingPage /> : <Redirect to="/feed" />}
                    </Route>
                    <Route path="/feed" exact>
                        {isLoggedIn ? <HomePage /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/explore" exact>
                        {isLoggedIn ? <ExplorePage /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/explore/posts/:postId">
                        {isLoggedIn ? <PostPage /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/explore/projects/:projectId">
                        {isLoggedIn ? <ProjectPage /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/create">
                        {isLoggedIn ? <CreatePage /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/profile">
                        {isLoggedIn ? <ProfilePage /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/opportunities">
                        {isLoggedIn ? <Opportunities /> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/course-review">
                        {isLoggedIn ? <CourseReviewPage /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/course-review/:courseCode">
                        {isLoggedIn ? <CoursePage /> : <Redirect to="/" />}
                    </Route>
                    {/* <Route path={['/course-review']}>
          <div className='container-fluid' style={{ backgroundColor: "#f8f8fa" }}>
            <div className="row">
              <div className="col-lg-2 col-md-3">
                <OffCanvas></OffCanvas>
              </div>
              <div className="col-lg-7 col-md-6">
                hi
              </div>
              <div className="col-lg-3 d-flex justify-content-center mt-4">
                <RightOffCanvas></RightOffCanvas>
              </div>
            </div>
          </div>
        </Route> */}
                </Switch>
            )}
        </div>
    );
};

export default App;
