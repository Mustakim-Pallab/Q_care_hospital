import React, { useEffect, useState } from "react";
import './Doctors.css'
import Doctor from "../Shared/Doctor/Doctor";

const Doctors = ({ data }) => {
  const[Doctors,setDoctors]=useState([]);
    useEffect(()=>{
        fetch('https://64743e827de100807b1a84ab.mockapi.io/api/v1/leaderboard/users')
        .then(res=>res.json())
        .then(data=>setDoctors(data));
    },[]) 
  return (
    <main className="services m-4 ">
            <div className=" ">
            <h1 className="headline m-5"> 
                Specialized Doctors
            </h1>
            
            
            <div className=" row m-3">
                
                    {
                        
                        data.map(doctor => 
                            
                            <Doctor data={doctor} key={doctor.id}></Doctor>
                            )
                    }
                
               
            </div>
            </div>
        </main>
  );
};

export default Doctors;
