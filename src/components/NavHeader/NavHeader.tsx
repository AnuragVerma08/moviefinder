import React from 'react';
import './NavHeader.scss';

function NavHeader() {
    return (
        <div className='header'>
            <i className='fas fa-film fa-2x' />
            <span className='head-title'>Top Rated Movies !!</span>
        </div>
    );
}

export default NavHeader;