/**
 * author : Sudeera Madushan
 * date : 2/13/2024
 * project : bigzkoop-test-front-end
 */
import { createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
    name: 'mySlice',
    initialState: { value: false },
    reducers: {
        actionDone: (state) => {
            state.value = !state.value;
        },
    },
});

export const { actionDone } = mySlice.actions;

export default mySlice.reducer;

