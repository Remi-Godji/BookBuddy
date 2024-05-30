import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <a href=''>
      <h1>Bibliothèque</h1>
      </a>
        <a href="Macollection">Ma Collection</a>
        <a href="#">Mon Profil</a>
      <div className="nav-links">
        <div className="search-container">
          <label htmlFor="site-search">Search the site:</label>
          <input type="search" id="site-search" name="q" />
          <button>Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
