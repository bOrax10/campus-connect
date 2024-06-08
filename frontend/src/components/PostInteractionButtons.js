// PostInteractionButtons.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faCommentAlt, faRetweet } from '@fortawesome/free-solid-svg-icons';

const PostInteractionButtons = ({ likesCount, liked, commentsCount, handleLikeClick }) => {
    return (
        <div className="rounded d-flex mt-3 mb-1 justify-content-center btn-group" role="group" aria-label="Post Interaction">
            <button
                className={`btn btn-light col-3 ${liked ? 'text-dark' : 'text-secondary'}`}
                style={{ border: "1px solid grey" }}
                onClick={handleLikeClick}
            >
                <FontAwesomeIcon icon={faThumbsUp} className={`mr-1 ${liked ? 'text-dark' : 'text-secondary'}`} /> {likesCount}
            </button>
            <button className='btn btn-light col-3' style={{ border: "1px solid grey" }}>
                <FontAwesomeIcon icon={faCommentAlt} className='text-secondary' /> {commentsCount}
            </button>
            <button className='btn btn-light col-3' style={{ border: "1px solid grey" }}>
                <FontAwesomeIcon icon={faRetweet} className='text-secondary' /> Repost
            </button>
        </div>
    );
}

export default PostInteractionButtons;
