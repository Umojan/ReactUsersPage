import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, fetchUserById } from '../async/usersAsync';

const initialState = {
    list: [],
    current: null,
    loading: false,
    error: null,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.loading = false;
                state.error = 'Ошибка загрузки списка';
            })
            .addCase(fetchUserById.pending, (state) => {
                state.loading = true;
                state.current = null;
                state.error = null;
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.loading = false;
                state.current = action.payload;
            })
            .addCase(fetchUserById.rejected, (state) => {
                state.loading = false;
                state.error = 'Ошибка загрузки пользователя';
            });
    },
});

export default usersSlice.reducer;