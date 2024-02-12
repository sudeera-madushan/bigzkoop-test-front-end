/**
 * author : Sudeera Madushan
 * date : 2/13/2024
 * project : bigzkoop-test-front-end
 */
import { all, takeEvery, put } from 'redux-saga/effects';
import {store} from "./store.js";
// Worker saga
function* doSomething(action) {
    yield put({ type: 'ACTION_DONE' });
    console.log(store)
}

// Watcher saga
export function* watchDoSomething() {
    yield takeEvery('DO_SOMETHING', doSomething);
}

// Root saga
export default function* rootSaga() {
    yield all([
        watchDoSomething(),
    ]);
}
