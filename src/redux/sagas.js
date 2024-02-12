/**
 * author : Sudeera Madushan
 * date : 2/13/2024
 * project : bigzkoop-test-front-end
 */
import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { getUserErrorAction, getUserSuccessAction } from "./slice";

// Generator function
function* getUserSaga({ payload: id }) {
    try {
        // You can also export the axios call as a function.
        const response= yield axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        yield put(getUserSuccessAction(response.data));
    } catch (error) {
        yield put(getUserErrorAction(error));
    }
}

// Generator function
export function* watchGetUser() {
    yield takeLatest(getUserSaga, getUserSaga);
}
