import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css'
import { useHistory } from 'react-router-dom'

const Service = (props) => {

    const{name,details,person,phone,post,image}=props.service

    const history=useHistory();

    const GoToDetails=(name)=>{
        const url= `/details/${name}`
        history.push(url)
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className=" mb-4 gap-3">
                <div className="card ">
                <img src={props.service.image} id="card-img-top" alt="..."/>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    
                    <h5 className="card-text">{details}</h5> <br />
                    
                    <Button onClick={()=>GoToDetails(name)}>
                        View Details
                    </Button>

                    
                </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Service;