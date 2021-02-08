import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";

export const useFetchBibles = ( url ) => {

    const apiURL = `${ url }/v1/bibles`;
    
    const [state, setState] = useState({ data:[], loading: true, error: null });

    useEffect(() => {

        getData( apiURL )
            .then( data => {

                const bibles = data.map( bible => {
                    return {
                        id: bible.id,
                        title: bible.name,
                        localName: bible.nameLocal,
                        abbreviation: bible.abbreviation,
                        description: bible.description,
                        localDescription: bible.descriptionLocal,
                        language: bible.language.name,
                        languageLocal: bible.language.nameLocal
                    }
                });

                setState({
                    data: bibles,
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

    }, [apiURL]);

    return state;

}