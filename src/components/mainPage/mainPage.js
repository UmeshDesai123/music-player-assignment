import React from 'react';
import './style.css';

function MainPage() {
  return (
    <div className='container'>
      <div className='menubar'>
        <div className='menu-left'>
          <p>Music</p>
          <p>Podcast</p>
          <p>Live</p>
          <p>Radio</p>
        </div>
        <div className='menu-right'>
          <input placeholder='Michael Jackson'></input>
        </div>
      </div>
      <div className='image'>
        <div className='info'>
          <p>Verified artist</p>
          <b>Michael Jackson</b>
          <p>27.852.501 monthly listeners</p>
        </div>
        <img src='/assets/Pic.png'></img>
      </div>
      <div className='list-container'>
        <div className='list'>
          <p>Popular</p>
          <p>See All</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>TITLE</th>
              <th>PLAYING</th>
              <th>TIME</th>
              <th>ALBUM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><img src='/assets/pic1.png'></img></td>
              <td>Billie Jean</td>
              <td>1.040.811.084</td>
              <td>4:53</td>
              <td>Thriller 25 Sup...</td>
            </tr>
            <tr>
              <td>2</td>
              <td><img src='/assets/pic1.png'></img></td>
              <td>Beat it</td>
              <td>643.40.811.084</td>
              <td>4:18</td>
              <td>Thriller 25 Sup...</td>
            </tr>
            <tr>
              <td>3</td>
              <td><img src='/assets/4.png'></img></td>
              <td>Don't Stop 'Til You Get Enough</td>
              <td>268.40.811.084</td>
              <td>3:40</td>
              <td>Thriller 25 Sup...</td>
            </tr>
            <tr>
              <td>4</td>
              <td><img src='/assets/4.png'></img></td>
              <td>Don't Stop 'Til You Get Enough</td>
              <td>316.40.811.084</td>
              <td>4:17</td>
              <td>Thriller 25 Sup...</td>
            </tr>
            <tr>
              <td>5</td>
              <td><img src='/assets/pic1.png'></img></td>
              <td>Beat it</td>
              <td>643.40.811.084</td>
              <td>4:18</td>
              <td>Thriller 25 Sup...</td>
            </tr>
            <tr>
              <td>6</td>
              <td><img src='/assets/pic1.png'></img></td>
              <td>Beat it</td>
              <td>643.40.811.084</td>
              <td>4:18</td>
              <td>Thriller 25 Sup...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MainPage;