import { apiBaseUrl } from '../constants/httpConstants';

const commonAPI = async (postdata, address) => {
    let returncommon = await DataUpdate(postdata, address);
    return returncommon;
}

// save or update data 
const DataUpdate = async (requestdata, address) => {
    let responsedata;
    await postData(apiBaseUrl() + address, requestdata)
        .then((response) => {
            responsedata = response;
        });
    return responsedata;
}

// post data
const postData = async (url, requestdata) => {
    try {  
        // by fetch method
        // console.log('preparepostdata(url,requestdata)',preparepostdata(url,requestdata));
        let response = await fetch(url, preparepostdata(url,requestdata));
        if (response.status >= 400 && response.status < 600) {
            return { success: false, message: response.status };
        } else {
            return response.text();
        }

    } catch (error) {
        return ({ "success": false, "message": error });
    }
}

// prepare data by post method
const preparepostdata = (url,requestdata) => {
    let header = {
        method: 'post',
        url: url,
        headers: {
            "Content-Type": "text/plain"
        },
        body: JSON.stringify(requestdata),
    }
    return header;
}

export {
    commonAPI,
}