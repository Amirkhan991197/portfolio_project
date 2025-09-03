import { useEffect } from "react";
import axios from "axios";

export default function TestApi(){
    useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/projects/")
        .then(res => console.log(res.data))
        .catch(err => console.error(err));
    },[]);
    return <div>Testing Api -check console </div>;
    

}