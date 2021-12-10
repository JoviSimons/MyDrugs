import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsPending] = useState(true);
    const [error, setError ] = useState(null);


useEffect(() => {
        fetch(url) 
        .then(res => {
            if(!res.ok) {
                throw Error('could not fetch data');
            }
            return res.json();
        })
        .then(data =>  {
            setData(data);
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            setError(null)
            setIsPending(false)
        })
    }, [url]);

    return {data, isLoading, error} //use properties with custom hook
}

export default useFetch;