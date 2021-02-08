import { useEffect, useState } from "react";
import { apiURL } from "../helpers/apiURL";
import { getData } from "../helpers/getData";

export const useFetchBibles = ( url, bibleId, bookId, chapterId ) => {

    const finalURL = apiURL(url, bibleId, bookId, chapterId);
    console.log(finalURL)
    
    const [state, setState] = useState({ data:[], loading: true, error: null });

    useEffect(() => {

        getData( finalURL )
            .then( data => {

                const bibleData = ( !bibleId ) 
                ? (
                    data.map( bible => {
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
                    })
                )
                : (
                    data
                )

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

    }, [finalURL, bibleId]);

    return state;

}