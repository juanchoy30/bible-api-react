import React from 'react';
import { useFetchBibles } from '../hooks/useFetchBibles';
import { baseURL } from '../shared/baseURL';

export const TextDisplayed = () => {

    const { data, loading, error } = useFetchBibles( baseURL, '9879dbb7cfe39e4d-02', 'JHN' ,'JHN.2' );
    
    const text = data.map( element => {
        return element.text
    });

    // const verse = data.map( element => {
    //     return element.text.map( element2 => {
    //         return element2.items
    //     })
    // });

    console.log(data)
    console.log(text)

    return (
        <div>
            <h2>Text</h2>
            {/* Titles has to be changed for the bibles name, it has to be imported from listOfBibles component */}
            <hr />

            { loading && <p>Loading</p>}
            
            {
                text.map( text => (
                    text.map( element => (
                        <p> { element.name } { element.text }</p>
                    ))
                ))
            }

        </div>
    )
}
