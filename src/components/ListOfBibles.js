import React from 'react'

import { useFetchBibles } from '../hooks/useFetchBibles';
import { baseURL } from '../shared/baseURL';

export const ListOfBibles = () => {

    const { data, loading, error } = useFetchBibles( baseURL);

    return (
        <div>
            <h3>List of Bibles</h3>
            <hr />

            { loading && <p>Loading</p>}
            
            <ul>
                {
                    data.map( bibles => (
                        <h4> { bibles.title } </h4>
                    ))
                }
            </ul>


        </div>
    )
}
