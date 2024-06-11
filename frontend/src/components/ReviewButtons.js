import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const ReviewButtons = ({ review, handleLikeClick }) => {
    return (
        <div
            className="rounded d-flex mt-3 mb-1 justify-content-center btn-group"
            role="group"
            aria-label="Post Interaction"
        >
            <button
                className={`btn btn-light col-3 ${review.liked ? "text-dark" : "text-secondary"}`}
                style={{ border: "1px solid grey" }}
                onClick={() => handleLikeClick(review.id, "like")}
            >
                <FontAwesomeIcon
                    icon={faThumbsUp}
                    className={`mr-1 ${review.liked ? "text-dark" : "text-secondary"}`}
                />{" "}
                {review.likes}
            </button>
            <button
                className={`btn btn-light col-3 ${
                    review.disliked ? "text-dark" : "text-secondary"
                }`}
                style={{ border: "1px solid grey" }}
                onClick={() => handleLikeClick(review.id, "dislike")}
            >
                <FontAwesomeIcon
                    icon={faThumbsDown}
                    className={`mr-1 ${review.disliked ? "text-dark" : "text-secondary"}`}
                />{" "}
                {review.dislikes}
            </button>
        </div>
    );
};

export default ReviewButtons;
