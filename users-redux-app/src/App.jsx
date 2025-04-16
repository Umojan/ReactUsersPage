import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UsersListPage from './pages/UsersListPage';
import UserDetailPage from './pages/UserDetailPage';
import NotFoundPage from './pages/NotFoundPage';

const Header = () => (
    <header style={{ padding: '16px', background: '#eee' }}>
        <a href="/users" style={{ fontWeight: 'bold', textDecoration: 'none' }}>Пользователи</a>
    </header>
);

const App = () => {
    return (
        <>
            <Header />
            <div style={{ padding: '16px' }}>
                <Routes>
                    <Route path="/" element={<Navigate to="/users" />} />
                    <Route path="/users" element={<UsersListPage />} />
                    <Route path="/users/:id" element={<UserDetailPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </>
    );
};

export default App;