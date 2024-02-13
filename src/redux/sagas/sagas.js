/**
 * author : Sudeera Madushan
 * date : 2/13/2024
 * project : bigzkoop-test-front-end
 */
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { setData } from '../slice/dataSlice.js';
import {setComments} from "../slice/commentsSlice.js";
import { setUsers } from '../slice/usersSlice.js';

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

function* fetchUsersSaga() {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
    yield put(setUsers(response.data));
}
export function* watcherSaga() {
    yield takeEvery('FETCH_DATA', workerSaga);
    yield takeEvery('FETCH_COMMENTS', fetchCommentsSaga);
    yield takeEvery('FETCH_USERS', fetchUsersSaga);
}

