import { useEffect, useState } from "react";
import { apiURL } from "../helpers/apiURL";
import { dataMannager } from "../helpers/dataMannager";
import { getData } from "../helpers/getData";

export const useFetchBibles = ( url, bibleId, bookId, chapterId ) => {

    const finalURL = apiURL(url, bibleId, bookId, chapterId);
    
    const [state, setState] = useState({ data:[], loading: true, error: null });

    useEffect(() => {

        getData( finalURL )
            .then( data => {

                const bibleData = dataMannager( data, bibleId, chapterId );
                setState({
                    data: bibleData,
                    loading: false,
                    error: null
                });

            })
            .catch( () => {
                setState({
                    data: [],
                    loading: false,
                    error: 'Data could not be fetched'
                });
            })

    }, [finalURL, bibleId, chapterId]);

    return state;

}