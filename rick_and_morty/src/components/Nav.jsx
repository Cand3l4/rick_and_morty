import React from 'react';
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className='nav'>
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />

            <Link to='/about' className='nav-link'>
            About
            </Link>

            <Link to='/home' className='nav-link'>
            Home
            </Link>

        </div>
    );
}

export default Nav;
