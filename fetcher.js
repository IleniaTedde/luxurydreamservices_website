import axios from "axios"

const _axiosJsonApiInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_DATA_BASEURL}`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "X-AUTH-TOKEN": process.env.NEXT_PUBLIC_TOKEN_SEARCH
    }
});

export const fetchData = async (url, method='GET', queryParams=null, payloadParams=null, headers=null) => {

    try {
        const res = await _axiosJsonApiInstance({
            method: method,
            url: url,
            params: queryParams,
            data: payloadParams,
            ...headers,
        });

        if (res) {
            return res.data;
        }

    } catch (error) {
        console.log('API CALL WITH URL: ' + _axiosJsonApiInstance.defaults.baseURL + url);
        console.error('There was an error while getting content: ' + error);
    }
}
