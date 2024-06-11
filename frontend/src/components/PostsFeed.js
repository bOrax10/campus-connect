import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCommentAlt, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const PostsFeed = () => {
    const feed = [
        {
            name: "Aravind S",
            avatar: "./assets/Avatar.jpg", // Change the avatar path here
            username: "aravind.s",
            time: "1hr ago",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus felis vel convallis hendrerit. Aliquam erat volutpat. Mauris non est. ",
            tags: ["Software", "AI"],
            comments: 3,
            likes: 10, // Initial number of likes for the first post
            liked: true, // Initial liked state for the first post
            postId: 0,
        },
        {
            name: "Aravind S",
            avatar: "./assets/Avatar.jpg", // Change the avatar path here
            username: "aravind.s",
            time: "1hr ago",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus felis vel convallis hendrerit. Aliquam erat volutpat. Mauris non est.https://medium.com/@techsuneel99/message-queue-in-node-js-with-bullmq-and-redis-7fe5b8a21475",
            tags: ["Software", "AI"],
            comments: 3,
            likes: 5, // Initial number of likes for the second post
            liked: false, // Initial liked state for the second post
            postId: 1,
        },
    ];

    const [likesCount, setLikesCount] = useState(feed.map((post) => post.likes));
    const [likedPosts, setLikedPosts] = useState(feed.map((post) => post.liked));

    const handleLikeClick = (index) => {
        setLikesCount((prevCounts) => {
            const newCounts = [...prevCounts];
            if (likedPosts[index]) {
                newCounts[index] -= 1;
            } else {
                newCounts[index] += 1;
            }
            return newCounts;
        });
        setLikedPosts((prevLikes) => {
            const newLikes = [...prevLikes];
            newLikes[index] = !newLikes[index];
            return newLikes;
        });
    };

    return (
        <div>
            {feed.map((feedItem, index) => (
                <div className="d-flex flex-column" key={index}>
                    <Link
                        to={`/explore/posts/${feedItem.postId}`}
                        style={{ textDecoration: "none" }}
                    >
                        <div className="d-flex">
                            <div
                                className="avatar-container me-3"
                                style={{ backgroundColor: "grey", width: "5%" }}
                            >
                                <img src={feedItem.avatar} alt="Avatar" />{" "}
                                {/* Use img tag to display the avatar */}
                            </div>
                            <div className="d-flex flex-column">
                                <h6 className="card-title">{feedItem.name}</h6>
                                <h6 className="card-subtitle mb-2 text-body-secondary">
                                    @{feedItem.username} • {feedItem.time}
                                </h6>
                            </div>
                        </div>
                        <small className="text-secondary">{feedItem.description}</small>
                    </Link>

                    <div className="d-flex flex-row flex-wrap align-items-center">
                        {feedItem.tags.map((tag, indexx) => (
                            <div className="me-2 mt-2" key={indexx}>
                                <button className="btn btn-secondary">{tag}</button>
                            </div>
                        ))}
                    </div>

                    <div
                        className="rounded d-flex mt-3 mb-1 justify-content-center btn-group"
                        role="group"
                        aria-label="Feed Interaction"
                    >
                        <button
                            className={`btn btn-light col-3 ${
                                likedPosts[index] ? "text-dark" : "text-secondary"
                            }`}
                            style={{ border: "1px solid grey" }}
                            onClick={() => handleLikeClick(index)}
                        >
                            <FontAwesomeIcon
                                icon={faThumbsUp}
                                className={`mr-1 ${
                                    likedPosts[index] ? "text-dark" : "text-secondary"
                                }`}
                            />{" "}
                            {likesCount[index]}
                        </button>
                        <Link
                            to={`/explore/posts/${feedItem.postId}`}
                            className="btn btn-light col-3"
                            style={{ border: "1px solid grey" }}
                        >
                            <FontAwesomeIcon icon={faCommentAlt} className="text-secondary" />{" "}
                            {feedItem.comments}
                        </Link>
                        <button
                            className="btn btn-light col-3"
                            style={{ border: "1px solid grey" }}
                        >
                            <FontAwesomeIcon icon={faRetweet} className="text-secondary" /> Repost
                        </button>
                    </div>

                    {index !== feed.length - 1 && <hr />}
                </div>
            ))}
        </div>
    );
};

export default PostsFeed;
