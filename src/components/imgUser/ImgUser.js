import React from 'react';
import './imgUser.css';
const imgUser = ({ img }) => {
    return (
        <img className='img' src={img} alt="icon not img"/>
    );
}

export default imgUser;