import { useState , useEffect } from "react";

const useFetch = (funcFetch , initialData )=>{
    const [data, setData] = useState({data: null , error: null, loading:true });
      useEffect(()=>{
        setData({data: null , error: null, loading:true })
        funcFetch(initialData)
            .then((data) =>{ setData({data:data , error: null , loading :false})})
            .catch((error)=>{setData({data:null , error:error, loading :false})})
      },[initialData])
    return {
        data: data.data,
        error: data.error,
        loading : data.loading
    }
  }

  export default useFetch