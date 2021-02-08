import React from 'react'
import { useFetchBibles } from './hooks/useFetchBibles'
import { baseURL } from './shared/baseURL';

export const BibleApp = () => {


    const { data, loading } = useFetchBibles( baseURL );

    //console.log(data);

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
