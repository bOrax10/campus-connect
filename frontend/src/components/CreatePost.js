import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PostContent = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState([]); // State for tags

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the submit logic
        console.log('Title:', title);
        console.log('Content:', content);
        console.log('Tags:', tags);
    };

    const handleTagChange = (event) => {
        // Add tag when Enter key is pressed
        if (event.key === 'Enter' && event.target.value.trim() !== '') {
            setTags([...tags, event.target.value.trim()]);
            event.target.value = ''; // Clear the input field
        }
    };

    const handleRemoveTag = (tag) => {
        setTags(tags.filter((t) => t !== tag));
    };

    const [navState, setNavState] = useState("Posts");

    const handleNavClick = (navItem) => {
        setNavState(navItem);
    };

    const getButtonStyle = (navItem) => {
        if (navState === navItem) {
            return {
                backgroundColor: '#ffffff',
                color: '#262634'
            };
        } else {
            return {
                backgroundColor: '#e8eaee',
                color: '#939498'
            };
        }
    };

    return (
        <div className="justify-content-center">
            <div className="card-title d-flex justify-content-between rounded py-2 px-0" style={{backgroundColor: "#e8eaee"}}>
                <button
                    className='btn col-3 mx-2'
                    style={getButtonStyle("Posts")}
                    onClick={() => handleNavClick("Posts")}
                >
                    Posts
                </button>
                <button
                    className='btn col-3 mx-2'
                    style={getButtonStyle("Projects")}
                    onClick={() => handleNavClick("Projects")}
                >
                    Projects
                </button>
                <button
                    className='btn col-3 mx-2'
                    style={getButtonStyle("Requests")}
                    onClick={() => handleNavClick("Requests")}
                >
                    Requests
                </button>
            </div>

            {(navState === "Posts" || navState === "Projects" || navState === "Requests") && 
                <form onSubmit={handleSubmit} className="p-3">
                    <div className="form-group mb-3">
                        <label htmlFor="formTitle" className='mb-2'>Title</label>
                        <input
                            type="text"
                            id="formTitle"
                            className="form-control bg-white"
                            placeholder="Enter title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
        
                    <div className="form-group mb-3">
                        <label htmlFor="formContent" className='mb-2'>Content</label>
                        <ReactQuill
                            value={content}
                            placeholder="Start Typing..."
                            onChange={setContent}
                            modules={PostContent.modules}
                            formats={PostContent.formats}
                            className="bg-white"
                        />
                    </div>
            
                    <div className="form-group mb-3">
                        <label htmlFor="formTags" className='mb-2'>Tags</label>
                        <input
                            type="text"
                            id="formTags"
                            className="form-control bg-white"
                            placeholder="Enter tags (press Enter to add)"
                            onKeyDown={handleTagChange}
                        />
                    </div>

                    <div className="d-flex flex-wrap mb-3">
                        {tags.map((tag, index) => (
                            <span key={index} className="badge bg-primary rounded-pill m-1">
                                {tag} <span className="bi bi-x ms-1" onClick={() => handleRemoveTag(tag)} style={{ cursor: 'pointer' }}></span>
                            </span>
                        ))}
                    </div>
            
                    <div className='d-flex justify-content-end'>
                        <button type="submit" className="btn btn-primary">
                            <div className="align-items-center">
                            Post <i className="bi bi-arrow-right"></i>
                            </div>
                        </button>
                    </div>      
                </form>
            }
        </div>
    );
};

// ReactQuill modules and formats configuration
PostContent.modules = {
  toolbar: [
    [{ 'header': '1'}, { 'header': '2'}, { 'font': [] }],
    [{ 'size': [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean']
  ],
};

PostContent.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
];

export default PostContent;
