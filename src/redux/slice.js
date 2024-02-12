/**
 * author : Sudeera Madushan
 * date : 2/13/2024
 * project : bigzkoop-test-front-end
 */
import { createSlice } from "@reduxjs/toolkit";

const usersInitialState = {
    user: {
        data: null,
        isLoading: false,
        errors: '',
    }
};

const usersSlice = createSlice({
    name: "users",
    initialState: usersInitialState,
    reducers: {
        getUserAction: (state) => {
            state.user.isLoading = true;
            state.user.errors = '';
        },
        getUserSuccessAction: (state, action) => {
            state.user.isLoading = false;
            state.user.data = action.payload;
        },
        getUserErrorAction: (state, action) => {
            state.user.isLoading = false;
            state.user.errors = action.payload;
        },
    }
});


export const {
    getUserAction,
    getUserSuccessAction,
    getUserErrorAction
} = usersSlice.actions;
export default usersSlice.reducer;
