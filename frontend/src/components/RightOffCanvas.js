import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import moment from 'moment';

const RightOffCanvas = () => {
    const { isLoggedIn, logout } = useContext(AuthContext);
    const location = useLocation();
    const user = {
        'name': "John Tarader",
        'course': 'B.Tech',
        'dept': 'ECE',
        'year': 3,
        'avatar': '',
        'bio': "Some quick example text to build on the card title and make up the bulk of the card's content."
    }

    const opportunities = [{
        'post': "Design Volunteer",
        'author': 'Consulting & Analytics Club',
        'avatar': './assets/cna.png',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet, massa at interdum faucibus, nulla lorem consectetur ante, sit amet semper nulla risus in neque.',
        'postTime': '2 days'
    },{
        'post': "Design Volunteer",
        'author': 'Consulting & Analytics Club',
        'avatar': './assets/cna.png',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet, massa at interdum faucibus, nulla lorem consectetur ante, sit amet semper nulla risus in neque.',
        'postTime': '2 days'
    }];

    const similarPosts = [
        {
            'name': "Apratul Vasu",
            'avatar':'',
            'username': 'a.vasu',
            'postTime': "1hr ago",
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet, massa at interdum faucibus, nulla lorem consectetur ante, sit amet semper nulla risus in neque.',
            'tags': ["Software", "AI"]
        },
        {
            'name': "Apratul Vasu",
            'avatar':'',
            'username': 'a.vasu',
            'postTime': "1hr ago",
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet, massa at interdum faucibus, nulla lorem consectetur ante, sit amet semper nulla risus in neque.',
            'tags': ["Software", "AI"]
        }
    ];

    const notifications = [
        {
            'type': 'connect',
            'author': 'aravind.s',
            'avatar':'',
            'time':'5 mins ago',
        },
        {
            'type': 'comment',
            'author': 'i.aashay',
            'avatar':'',
            'time':'5 mins ago',
            'link':''
        }
    ]

    const calculateRemainingDays = (expiryDate) => {
        const currentDate = moment();
        const endDate = moment(expiryDate);
        const remainingDays = endDate.diff(currentDate, 'days');
        return remainingDays;
    };

    return (
        <div className='col-10 sticky-top'>

            <div className="card">
                <div className="card-body">
                    <p className="card-text">Search posts, people, projects, and more...</p>
                    <div className="justify-content-center">
                        <div className="d-flex ">
                            <i className="fas fa-search text-primary pt-2 me-2"></i>
                            <input type="text" className="form-control" placeholder="Start Typing" aria-label="Search" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </div>
            </div>

            {!location.pathname.includes("/create") &&
                <div className="card my-3">
                    <div className="card-body">
                        <div className='d-flex'>
                            <div className='avatar-container me-3' style={{backgroundColor: "grey", width: "15%"}}>
                            <span role="img" aria-label="avatar">{user.avatar}</span>
                            </div>
                            <div className='d-flex flex-column'>
                                <h5 className="card-title">{user.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{user.course} • {user.dept} • {user.year} Year</h6>
                            </div>

                            <h2 className='ms-auto'><Link to='/profile' className='text-decoration-none'>→</Link></h2>
                        </div>
                        <p className="card-text text-body-secondary">{user.bio}</p>
                    </div>
                </div>
            }

            {location.pathname.includes("/create") &&
                <div className="card my-3">
                    <div className="card-body">
                        <h5>Posting Tips</h5>
                        <hr className='mt-0'/>
                        <div>
                            <p>• Be respectful and supportive</p>
                            <p>• Be clear and concise</p>
                            <p>• Include relevant detaiks</p>
                            <p>• Invite feedback</p>
                            <p>• Offer collaboration opportunities</p>
                            <p>• Stay active and engage with others</p>
                        </div>
                    </div>
                </div>
            }

            {location.pathname === '/feed' &&
                <div>
                    <div className="card my-3">
                        <div className="card-body">
                            <div className='d-flex justify-content-center align-items-center'>
                                <h5 className="me-auto">Explore Opportunities</h5>
                                <h2><Link to='/opportunities' className='text-decoration-none'>→</Link></h2>
                            </div>
                            <hr className='mt-0'/>
                            {opportunities.map((opportunity, index) => (
                                <div className="d-flex flex-column">
                                    <div className='d-flex'>
                                        <div className='avatar-container me-3' style={{backgroundColor: "grey", width: "14%"}}>
                                            <img src={opportunity.avatar} alt="Avatar" />
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <h6 className="card-title">{opportunity.post}</h6>
                                            <h6 className="card-subtitle mb-2 text-body-secondary">{opportunity.author}</h6>
                                        </div>
                                    </div>    
                                    <small className='text-secondary'>{opportunity.description}</small>                              

                                    <div className="card d-flex flex-wrap flex-row mt-2 align-items-center" style={{backgroundColor:"#ebf3ff", border: 'none'}}>
                                        <div className="card-body d-flex flex-column">
                                            Expiring in
                                            <p className='m-0'>{opportunity.postTime}</p>
                                        </div>
                                        <div>
                                            <button className='btn btn-light m-md-3 ms-lg-auto'>Apply</button>
                                        </div>
                                    </div>

                                    {index!==opportunities.length-1 && <hr />}
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            }

            {location.pathname.includes('/feed/') &&
                <div>
                    <div className="card my-3">
                        <div className="card-body">
                            <div className='d-flex justify-content-center align-items-center'>
                                <h5 className="me-auto">Explore Similar Posts</h5>
                                <h2><Link to='/posts' className='text-decoration-none'>→</Link></h2>
                            </div>
                            <hr className='mt-0'/>
                            {similarPosts.map((similarPost, index) => (
                                <div className="d-flex flex-column" >
                                    <Link to={`/posts/${index}`} style={{textDecoration: 'none'}}>
                                        <div className='d-flex'>
                                            <div className='avatar-container me-3' style={{backgroundColor: "grey", width: "14%"}}>
                                                <span role="img" aria-label="avatar">{similarPost.avatar}</span>
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <h6 className="card-title">{similarPost.name}</h6>
                                                <h6 className="card-subtitle mb-2 text-body-secondary">@{similarPost.username}</h6>
                                            </div>
                                        </div>    
                                        <small className='text-secondary'>{similarPost.description}</small>
                                    </Link>
                                    

                                    <div className="d-flex flex-row flex-wrap align-items-center">
                                        {similarPost.tags.map((tag, indexx)=> (
                                            <div className='me-2 mt-2'>
                                                <button className='btn btn-secondary'>{tag}</button>
                                            </div>
                                        ))}
                                    </div>

                                    {index!==similarPosts.length-1 && <hr />}
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            }

            {location.pathname==='/explore' && 
                <div className='card my-3'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <h5 className="me-auto">Notifications</h5>
                            <h2><Link to='/profile/notifications' className='text-decoration-none'>→</Link></h2>
                        </div>
                        <hr className='mt-0'/>
                        
                        {notifications.map((notification, index) => (
                            <div>
                                {notification.type==='connect' && 
                                    <div className='d-flex'>
                                        <div className='avatar-container me-3' style={{backgroundColor: "grey", width: "18%"}}>
                                            <span role="img" aria-label="avatar">{notification.avatar}</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <small><h6 className="card-title text-secondary">{notification.time}</h6></small>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"> <b>@{notification.author}</b> has requested to connect with you</h6>
                                            <Link to='/profile/connection_requests'> <small>View Connection Requests</small> </Link>
                                        </div>
                                    </div>    
                                }
                                
                                {notification.type==='comment' &&
                                    <div className='d-flex'>
                                        <div className='avatar-container me-3' style={{backgroundColor: "grey", width: "14%"}}>
                                            <span role="img" aria-label="avatar">{notification.avatar}</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <small><h6 className="card-title text-secondary">{notification.time}</h6></small>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"> <b>@{notification.author}</b> commented on your post.</h6>
                                            <Link to={notification.link}><small>Click to view</small> </Link>
                                        </div>
                                    </div>  
                                }

                                {index!==notifications.length-1 && <hr />}
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}

export default RightOffCanvas;
