import React, { useState } from 'react';
import './Header.css'; 

const Header = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const opennav = () => setSideNavOpen(true);
  const closenav = () => setSideNavOpen(false);

  return (
    <>
      <nav className="navbar">
        <h1 className='navtitle'>WornWell</h1>
        <div className='navlinks'>
          <a href='' className='navlink'>Home</a>
          <a href='' className='navlink'>Shop</a>
          <a href='' className='navlink'>Cart</a>
          <a href='' className='navlink'>Contact</a>  
        </div>
        <div className='buttondiv'>
          <button className='loginbutton'>Login</button>
        </div>
        <div className='togglemenu'>
          <i className="fa-solid fa-bars" onClick={opennav}></i>
        </div>
      </nav>
      {sideNavOpen && (
        <div className='sidenavbar'>
          <p className='xmark'>
            <i className="fa-solid fa-xmark" onClick={closenav}></i>
          </p>
          <div className='sidenavlinks'>
            <a href='' className='sidenavlink'>Home</a>
            <a href='' className='sidenavlink'>Shop</a>
            <a href='' className='sidenavlink'>Cart</a>
            <a href='' className='sidenavlink'>Login</a>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;