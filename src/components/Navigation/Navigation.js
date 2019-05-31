import React from 'react';
import ProfileIcon from '../Profile/ProfileIcon';
import Logo from '../Logo/Logo';
import './Navigation.css'


const Navigation = ({ onRouteChange, isSignedIn, toggleModal, name }) => {
    if (isSignedIn) {
      return (
        <nav className='navBar' style={{background: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px'}}>
          <Logo />
          <div className='flex items-center'>
            <p className='ma0 mr3 f3'>{`Hello, ${name}`}</p>
            <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} />
          </div>
        </nav>
      );
    } else {
      return (
        <nav style={{background: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px'}}>
          <div className='flex items-center'>
            <Logo />
            <p className='ma0 ml3 logoTitle'>AI FACE</p>
          </div>
          <div style={{background: '#fff', display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className='f3 link dim pa3 pointer' style={{margin: 0}}>Sign In</p>
            <p onClick={() => onRouteChange('register')} className='f3 link dim pa3 pointer white register' style={{margin: 0}}>Register</p>
          </div>
        </nav>
      );
    }
}

export default Navigation;