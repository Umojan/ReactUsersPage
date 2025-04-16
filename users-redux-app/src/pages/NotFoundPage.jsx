import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404</h1>
            <p>Страница не найдена</p>
            <button onClick={() => navigate('/users')}>Вернуться на главную</button>
        </div>
    );
};

export default NotFoundPage;