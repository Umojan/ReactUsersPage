import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', margin: '8px 0' }}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Address: {user.address.city}, {user.address.street}</p>
            <Link to={`/users/${user.id}`}>Подробнее</Link>
        </div>
    );
};

export default UserCard;