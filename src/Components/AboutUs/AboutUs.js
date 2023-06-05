import React from 'react';
import pic1 from '../../Images/doctor2.jpg'
import pic2 from '../../Images/bannerpic1.jpg'
import './AboutUs.css'
import Header from '../Homepage/Header/Header'

const AboutUs = () => {
    return (
        <div>
           
            <div className="row  m-xl-3 m-lg-3 p-xl-5 p-lg-5 About1">
                <div className="col-12">
                    <h1 className="d-flex justify-content-center mx-5">Be Cure by Special Care</h1>
                </div>
                
                <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    
                    <p className="m-xl-5 m-lg-5 my-md-1 my-sm-2 m-xs-2 mx-sm-5 mx-xs-5 px-sm-5 px-xs-5 ">
                        Our more than Proffessional as well as well trained doctors, nurses and staffs cares every single breath of yours. It is our cherished desire to see the happy face of yours as well as your family members. We know how important you are in the world!  <br /> <br /> 

                    </p>
                    


                </div>
                
                <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <img src={pic2} alt=""  className=" w-100 "/>
                </div>
                
            </div>

            <div className="row  my-3 py-5 About2 ">
                <div className="col-12">
                    <h1 className="d-flex justify-content-center mx-5 ">
                    <i>
                    World Class Services is in Your Front Foot
                    </i>
                </h1>
                </div>
                <div className="col-1">

                </div>

                <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-5">
                    <img src={pic1} alt=""  className=" w-100  "/>
                </div>
                
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    
                    <p className="mx-4 my-xs-5 my-sm-5 my-lg-2 my-md-2 my-xl-2 ">
                        <br />
                        We Provide Out Door services, Ward facilities, Dental care, 24 hours ambulance, Air Amblulance and 24/7 Emergence Services. We have 3 ICUs and 4 Operation Theaters with all modern and world class facilities. Moreoevr, Doctors from India ,Pakistan and Singapoor visits randomly and serves our patiens with care. Our modernized Pathology gives the assurance of providing 100% correct reports. We also have rehabilty center, physiotherapy center, implant center, firtility center, councelling department, modern CCUs and many more services. <br /> <br /> We are determined to serve the best to you. Have world class medical service in your country which is cost effective, easy and partriotic also.

                    </p>

                </div>     
                
            </div>
        </div>
    );
};

export default AboutUs;