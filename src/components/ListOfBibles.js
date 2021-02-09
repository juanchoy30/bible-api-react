import React from 'react'

import { useFetchBibles } from '../hooks/useFetchBibles';
import { baseURL } from '../shared/baseURL';

export const ListOfBibles = () => {

    const { data, loading, error } = useFetchBibles( baseURL);

    return (
        <div>
            <h2>List of Bibles</h2>
            <hr />

            { loading && <p>Loading</p>}
            
            <ul>
                {
                    data.map( bible => (
                        <li
                            key={ bible.id }
                        >
                            <h3><small>({ bible.abbreviation })</small> | { bible.localName }</h3>
                            <p>{ bible.title }</p>
                            <p>{ bible.description }</p>
                            <p>{ bible.language } / { bible.languageLocal }</p>
                        </li>
                    ))
                }
            </ul>


        </div>
    )
}
