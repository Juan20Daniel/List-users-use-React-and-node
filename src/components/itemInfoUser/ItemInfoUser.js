import React from 'react';
import './itemInfoUser.css'
const ItemInfoUser = ({ user }) => {
    return (
        <>
            <p className='modal-title'>Active User</p>
            <div className='user-info'>
                <p className='title'>First name</p>
                <p className='value'>{user && user.firstname}</p>
            </div>
            <div className='user-info'>
                <p className='title'>Last name</p>
                <p className='value'>{user && user.lastname}</p>
            </div>
            <div className='user-info'>
                <p className='title'>Email</p>
                <p className='value'>{user && user.email}</p>
            </div>
        </>
    );
}

export default ItemInfoUser;