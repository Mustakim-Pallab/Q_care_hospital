import React from "react";

const Doctor = ({ data }) => {
  const { name, score, country, id, photo } = data;
  console.log(name);

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 ">
      <div className=" mb-4 gap-3">
        <div className="card ">
          <img src={photo} id="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">{name} has completed his degree From {country} and serves as a specialist since 2012. He obtained {score} out of hundred in our Doctors Proficiency test. </p>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
