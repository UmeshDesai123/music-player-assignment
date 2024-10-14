import React from 'react';
import './style.css';

function LeftSideBar() {
  return (
    <div className='left-container'>
      <div className='logo-container'>
        <img src='/assets/Vector(2).png'></img>
        <div className='logo'>
          <span className='logo-name1'>Dream</span>
          <span>Music</span>
        </div>
      </div>
      <div className='left-menu-container'>
        <div className='left-menu'>
          <div>Menu</div>
          <div className='menu-item'>
            <img src='/assets/Vector.png'></img>
            <p>Home</p>
          </div>
          <div className='menu-item'>
            <img src='/assets/Vector(1).png'></img>
            <p>Trend</p>
          </div>
          <div className='menu-item'>
            <img src='/assets/Vector(2).png'></img>
            <p>Library</p>
          </div>
          <div className='menu-item'>
            <img src='/assets/Vector(3).png'></img>
            <p>Discover</p>
          </div>
        </div>
        <div className='general'>
          <div>General</div>
          <div className='genaral-item'>
            <img src='/assets/Vector.png'></img>
            <p>Settings</p>
          </div>
          <div className='genaral-item'>
            <img src='/assets/Vector(1).png'></img>
            <p>Log Out</p>
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default LeftSideBar;