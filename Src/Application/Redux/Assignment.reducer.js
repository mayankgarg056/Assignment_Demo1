import * as types from './ReduxConstant';
import * as ProcessModel from '../Model/ProcessModel';

export function AssignMentReducer(state = {}, action) {
    switch (action.type) {
        case types.GET_ALL_MUSIC_FILE_RESPONSE:
            return { ...state, getAllMusicResponse: action.data }

        case types.GET_ALL_PHOTO_MEDIA_FILES:
            return { ...state, getAllPhotoFileData: action.data }
     case types.ADD_PHOTO_MEDIA_FILES:
            let mediaFileArray=(state.getAllPhotoFileData)?state.getAllPhotoFileData:[];
            let processArray=ProcessModel.addANewImageFIleInStore(mediaFileArray,action.data)
            return { ...state, getAllPhotoFileData:processArray }    
        default:
            return state
    }
}