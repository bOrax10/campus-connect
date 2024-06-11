import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import OffCanvas from "./components/OffCanvas";
import RightOffCanvas from "./components/RightOffCanvas";
import Nav from "./components/Nav";
import PostInteractionButtons from "./components/PostInteractionButtons";
import CommentSection from "./components/CommentSection";

const ProjectPage = () => {
    const { projectId } = useParams();
    const { userData } = useContext(AuthContext);
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Simulate fetching project data from an API
        setProject({
            id: projectId,
            author: "John Doe",
            username: "john.doe",
            time: "2hr ago",
            avatar: "./assets/Avatar.jpg",
            image: "",
            title: "Heading xSmall",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus felis vel convallis hendrerit.",
            content:
                "At Pluralsight, we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. With assessments, learning paths and courses authored by industry experts, our platform helps businesses and individuals benchmark expertise across roles, speed up release cycles and build reliable, secure products.",
            tags: ["Software", "AI"],
            likes: 5,
            liked: false,
            comments: [
                {
                    id: 1,
                    author: "Jane Smith",
                    username: "jane.smith",
                    time: "1hr ago",
                    comment: "Great project! Thanks for sharing.",
                    replies: [
                        {
                            id: 1,
                            author: "John Doe",
                            username: "john.doe",
                            time: "30min ago",
                            reply: "Thanks Jane!",
                            avatar: "",
                        },
                    ],
                },
                {
                    id: 2,
                    author: "Tame Impala",
                    username: "t.impala",
                    time: "1hr ago",
                    comment:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu euismod mauris. Nulla viverra tempor massa, vitae dapibus augue consectetur.",
                    replies: [],
                },
            ],
        });
    }, [projectId]);

    const handleLikeClick = () => {
        // Simulate toggling the liked state
        setProject((prevProject) => ({
            ...prevProject,
            liked: !prevProject.liked,
            likes: prevProject.liked ? prevProject.likes - 1 : prevProject.likes + 1,
        }));
        // Make an API call to update the like status on the server
        // Example:
        // fetch(`/api/posts/${projectId}/like`, { method: 'POST' })
        //    .then(response => response.json())
        //    .then(data => {
        //        // Update the project state with the new like status
        //    });
    };

    if (!project) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }
    console.log(project.avatar);
    return (
        <div className="d-flex flex-row" style={{ backgroundColor: "#f8f8fa" }}>
            <div className="col-lg-2 col-md-3">
                <OffCanvas />
            </div>

            <div className="d-flex flex-column col-10">
                <Nav />

                <div className="d-flex flex-row">
                    <div className="col-lg-8 col-md-8">
                        <div className="d-flex flex-column justify-content-center ms-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column">
                                        <div
                                            className="rounded mb-3"
                                            style={{ backgroundColor: "grey", height: "200px" }}
                                        >
                                            {/* image of project */}
                                        </div>
                                        <h4>{project.title}</h4>
                                        <p>{project.description}</p>
                                        <div className="d-flex">
                                            <div
                                                className="avatar-container me-3"
                                                style={{ backgroundColor: "grey", width: "6%" }}
                                            >
                                                <img
                                                    src={project.avatar}
                                                    alt="avatar"
                                                    style={{ width: "100%" }}
                                                />
                                            </div>
                                            <div className="d-flex flex-column">
                                                <h6 className="card-title">{project.author}</h6>
                                                <h6 className="card-subtitle mb-2 text-body-secondary">
                                                    @{project.username} • {project.time}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="mt-3">{project.content}</p>

                                    <div className="d-flex flex-row flex-wrap align-items-center">
                                        {project.tags.map((tag, index) => (
                                            <div className="me-2 mt-1" key={index}>
                                                <button className="btn btn-secondary">{tag}</button>
                                            </div>
                                        ))}
                                    </div>

                                    <PostInteractionButtons
                                        likesCount={project.likes}
                                        liked={project.liked}
                                        commentsCount={project.comments.length}
                                        handleLikeClick={handleLikeClick}
                                    />

                                    <hr />

                                    <CommentSection item={project} setItem={setProject} />
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

export default ProjectPage;
