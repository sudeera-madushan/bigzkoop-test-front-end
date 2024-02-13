/**
 * author : Sudeera Madushan
 * date : 2/13/2024
 * project : bigzkoop-test-front-end
 */
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/sagas.js';
import { dataSlice } from './slice/dataSlice.js';
import { commentsSlice } from './slice/commentsSlice.js';
import {usersSlice} from "./slice/usersSlice.js";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        comments: commentsSlice.reducer,
        users: usersSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watcherSaga);
