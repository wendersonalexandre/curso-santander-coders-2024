import React from 'react';

export class Navbar extends React.Component {
  render() {
    return (
     <header>
        <nav id='navbar'>
          <div className="nav-brand">
            <img src="" alt="" />
            <h1>space flat new</h1>
          </div>

          <ul className='nav-list'>
            <li><a href="youtube.com">Home</a></li>
            <li><a href="youtube.com">Trending</a></li>
            <li><a href="youtube.com">Categories</a></li>
            <li><a href="youtube.com">Abaut us</a></li>
          </ul>
        </nav>
    </header>
    )
    
  }
}

