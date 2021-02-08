import { apiKey } from "../shared/apiKey";

export const getData = async( url ) => {
    
    const resp = await fetch( url, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'api-key': apiKey
        }
    })

    const { data } = await resp.json();

    return data;
    
}