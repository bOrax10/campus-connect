import React from "react";
import { useParams } from "react-router-dom/";
import CourseReview from "./components/CourseReview";
import Nav from "./components/Nav";
import OffCanvas from "./components/OffCanvas";
import RightOffCanvas from "./components/RightOffCanvas";

const CoursePage = () => {
    console.log("hi");
    const { courseCode } = useParams();
    console.log(courseCode);
    return (
        <div className="d-flex flex-row" style={{ backgroundColor: "#f8f8fa" }}>
            <div className="col-lg-2 col-md-3">
                <OffCanvas />
            </div>

            <div className="d-flex flex-column col-10">
                <Nav />

                <div className="d-flex flex-row">
                    <div className="col-lg-8 col-md-8">
                        <div className="ms-4">
                            <CourseReview courseCode={courseCode} />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 d-flex justify-content-center">
                        <RightOffCanvas />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePage;
