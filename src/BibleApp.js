import React from 'react'
import { useFetchBibles } from './hooks/useFetchBibles'

export const BibleApp = () => {

    const { data, loading } = useFetchBibles();

    //console.log(data);

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
