import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import OffCanvas from './components/OffCanvas';
import RightOffCanvas from './components/RightOffCanvas';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import Nav from './components/Nav';
import PostsFeed from './components/PostsFeed';

const HomePage = () => {
  const { isLoggedIn, userData, logout } = useContext(AuthContext);

  return (
    <div className="d-flex flex-row" style={{ backgroundColor: "#f8f8fa" }}>
      <div className="col-lg-2 col-md-3">
        <OffCanvas />
      </div>

      <div className="d-flex flex-column col-10">
        <Nav/>

        <div className="d-flex flex-row">
          <div className="col-lg-8 col-md-8">
            <div className='d-flex justify-content-center'>
              <div className="col-5 btn btn-secondary mx-2">
                <h5>Sort by tags</h5>
              </div>
              <div className="col-5 btn btn-secondary mx-2">
                <h5>Sort by category</h5>
              </div>
            </div>
            <div className='d-flex flex-column justify-content-center m-4 me-0'>
              <div className="card">
                <div className='card-body'>
                  <div className='d-flex justify-content-center align-items-center'>
                      <h5 className="me-auto">Feed</h5>
                      <h2><Link to='/explore' className='text-decoration-none'>→</Link></h2>
                  </div>
                  
                  <hr className='mt-0' />

                  <PostsFeed/>
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

export default HomePage;
