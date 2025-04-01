import { useEffect, useState } from "react";

function useApiRequests(apiFunction, ...args){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    
    useEffect(() => {
        setLoading(true)
        apiFunction(...args)
            .then((res) => {
                setData(res)
            })
            .catch(()=>{
                setError({ status: 404, statusMsg: 'Failed to load articles'})
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [...args]);

    return {data, loading, error}
}

export default useApiRequests;