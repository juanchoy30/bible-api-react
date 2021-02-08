import React from 'react'
import { useFetchBibles } from './hooks/useFetchBibles';
import { baseURL } from './shared/baseURL';

export const BibleApp = () => {

     const { data, loading, error } = useFetchBibles( baseURL, '592420522e16049f-01','JHN', 'JHN.2');

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
