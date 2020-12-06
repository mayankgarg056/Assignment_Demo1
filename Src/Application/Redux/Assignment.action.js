import * as ReduxConstant from './ReduxConstant';

export function GetAllMusicData() {
  return ({ type: ReduxConstant.GET_ALL_MUSIC_FILE_REQUEST, data:"" });
}

// remove all music data
export function RemoveAllMusicData(data) {
  return ({ type: ReduxConstant.GET_ALL_MUSIC_FILE_RESPONSE, data });
}

// add a new photo file 
export function AddANewPhotoFile(data) {
  return ({ type: ReduxConstant.ADD_PHOTO_MEDIA_FILES, data });
}

// get all photo files
export function GetAllImageFIles(data) {
  return ({ type: ReduxConstant.GET_ALL_PHOTO_MEDIA_FILES, data });
}