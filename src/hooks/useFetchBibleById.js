import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";

export const useFetchBibleById = ( url, id ) => {
    
    const apiURL = `${ url }/v1/bibles/${ id }/books`;

    const [state, setstate] = useState({ data:[], loading: true, error:null });

    useEffect( () => {

        getData( apiURL )
            .then( data => {


                setstate({
                    data: data,
                    loading: false,
                    error: null
                });

            })
            .catch( () => {
                setstate({
                    data:[],
                    loading: false,
                    error: 'Data could not be fetched'
                });
            });

    }, [apiURL]);

    return state;

}
