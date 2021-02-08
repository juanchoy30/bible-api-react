import React from 'react'
import { useFetchBibleById } from './hooks/useFetchBibleById';
import { useFetchBibles } from './hooks/useFetchBibles'
import { baseURL } from './shared/baseURL';

export const BibleApp = () => {


    // const { data, loading, error } = useFetchBibles( baseURL );
    const { data, loading, error } = useFetchBibleById( baseURL, '592420522e16049f-01' );

    //console.log(data);

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
