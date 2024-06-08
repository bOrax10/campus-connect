import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';

const CommentSection = ({ post, setPost }) => {
    const { userData } = useContext(AuthContext);
    const [newComment, setNewComment] = useState('');
    const [replyData, setReplyData] = useState({ commentIndex: null, reply: '' });

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleReplyChange = (event) => {
        setReplyData({ ...replyData, reply: event.target.value });
    };

    const handleReply = (commentIndex) => {
        setReplyData({ commentIndex, reply: '' });
    };

    const handleDeleteComment = (commentId) => {
        setPost(prevPost => ({
            ...prevPost,
            comments: prevPost.comments.filter(comment => comment.id !== commentId)
        }));
    };

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            const newPost = {
                ...post,
                comments: [
                    {
                        id: post.comments.length + 1,
                        author: userData.name, // Change to the appropriate field from userData
                        username: userData.username, // Change to the appropriate field from userData
                        time: 'just now',
                        comment: newComment,
                        replies: []
                    },
                    ...post.comments // Previous comments
                ]
            };
            setPost(newPost);
            setNewComment('');
        }
    };

    const handleAddReply = () => {
        if (replyData.reply.trim() !== '') {
            const newPost = {
                ...post,
                comments: post.comments.map((comment, index) => {
                    if (index === replyData.commentIndex) {
                        return {
                            ...comment,
                            replies: [
                                ...comment.replies, // Previous replies
                                {
                                    id: comment.replies.length + 1,
                                    author: userData.name, // Change to the appropriate field from userData
                                    username: userData.username, // Change to the appropriate field from userData
                                    time: 'just now',
                                    reply: replyData.reply,
                                    avatar: userData.avatar // Change to the appropriate field from userData
                                }
                            ]
                        };
                    }
                    return comment;
                })
            };
            setPost(newPost);
            setReplyData({ commentIndex: null, reply: '' });
        }
    };

    const handleDeleteReply = (commentIndex, replyId) => {
        setPost(prevPost => ({
            ...prevPost,
            comments: prevPost.comments.map((comment, index) => {
                if (index === commentIndex) {
                    return {
                        ...comment,
                        replies: comment.replies.filter(reply => reply.id !== replyId)
                    };
                }
                return comment;
            })
        }));
    };

    return (
        <div>
            <div className="d-flex align-items-center">
                <div className='avatar-container me-3' style={{ backgroundColor: "grey", width: "7%" }}>
                    <span role="img" aria-label="avatar">{userData.avatar}</span>
                </div>
                <div className="input-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="write your comment" 
                        aria-label="Username" 
                        aria-describedby="basic-addon1"
                        value={newComment}
                        onChange={handleCommentChange}
                    />
                </div>
                <div>
                    <button 
                        className='btn btn-primary ms-2' 
                        style={{ whiteSpace: 'nowrap' }}
                        onClick={handleAddComment}
                    >
                        + Post Comment
                    </button>
                </div>
            </div>
            
            <hr />

            {post.comments.map((comment, commentIndex) => (
                <div className="d-flex flex-column" key={comment.id}>
                    <div className='d-flex'>
                        <div className='avatar-container me-3' style={{ backgroundColor: "grey", width: "5%" }}>
                            <span role="img" aria-label="avatar">{comment.avatar}</span>
                        </div>
                        <div className='d-flex flex-column'>
                            <h6 className="card-title">{comment.author}</h6>
                            <h6 className="card-subtitle mb-2 text-body-secondary">@{comment.username} • {comment.time}</h6>
                        </div>

                        <div className="dropdown ms-auto">
                            <button className="btn text-secondary" type="button" id={`dropdownMenuButton-${commentIndex}`} data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-ellipsis-v"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby={`dropdownMenuButton-${commentIndex}`}>
                                <li>
                                    <button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#replyModal" onClick={() => handleReply(commentIndex)}>Reply</button>
                                </li>
                                {comment.username === userData.username && (
                                    <li>
                                        <button className="dropdown-item" onClick={() => handleDeleteComment(comment.id)}>Delete</button>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <p className='text'>{comment.comment}</p>
                    <div className=''>
                        {comment.replies.slice(0).reverse().map((reply, replyIndex) => (
                            <div className='ms-5 ps-5' key={reply.id}>
                                <div className='d-flex'>
                                    <div className='avatar-container me-3' style={{ backgroundColor: "grey", width: "6%" }}>
                                        <span role="img" aria-label="avatar">{reply.avatar}</span>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <h6 className="card-title">{reply.author}</h6>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">@{reply.username} • {reply.time}</h6>
                                    </div>
                                    {reply.username === userData.username && (
                                        <div className="dropdown ms-auto">
                                            <button className="btn text-secondary" type="button" id={`replyDropdown-${commentIndex}-${replyIndex}`} data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fas fa-ellipsis-v"></i>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby={`replyDropdown-${commentIndex}-${replyIndex}`}>
                                                <li>
                                                    <button className="dropdown-item" onClick={() => handleDeleteReply(commentIndex, reply.id)}>Delete</button>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                <p className='text'>{reply.reply}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className="modal fade" id="replyModal" tabIndex="-1" aria-labelledby="replyModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content"> 
                        <div className="modal-header">
                            <h5 className="modal-title" id="replyModalLabel">Write a Reply</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="write your reply" 
                                    aria-label="Username" 
                                    aria-describedby="basic-addon1"
                                    value={replyData.reply}
                                    onChange={handleReplyChange}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleAddReply} data-bs-dismiss="modal">Post Reply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentSection;
