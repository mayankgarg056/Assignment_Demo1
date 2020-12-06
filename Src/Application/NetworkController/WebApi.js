import { Linking, Platform, NativeModules } from 'react-native'
import axios from 'axios';


var WebApi = {
    // get api reponse
    getRequest: async function (requestUrl,) {
        console.log("requestUrl is " + requestUrl)

        axios.defaults.timeout = 30000;
        return axios.get(requestUrl, {
            timeout: 30000,
        }).then(function (response) {
            console.log("resonse is " + JSON.stringify(response.data))
            return response.data;
        }).catch((error) => {
            console.log("error post api", error)
            if (error.code === 'ECONNABORTED') {
                alert("Something went wrong. Please try again")
            } else if (!error.status) {
                // network error
                alert("Please check your internet connection ")
            } else if (error.message == "Network Error") {
                alert("Please check your internet connection ")
            }

            return false;
        });
    },

  

}


export default WebApi;
