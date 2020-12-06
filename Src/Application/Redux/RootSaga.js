import { takeLatest, takeEvery } from 'redux-saga/effects';

import * as types from './ReduxConstant';

// classes declared
import * as AssignMentSaga from './AssignMent.saga';



export default function* RootSaga() {
    // set priroty for action for saga
    yield takeLatest(types.GET_ALL_MUSIC_FILE_REQUEST, AssignMentSaga.getAllMusicFileData);

}