import React from "react";
import Nav from "./components/Nav";
import OffCanvas from "./components/OffCanvas";
import RightOffCanvas from "./components/RightOffCanvas";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CourseReviewPage = () => {
    const reviews = [
        {
            courseCode: "ME101",
            courseName: "Engineering Mechanics",
            ratingCount: 452,
            rating: 3.4,
            reviews: [
                {
                    id: "1",
                    author: "Aravind S",
                    username: "@aravind_s",
                    review: "At Pluralsight, we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow.",
                    time: "1hr ago",
                    likes: 10,
                    dislikes: 0,
                },
            ],
        },
        {
            courseCode: "CS201",
            courseName: "Data Structures and Algorithms",
            ratingCount: 356,
            rating: 4.2,
            reviews: [
                {
                    id: "1",
                    author: "Aravind S",
                    username: "@aravind_s",
                    review: "At Pluralsight, we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow.",
                    time: "1hr ago",
                    likes: 10,
                    dislikes: 0,
                },
            ],
        },
        {
            courseCode: "EE301",
            courseName: "Electrical Circuits",
            ratingCount: 218,
            rating: 3.8,
            reviews: [
                {
                    id: "1",
                    author: "Aravind S",
                    username: "@aravind_s",
                    review: "At Pluralsight, we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow.",
                    time: "1hr ago",
                    likes: 10,
                    dislikes: 0,
                },
            ],
        },
        {
            courseCode: "ME201",
            courseName: "Thermodynamics",
            ratingCount: 145,
            rating: 3.9,
            reviews: [
                {
                    id: "1",
                    author: "Aravind S",
                    username: "@aravind_s",
                    review: "At Pluralsight, we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow.",
                    time: "1hr ago",
                    likes: 10,
                    dislikes: 0,
                },
            ],
        },
        {
            courseCode: "CS401",
            courseName: "Machine Learning",
            ratingCount: 532,
            rating: 4.5,
            reviews: [
                {
                    id: "1",
                    author: "Aravind S",
                    username: "@aravind_s",
                    review: "At Pluralsight, we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow.",
                    time: "1hr ago",
                    likes: 10,
                    dislikes: 0,
                },
            ],
        },
        {
            courseCode: "EE401",
            courseName: "Control Systems",
            ratingCount: 97,
            rating: 4.0,
        },
    ];

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 !== 0 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;

        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i className="bi bi-star-fill text-warning" key={`full-${i}`} />);
        }
        for (let i = 0; i < halfStars; i++) {
            stars.push(<i className="bi bi-star-half text-warning" key={`half-${i}`} />);
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<i className="bi bi-star text-warning" key={`empty-${i}`} />);
        }

        return stars;
    };

    return (
        <div className="d-flex flex-row" style={{ backgroundColor: "#f8f8fa" }}>
            <div className="col-lg-2 col-md-3">
                <OffCanvas />
            </div>

            <div className="d-flex flex-column col-10">
                <Nav />

                <div className="d-flex flex-row">
                    <div className="col-lg-8 col-md-8">
                        <div className="ms-5 mb-4">
                            <div className="">
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-primary ms-auto">
                                        Add Course +
                                    </button>
                                </div>

                                <div className="row mt-3 justify-content-center">
                                    {reviews.map((review, index) => (
                                        <div className="card col-5 me-2 my-1" key={index}>
                                            <Link
                                                to={`/course-review/${review.courseCode}`}
                                                style={{ textDecoration: "none", color: "inherit" }}
                                            >
                                                <div className="card-body text-dark">
                                                    <h3>{review.courseCode}</h3>
                                                    <p className="text-secondary">
                                                        {review.courseName}
                                                    </p>
                                                    <div className="d-flex">
                                                        {renderStars(review.rating)}
                                                        <small className="ms-2">
                                                            <b>{review.ratingCount}</b> ratings
                                                        </small>
                                                    </div>
                                                </div>
                                            </Link>
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
};

export default CourseReviewPage;
