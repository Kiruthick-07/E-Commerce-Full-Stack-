import React, { useState } from 'react';
import './Header.css'; 
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const opennav = () => setSideNavOpen(true);
  const closenav = () => setSideNavOpen(false);
  const navigate = useNavigate();

  const handleSubmit= () =>{
    navigate('/Login');
  }

  return (
    <>
      <nav className="navbar">
        <h1 className='navtitle'>WornWell</h1>
        <div className='navlinks'>
          <a href='/Hero' className='navlink'>Home</a>
          <a href='/Products' className='navlink'>Shop</a>
          <a href='' className='navlink'  onClick={handleSubmit}>Login</a>
          <a href='' className='navlink'>Contact</a>  
        </div>
        <div className='buttondiv'>
         <Button variant="contained" color="primary" style={{backgroundColor:'black'}} startIcon={<ShoppingCartIcon />}>
          View Cart
        </Button>
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
            <a href='/Hero' className='sidenavlink'>Home</a>
            <a href='/Products' className='sidenavlink'>Shop</a>
            <a href='' className='sidenavlink'>Cart</a>
            <a href='' className='sidenavlink'>Login</a>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;