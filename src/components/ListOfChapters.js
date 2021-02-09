import React from 'react';
import { useFetchBibles } from '../hooks/useFetchBibles';
import { baseURL } from '../shared/baseURL';

export const ListOfChapters = () => {

    const { data, loading, error } = useFetchBibles( baseURL, '9879dbb7cfe39e4d-02', 'JHN' );

    return (
        <div>
            <h2>Chapters</h2>
            {/* Titles has to be changed for the bibles name, it has to be imported from listOfBibles component */}
            <hr />
            { loading && <p>Loading</p>}

            <ul>
                {
                    data.map( book => (
                        <li
                            key={ book.id }
                        >
                            <h3>{ book.id }</h3>
                        </li>
                    ))
                }
            </ul>


        </div>
    )
}
