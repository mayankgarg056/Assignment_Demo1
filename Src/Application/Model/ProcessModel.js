// add a new image file in store
export function addANewImageFIleInStore(dataArray, actionData) {
    let localArray = [];
    localArray.push(actionData)
    for (let i = 0; i < dataArray.length; i++) {
        localArray.push(dataArray[i]);
    }

    return localArray;
}