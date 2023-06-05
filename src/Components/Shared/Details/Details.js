import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Detail.css'
import UseAuth from '../../Hooks/UseAuth'

const Details = () => {

    const{isLoading}=UseAuth()
    const{name}=useParams();
    const [Services, setServices] = useState([]);
    const [ServiceDetail, setServiceDetail] = useState({});

    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[]) 


    
        useEffect(() => {
            console.log(Services.length);
            if(Services.length>0 && !isLoading){
                const DataFound= Services.find(x=>x.name===name)
                setServiceDetail(DataFound)
            }
        }, [Services])


    return (
        <div className=" ">
            <div className="mt-5">
                <div className="Details ">
                <img src={ServiceDetail.image} className="details-img w-50" alt="..."/>
                <div className="">
                    <h1 className="Details-title">{name}</h1>
                    <h6>
                    <i> Responsible Person :</i>
                    </h6>
                    <div>
                    <h4>
                         <b>
                             <i>
                             {ServiceDetail.person}
                             </i>
                             
                        </b>  </h4>
                        <h5> <i>
                        {ServiceDetail.post} <br /> {ServiceDetail.phone}
                            </i> 
                    </h5>
                    </div>
                        <h5>
                            Visiting Hour: {ServiceDetail.visiting}
                        </h5>
                    
    
                    

                    
                </div>
                </div>
             </div>
        </div>
            
            
    
    );
};

export default Details;