import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = (userData) => async (dispatch) => {
    try {
        const response = await axios.post("http://localhost:3000/user", userData);
        dispatch(userCreated(response.data));
    } catch (error) {
        console.error("Error creating user", error);
        dispatch(userCreationFailed(error.message));
    }
};

export const deleteUser = (userId) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:3000/user/${userId}`);
        dispatch(userDeleted(userId));
    } catch (error) {
        console.error("Error deleting user", error);
        dispatch(userDeletionFailed(error.message));
    }
};

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        error: null,
        users: [],
    },
    reducers: {
        userCreated: (state, action) => {
            state.user = action.payload;
            state.error = null;
        },
        userCreationFailed: (state, action) => {
            state.error = action.payload;
        },
        userDeleted: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
            state.error = null;
        },
        userDeletionFailed: (state, action) => {
            state.error = action.payload;
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        }
    },
});

export const { userCreated, userCreationFailed, userDeleted, userDeletionFailed, setUsers } = userSlice.actions;

export default userSlice.reducer;
