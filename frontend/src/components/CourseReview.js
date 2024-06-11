import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../AuthContext";
import ReviewButtons from "./ReviewButtons";

const CourseReview = ({ courseCode }) => {
    const { userData } = useContext(AuthContext);

    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [newReview, setNewReview] = useState("");

    useEffect(() => {
        const fetchCourseData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const sampleCourseData = {
                courseCode: "ME101",
                courseName: "Engineering Mechanics",
                ratingCount: 452,
                rating: 3.4,
                reviews: [
                    {
                        id: 1,
                        author: "Aravind S",
                        username: "aravind_s",
                        content:
                            "At Pluralsight, we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow.",
                        time: "1hr ago",
                        likes: 10,
                        dislikes: 0,
                        liked: false,
                        disliked: false,
                    },
                ],
            };
            setCourse(sampleCourseData);
            setLoading(false);
        };

        fetchCourseData();
    }, [courseCode]);

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

    const handleLikeClick = (reviewId, action) => {
        setCourse((prevCourse) => ({
            ...prevCourse,
            reviews: prevCourse.reviews.map((review) => {
                if (review.id === reviewId) {
                    if (action === "like") {
                        const liked = !review.liked;
                        const disliked = liked ? false : review.disliked;
                        const likes = liked ? review.likes + 1 : review.likes - 1;
                        const dislikes = review.disliked ? review.dislikes - 1 : review.dislikes;
                        return {
                            ...review,
                            liked,
                            disliked,
                            likes,
                            dislikes,
                        };
                    } else if (action === "dislike") {
                        const disliked = !review.disliked;
                        const liked = disliked ? false : review.liked;
                        const dislikes = disliked ? review.dislikes + 1 : review.dislikes - 1;
                        const likes = review.liked ? review.likes - 1 : review.likes;
                        return {
                            ...review,
                            disliked,
                            liked,
                            dislikes,
                            likes,
                        };
                    }
                }
                return review;
            }),
        }));
    };

    const handleNewReviewChange = (e) => {
        setNewReview(e.target.value);
    };

    const handlePostReview = () => {
        if (newReview.trim() !== "") {
            const newReviewObject = {
                id: course.reviews.length + 1,
                author: userData.name,
                username: userData.username,
                content: newReview,
                time: "Just now",
                likes: 0,
                dislikes: 0,
                liked: false,
                disliked: false,
            };
            setCourse((prevCourse) => ({
                ...prevCourse,
                reviews: [newReviewObject, ...prevCourse.reviews],
            }));
            setNewReview("");
        }
    };

    const handleDeleteReview = (reviewId) => {
        setCourse((prevCourse) => ({
            ...prevCourse,
            reviews: prevCourse.reviews.filter((review) => review.id !== reviewId),
        }));
    };

    if (loading) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }

    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="my-1">
                    <h3>{course.courseCode}</h3>
                    <p>{course.courseName}</p>
                    <div className="d-flex">
                        {renderStars(course.rating)}
                        <div className="d-flex">
                            <small className="ms-2">
                                <b>{course.ratingCount}</b> ratings
                            </small>
                            <small className="ms-2">
                                <b>{course.reviews.length}</b> reviews
                            </small>
                        </div>
                    </div>
                </div>
                <h5 className="mt-3">Reviews</h5>
                <hr className="mt-0" />
                <div className="d-flex">
                    <div
                        className="avatar-container me-3"
                        style={{ backgroundColor: "grey", width: "7%" }}
                    >
                        <span role="img" aria-label="avatar">
                            {userData.avatar}
                        </span>
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="write a review"
                            value={newReview}
                            onChange={handleNewReviewChange}
                            aria-label="Review"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div>
                        <button
                            className="btn btn-primary ms-2"
                            style={{ whiteSpace: "nowrap" }}
                            onClick={handlePostReview}
                        >
                            + Post Review
                        </button>
                    </div>
                </div>
                <hr />
                {course.reviews.map((review, index) => (
                    <div key={index} className="d-flex flex-column">
                        <div className="d-flex">
                            <div
                                className="avatar-container me-3"
                                style={{ backgroundColor: "grey", width: "7%" }}
                            >
                                <span role="img" aria-label="avatar">
                                    {review.avatar}
                                </span>
                            </div>
                            <div className="d-flex flex-column">
                                <h6 className="card-title">{review.author}</h6>
                                <h6 className="card-subtitle mb-2 text-body-secondary">
                                    @{review.username} • {review.time}
                                </h6>
                                <p className="text">{review.content}</p>
                            </div>
                            {review.username === userData.username && (
                                <div className="dropdown ms-auto">
                                    <button
                                        className="btn text-secondary"
                                        type="button"
                                        id={`dropdownMenuButton-${index}`}
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="fas fa-ellipsis-v"></i>
                                    </button>
                                    <ul
                                        className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby={`dropdownMenuButton-${index}`}
                                    >
                                        <li>
                                            <button
                                                className="dropdown-item"
                                                onClick={() => handleDeleteReview(review.id)}
                                            >
                                                Delete
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <ReviewButtons review={review} handleLikeClick={handleLikeClick} />
                        {index !== course.reviews.length - 1 && <hr />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseReview;
