import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import OffCanvas from './components/OffCanvas';
import RightOffCanvas from './components/RightOffCanvas';
import Nav from './components/Nav';
import PostInteractionButtons from './components/PostInteractionButtons';
import CommentSection from './components/CommentSection';


const PostPage = () => {
    const { postId } = useParams();
    const { userData } = useContext(AuthContext);
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Simulate fetching post data from an API
        setPost({
          id: postId,
          author: "John Doe",
          username: "john.doe",
          time: "2hr ago",
          avatar: "",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
          tags: ["Software", "AI"],
          likes: 5,
          liked: false,
          comments: [
            {
                id: 1,
                author: "Jane Smith",
                username: "jane.smith",
                time: "1hr ago",
                comment: "Great post! Thanks for sharing.",
                replies: [
                    {
                        id: 1,
                        author: "John Doe",
                        username: "john.doe",
                        time: "30min ago",
                        reply: "Thanks Jane!",
                        avatar: ""
                    }
                ]
            },
            {
                id: 2,
                author: "Tame Impala",
                username: "t.impala",
                time: "1hr ago",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu euismod mauris. Nulla viverra tempor massa, vitae dapibus augue consectetur.",
                replies: []
            }
          ]
        });
    }, [postId]);

    const handleLikeClick = () => {
        // Simulate toggling the liked state
        setPost(prevPost => ({
            ...prevPost,
            liked: !prevPost.liked,
            likes: prevPost.liked ? prevPost.likes - 1 : prevPost.likes + 1
        }));
        // Make an API call to update the like status on the server
        // Example:
        // fetch(`/api/posts/${postId}/like`, { method: 'POST' })
        //    .then(response => response.json())
        //    .then(data => {
        //        // Update the post state with the new like status
        //    });
    };

    if (!post) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }

    return (
        <div className="d-flex flex-row" style={{ backgroundColor: "#f8f8fa" }}>
            <div className="col-lg-2 col-md-3">
                <OffCanvas />
            </div>

            <div className="d-flex flex-column col-10">
                <Nav/>

                <div className="d-flex flex-row">
                    <div className="col-lg-8 col-md-8">
                        <div className='d-flex flex-column justify-content-center ms-4 mb-4'>
                            <div className="card">
                                <div className="card-body">
                                    <div className='d-flex'>
                                        <div className='avatar-container me-3' style={{backgroundColor: "grey", width: "8%"}}>
                                            <span role="img" aria-label="avatar">{post.avatar}</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <h5 className="card-title">{post.author}</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary">@{post.username} • {post.time}</h6>
                                        </div>
                                    </div>
                                    
                                    <p className='mt-3'>{post.content}</p>

                                    <div className="d-flex flex-row flex-wrap align-items-center">
                                        {post.tags.map((tag, index)=> (
                                            <div className='me-2 mt-1' key={index}>
                                                <button className='btn btn-secondary'>{tag}</button>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <PostInteractionButtons
                                        likesCount={post.likes}
                                        liked={post.liked}
                                        commentsCount={post.comments.length}
                                        handleLikeClick={handleLikeClick}
                                    />
                                    
                                    <hr />

                                    <CommentSection post={post} setPost={setPost} />
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
 
export default PostPage;
