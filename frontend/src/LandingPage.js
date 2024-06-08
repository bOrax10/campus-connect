// src/LandingPage.js
import React, { useContext } from 'react';
import MicrosoftLogin from 'react-microsoft-login';
import { AuthContext } from './AuthContext';

const LandingPage = () => {
  const { setIsLoggedIn, setUserData } = useContext(AuthContext);

  const authHandler = (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
      console.log(data.idTokenClaims.name);
      setIsLoggedIn(true);
      setUserData({
        name: data.account.name,
        email: data.account.username,
        username: data.account.username.split('@')[0],
      });
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid mt-2">
          <img src="/assets/logo2.png" style={{ maxWidth: '200px', maxHeight: '80px' }} alt="Logo" />
          <div className="d-flex mx-2">
            <MicrosoftLogin
              clientId={'a9ba4873-e74d-4b36-b634-88058235c8d9'}
              authCallback={authHandler}
              buttonTheme="dark"
            />
          </div>
        </div>
      </nav>
      <div className="container-md my-5 py-5">
        <div>
          <div className="row align-items-center">
            <div className="col-md-4">
              <p style={{ fontWeight: 'bold' }} className="h1">Discover the Creativity of Campus</p>
              <p>Explore a vibrant showcase of student projects from across the college. Find inspiration, connect with creators, and get involved in the campus community.</p>
            </div>
            <div className="col-md-8 d-flex justify-content-center">
              <img src="/assets/vector.jpg" style={{ maxWidth: '90%', height: 'auto' }} alt="Vector" />
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-around mt-5 p-5" style={{ backgroundColor: '#f3f4f6' }}>
        <div className="col-md-4 text-center">
          <ShareIcon size={48} className="mb-3 text-gray-500 dark:text-gray-400" />
          <h4 style={{ fontWeight: 'bold' }}>Share Your Projects</h4>
          <p>Showcase your college projects and get feedback from the community.</p>
        </div>
        <div className="col-md-4 text-center">
          <CombineIcon size={48} className="mb-3 text-gray-500 dark:text-gray-400" />
          <h4 style={{ fontWeight: 'bold' }}>Collaborate with Peers</h4>
          <p>Connect with like-minded students and work together on projects.</p>
        </div>
        <div className="col-md-4 text-center">
          <ClubIcon size={48} className="mb-3 text-gray-500 dark:text-gray-400" />
          <h4 style={{ fontWeight: 'bold' }}>Build a Community</h4>
          <p>Engage with the campus community and stay up-to-date on the latest projects and events.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

function ClubIcon({ size = 24, ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6b7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" />
      <path d="M12 17.66L12 22" />
    </svg>
  );
}

function CombineIcon({ size = 24, ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6b7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
      <polyline points="7 21 10 18 7 15" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  );
}

function ShareIcon({ size = 24, ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6b7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}
