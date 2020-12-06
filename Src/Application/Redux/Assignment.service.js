// local network classes declares
import WebApi from '../NetworkController/WebApi';
import WebConstant from '../NetworkController/WebConstant';

// fetch all music file request
export function getAllMusciFileData(params) {
    return WebApi.getRequest(WebConstant.GET_ALL_PHOTO_FILE,);

}
