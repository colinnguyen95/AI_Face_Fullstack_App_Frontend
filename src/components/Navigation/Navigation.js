import React from 'react';
import ProfileIcon from '../Profile/ProfileIcon';
import Logo from '../Logo/Logo';
import './Navigation.css'


const Navigation = ({ onRouteChange, isSignedIn, toggleModal, name }) => {
    if (isSignedIn) {
      return (
        <nav className='navBar flex items-center' style={{display: 'flex', justifyContent: 'space-between'}}>
          <Logo />
          <p>{`Hello, ${name}`}</p>
          <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} />
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
        </nav>
      );
    }
}

export default Navigation;