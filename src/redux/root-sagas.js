/**
 * author : Sudeera Madushan
 * date : 2/13/2024
 * project : bigzkoop-test-front-end
 */
import { all, fork } from "redux-saga/effects";
import { watchGetUser } from "./sagas";

const rootSaga = function* () {
    yield all([
        fork(watchGetUser),
        // Other forks
    ]);
};

export default rootSaga;
