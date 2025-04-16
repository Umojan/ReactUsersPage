import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/async/usersAsync';
import UserCard from '../components/UserCard';

const UsersListPage = () => {
    const dispatch = useDispatch();
    const { list, loading, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Пользователи</h1>
            {list.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UsersListPage;