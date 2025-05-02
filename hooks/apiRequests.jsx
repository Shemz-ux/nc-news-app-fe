import { useEffect, useState } from "react";

function useApiRequests(apiFunction, ...args){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    
    useEffect(() => {
        setLoading(true)
        setError(null)
        apiFunction(...args)
            .then((res) => {
                setData(res)
            })
            .catch((err)=>{
                if (err.response && err.response.status === 404) {
                    setError({ status: 404, statusMsg: 'Not found' })
                } else {
                    setError({ status: 500, statusMsg: 'Something went wrong. Please try again!' })
                }
            })
            .finally(()=>{
                setLoading(false)
                setError(false)
            })
    }, [...args]);

    return {data, loading, error}
}

export default useApiRequests;