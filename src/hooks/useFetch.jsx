import { useState, useEffect } from "react"
import axios from '../axios';

const useFetch = (url)=>{

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(()=>{
        const fetchUser = async ()=>{
            setLoading(true);
            try{   
                const res = await axios.get(url);
                console.log(res.data)
                setData(res.data)
            }catch(error){
                console.log(error)
                setErrorMessage(error.message)
            }finally{
                setLoading(false);
            }
        }
        fetchUser();
    }, [url]);

    return [loading, data, errorMessage];

}

export default useFetch;


