import React from 'react';

import { useFetchBibles } from '../hooks/useFetchBibles';
import { baseURL } from '../shared/baseURL';

export const ListOfBooks = () => {

    const { data, loading, error } = useFetchBibles( baseURL, '9879dbb7cfe39e4d-02');

    return (
        <div>
            <h2>Books</h2>
            {/* Titles has to be changed for the bibles name, it has to be imported from listOfBibles component */}
            <hr />
            { loading && <p>Loading</p>}

            <ul>
                {
                    data.map( book => (
                        <li
                            key={ book.id }
                        >
                            <h3><small>({ book.id })</small> { book.name }</h3>
                            <p>{ book.nameLong }</p>
                        </li>
                    ))
                }
            </ul>


        </div>
    )
}
