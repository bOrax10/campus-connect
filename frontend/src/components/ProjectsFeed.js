import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faCommentAlt, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ProjectsFeed = () => {
    const projects = [
        {
            'name': "Aravind S",
            'avatar': "./assets/Avatar.jpg",
            "username": "aravind.s",
            'time': '1hr ago',
            'image': "",
            'title':"Heading xSmall",
            'description': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus felis vel convallis hendrerit.",
            'content': "At Pluralsight, we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. With assessments, learning paths and courses authored by industry experts, our platform helps businesses and individuals benchmark expertise across roles, speed up release cycles and build reliable, secure products.",
            'tags': ["Software", "AI"],
            'comments': 3,
            'likes': 10, // Initial number of likes for the first post
            'liked': true, // Initial liked state for the first post
            'projectId': 0
        },
        {
            'name': "Aravind S",
            'avatar': "./assets/Avatar.jpg",
            "username": "aravind.s",
            'time': '1hr ago',
            'image': "",
            'title':"Heading xSmall",
            'description': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus felis vel convallis hendrerit.",
            'content': "At Pluralsight, we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. With assessments, learning paths and courses authored by industry experts, our platform helps businesses and individuals benchmark expertise across roles, speed up release cycles and build reliable, secure products.",
            'tags': ["Software", "AI"],
            'comments': 3,
            'likes': 5, // Initial number of likes for the second post
            'liked': false, // Initial liked state for the second post
            'projectId': 1
        }
    ];

    const [likesCount, setLikesCount] = useState(projects.map((project) => project.likes));
    const [likedProjects, setLikedProjects] = useState(projects.map((project) => project.liked));

    const handleLikeClick = (index) => {
        setLikesCount((prevCounts) => {
            const newCounts = [...prevCounts];
            if (likedProjects[index]) {
                newCounts[index] -= 1;
            } else {
                newCounts[index] += 1;
            }
            return newCounts;
        });
        setLikedProjects((prevLikes) => {
            const newLikes = [...prevLikes];
            newLikes[index] = !newLikes[index];
            return newLikes;
        });
    };

    return (
        <div>
            {projects.map((project, index) => (
                <div className="d-flex flex-column" key={index}>
                    <div className="rounded mb-3" style={{backgroundColor: "grey", height: "200px"}}>{/* image of project */}</div>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <Link to={`/projects/${project.projectId}`} style={{ textDecoration: 'none' }}>
                        <div className='d-flex'>
                            <div className='avatar-container me-3' style={{ backgroundColor: "grey", width: "5%" }}>
                                <img src={project.avatar} alt="avatar" style={{ width: "100%" }} />
                            </div>
                            <div className='d-flex flex-column'>
                                <h6 className="card-title">{project.name}</h6>
                                <h6 className="card-subtitle mb-2 text-body-secondary">@{project.username} • {project.time}</h6>
                            </div>
                        </div>
                        <small className='text-secondary'>{project.content}</small>
                    </Link>

                    <div className="d-flex flex-row flex-wrap align-items-center">
                        {project.tags.map((tag, indexx) => (
                            <div className='me-2 mt-2' key={indexx}>
                                <button className='btn btn-secondary'>{tag}</button>
                            </div>
                        ))}
                    </div>

                    <div className="rounded d-flex mt-3 mb-1 justify-content-center btn-group" role="group" aria-label="Feed Interaction">
                        <button
                            className={`btn btn-light col-3 ${likedProjects[index] ? 'text-dark' : 'text-secondary'}`}
                            style={{ border: "1px solid grey" }}
                            onClick={() => handleLikeClick(index)}
                        >
                            <FontAwesomeIcon icon={faThumbsUp} className={`mr-1 ${likedProjects[index] ? 'text-dark' : 'text-secondary'}`} /> {likesCount[index]}
                        </button>
                        <Link to={`/projects/${project.projectId}`} className='btn btn-light col-3' style={{ border: "1px solid grey" }}>
                            <FontAwesomeIcon icon={faCommentAlt} className='text-secondary' /> {project.comments}
                        </Link>
                        <button className='btn btn-light col-3' style={{ border: "1px solid grey" }}>
                            <FontAwesomeIcon icon={faRetweet} className='text-secondary' /> Repost
                        </button>
                    </div>

                    {index !== projects.length - 1 && <hr />}
                </div>
            ))}
        </div>
    );
}

export default ProjectsFeed;
