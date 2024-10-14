import React from 'react';
import './style.css';

function RightSideBar() {
  return (
    <div className='right-container'>
      <div className='now-playing'>
        <p>Now Playing</p>
        <img src='assets/Pic1.png'></img>
        <div>Beat It</div>
        <p>Michel Jackson</p>
        <audio className='audio' src='/songs/akon-holla_holla_ft._t-pain.mp3' controls></audio>
      </div>
    </div>
  )
}

export default RightSideBar;