import React from "react";
import Nav from "./components/Nav";
import OffCanvas from "./components/OffCanvas";
import RightOffCanvas from "./components/RightOffCanvas";

const CourseReviewPage = () => {

    const reviews = [
        {
            "courseCode": "ME101",
            "courseName": "Engineering Mechanics",
            "ratingCount": 452,
            "rating": 3.4,
        },
        {
            "courseCode": "ME101",
            "courseName": "Engineering Mechanics",
            "ratingCount": 452,
            "rating": 3.4,
        },
        {
            "courseCode": "ME101",
            "courseName": "Engineering Mechanics",
            "ratingCount": 452,
            "rating": 3.4,
        },
        {
            "courseCode": "ME101",
            "courseName": "Engineering Mechanics",
            "ratingCount": 452,
            "rating": 3.4,
        },
        {
            "courseCode": "ME101",
            "courseName": "Engineering Mechanics",
            "ratingCount": 452,
            "rating": 3.4,
        },
        {
            "courseCode": "ME101",
            "courseName": "Engineering Mechanics",
            "ratingCount": 452,
            "rating": 3.4,
        },
        
    ]

    return (
        <div className="d-flex flex-row" style={{ backgroundColor: "#f8f8fa" }}>
            <div className="col-lg-2 col-md-3">
                <OffCanvas />
            </div>

            <div className="d-flex flex-column col-10">
                <Nav/>

                <div className="d-flex flex-row">
                    <div className="col-lg-8 col-md-8">
                        <div className="ms-5 mb-4">
                            <div className="">
                                <div className="d-flex justify-content-end"><button className="btn btn-primary ms-auto">Add Course +</button></div>
                                
                                <div className="row mt-3 justify-content-center">
                                    {reviews.map((review, index) => (
                                        <div className="card col-5 me-2 my-1">
                                            <div className="card-body">
                                                <h3>{review.courseCode}</h3>
                                                <p>{review.courseName}</p>
                                                <div className="d-flex">
                                                    <small><b>{review.ratingCount}</b> ratings</small>

                                                </div>
                                            </div>
                                        </div>        
                                    ))}
                                </div>
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
 
export default CourseReviewPage;