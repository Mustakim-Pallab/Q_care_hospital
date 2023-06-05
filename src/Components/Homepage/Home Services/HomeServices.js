import React, { useEffect, useState } from 'react';
import Service from '../../Shared/Service/Service';

import './HomeServices.css'

const HomeServices = () => {
    const[Services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    

    return (
        
        <main className=" m-5 p-2 HomeServices">
            <h1 className=" h1">
            Meet Our Special Services
            </h1>
            <p className="p">We create a milestone in the healthcare sector of Bangladesh </p>
            <br /> <br />
            <div className=" row">
                
                    {
                        
                        Services.slice(0,6).map(service => 
                            
                            <Service service={service} key={service.name}></Service>
                            )
                    }
                
               
            </div>
        </main>
    );
};


export default HomeServices;