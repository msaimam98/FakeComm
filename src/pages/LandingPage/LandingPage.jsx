import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet, useNavigate} from 'react-router-dom'
import { useEffect, useContext } from 'react'
import AuthContext from '../../context/context'
import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Footer from '../../components/Footer/Footer'
import './landingpage.css'

const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // navigate('/');
  }, []);

  const { setUser, setIsAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        setIsAuthenticated(true);
        setUser(user);
      })
      .catch(() => setIsAuthenticated(false));
  }, []);
  
  return (
    <div className='landing-page-container'>
        <Navbar />
        <div className="the-rest-of-the-page">
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default LandingPage
