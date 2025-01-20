import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "./store"; // Adjust the path to your store file

// Define a User interface
interface User {
    id: number;
    name: string;
    email: string;
    // Add other user fields as needed
}

// Define the initial state interface
interface UserState {
    user: User | null;
    error: string | null;
    users: User[];
}

// Initial state
const initialState: UserState = {
    user: null,
    error: null,
    users: [],
};

// Async action to create a user
export const createUser = (userData: Partial<User>) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post<User>("http://localhost:3000/user", userData);
        dispatch(userCreated(response.data));
    } catch (error: any) {
        console.error("Error creating user", error);
        dispatch(userCreationFailed(error.message));
    }
};

// Async action to delete a user
export const deleteUser = (userId: number) => async (dispatch: AppDispatch) => {
    try {
        await axios.delete(`http://localhost:3000/user/${userId}`);
        dispatch(userDeleted(userId));
    } catch (error: any) {
        console.error("Error deleting user", error);
        dispatch(userDeletionFailed(error.message));
    }
};

// Create user slice
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userCreated: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.error = null;
        },
        userCreationFailed: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        userDeleted: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter(user => user.id !== action.payload);
            state.error = null;
        },
        userDeletionFailed: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
    },
});

// Export actions and reducer
export const {
    userCreated,
    userCreationFailed,
    userDeleted,
    userDeletionFailed,
    setUsers,
} = userSlice.actions;

export default userSlice.reducer;
