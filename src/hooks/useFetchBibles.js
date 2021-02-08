import { useEffect, useState } from "react";
import { getBibles } from "../helpers/getBibles";

export const useFetchBibles = () => {
    
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect(() => {

        getBibles()
            .then( data => {
                setState({
                    data: data,
                    loading: false
                });
            })

    });

    return state;

}