import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
});

export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.data;
});