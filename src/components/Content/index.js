import React, {useState,useEffect} from 'react'
import axios from 'axios';

export default function Content() {
    const [feature,setFeature] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3004/Judul").then(res=>setFeature(res.data));
    }, [])
    return (
        <div>
            {
                feature.map((item)=>{
                    return(
                        <div className="container-fluid">
                        <h1 className="mt-4">{item.Title}</h1>                 
                        <p>
                         {item.Subtitle}
                        </p>
                    </div>
                    )
                })
            }
           
        </div>
       
    )
}
