import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById } from '../store/async/usersAsync';

const UserDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { current: user, loading, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUserById(id));
    }, [dispatch, id]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;
    if (!user) return <p>Пользователь не найден</p>;

    return (
        <div>
            <h1>{user.name}</h1>
            <p><strong>Логин:</strong> {user.username}</p>
            <p><strong>Телефон:</strong> {user.phone}</p>
            <p><strong>Адрес:</strong> {user.address.city}, {user.address.street}</p>
            <p><strong>Геолокация:</strong> {user.address.geo.lat}, {user.address.geo.lng}</p>
            <p><strong>Скрытый пароль:</strong> ********</p>
            <button onClick={() => navigate('/users')}>Назад к списку</button>
        </div>
    );
};

export default UserDetailPage;