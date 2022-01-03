import React from 'react';
import './listUsers.css';
import Item from '../item/Item';

const ListUsers = ({ nameList, users, buttonActive, modalActive, setModalActive }) => {
    return (
        <div className='list-users'>
            <h1>{nameList}</h1>
            {paintUsers(users, buttonActive, modalActive, setModalActive)}
        </div>
    );
}

function paintUsers(users, buttonActive, modalActive, setModalActive) {
    return users.map((user, index) => {
        return (
            <Item 
                key={index}
                imgUserPerfil={user.img} 
                firstname={user.firstname}
                lastname={user.lastname} 
                buttonActive={buttonActive}
                modalActive={modalActive}
                setModalActive={setModalActive}
                user={user}
            />
        );
    });
}

export default ListUsers;