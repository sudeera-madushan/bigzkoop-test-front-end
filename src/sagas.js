/**
 * author : Sudeera Madushan
 * date : 2/13/2024
 * project : bigzkoop-test-front-end
 */
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { setData } from './dataSlice';
import {setComments} from "./commentsSlice.js";

function* workerSaga() {
    console.log("Get Posts")
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    yield put(setData(response.data)); // Only store the data in the state
}

function* fetchCommentsSaga() {
    console.log("Get Comments")
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/comments');
    yield put(setComments(response.data)); // Only store the data in the state
}
export function* watcherSaga() {
    yield takeEvery('FETCH_DATA', workerSaga);
    yield takeEvery('FETCH_COMMENTS', fetchCommentsSaga);
}

