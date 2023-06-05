import React,{useState,useEffect} from 'react';
import Service from '../Shared/Service/Service';



const Services = () => {
    const[Services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[]) 
    return (
        <main className="services m-4 ">
            <div className=" ">
            <h1 className="headline m-5"> 
                Our Special Services 
            </h1>
            
            
            <div className=" row m-3">
                
                    {
                        
                        Services.map(service => 
                            
                            <Service service={service} key={service.name}></Service>
                            )
                    }
                
               
            </div>
            </div>
        </main>
    );
};

export default Services;