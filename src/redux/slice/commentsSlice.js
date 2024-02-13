/**
 * author : Sudeera Madushan
 * date : 2/13/2024
 * project : bigzkoop-test-front-end
 */
import { createSlice } from '@reduxjs/toolkit';

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: [],
    reducers: {
        setComments: (state, action) => {
            return action.payload;
        },
    },
});

export const { setComments } = commentsSlice.actions;
