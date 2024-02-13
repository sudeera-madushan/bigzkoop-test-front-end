/**
 * author : Sudeera Madushan
 * date : 2/13/2024
 * project : bigzkoop-test-front-end
 */
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas';
import { dataSlice } from './dataSlice';
import { commentsSlice } from './commentsSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        comments: commentsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watcherSaga);
