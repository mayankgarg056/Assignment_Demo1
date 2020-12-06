import { call, put, delay } from 'redux-saga/effects';

import * as types from './ReduxConstant';



// common redux classes declre
import * as AssignMentService from './Assignment.service';


// get Login  saga
export function* getAllMusicFileData(action) {
    try {
        const responseData = yield call(AssignMentService.getAllMusciFileData, action.data);
        yield put({ type: types.GET_ALL_MUSIC_FILE_RESPONSE, data: responseData });

    } catch (error) {
        console.log(" error in saga . " + JSON.stringify(error))
    }
}

