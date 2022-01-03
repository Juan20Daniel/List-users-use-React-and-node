import React from 'react';
import './listUsers.css';
import Item from '../item/Item';

const ListUsers = ({ nameList, users, buttonActive }) => {
    return (
        <div className='list-users'>
            <h1>{nameList}</h1>
            {paintUsers(users, buttonActive)}
        </div>
    );
}

function paintUsers(users, buttonActive) {
    return users.map((user, index) => {
        return (
            <Item 
                key={index}
                imgUserPerfil={user.img} 
                firstname={user.firstname}
                lastname={user.lastname} 
                buttonActive={buttonActive}
            />
        );
    });
}

export default ListUsers;