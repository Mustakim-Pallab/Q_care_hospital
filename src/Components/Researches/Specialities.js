import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import pic1 from '../../Images/ambulance.jpg'
import pic2 from '../../Images/breakfast.jpg'
import pic3 from '../../Images/patho.jpg'
import pic5 from '../../Images/pharmacy.jpg'
import pic4 from '../../Images/heart care.jpg'
import pic6 from '../../Images/doctor.jpg'
import './Specialities.css'

const Specialities = () => {
    return (
        <div className="Specialities m-4">
            <h2 className=" spe-p m-5 mb-2">
                <i>
                {/* <b> */}
                Our Specialities
                {/* </b> */}
                </i>
            </h2>
            <div class="Card m-5">
            <div class="row g-0">
                <div class="col-md-4">
                <img src={pic1} class="img p-3 mt-4 rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="Card-body mt-xl-5 mt-lg-5 mt-md-5 mt-md-5 my-sm-2 pt-sm-0 mx-xs-3 my-xs-2 pt-xs-0 mx-xs-3 p-xl-3 p-lg-3 p-md-3 ps-xl-2 p-lg-2 p-md-2 p-sm-0 p-xs-0">
                    <h2 class="Card-title"><i>
                    Emergency Abmulance Service</i></h2>
                    <p class="Card-text">We provide 24/7 emergency abmulace service. Just pick your phone and call us on 12345</p>
                    <p class="Card-text"><small class="text-muted">*Complementary Service</small></p>
                </div>
                </div>
            </div>
            </div>
            <div class="Card m-5">
            <div class="row g-0">
                <div class="col-md-4">
                <img src={pic2} class="img p-3 mt-4 rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="Card-body mt-xl-5 mt-lg-5 mt-md-5 mt-md-5 my-sm-2 pt-sm-0 mx-xs-3 my-xs-2 pt-xs-0 mx-xs-3 p-xl-3 p-lg-3 p-md-3 ps-xl-2 p-lg-2 p-md-2 p-sm-0 p-xs-0">
                    <h2 class="Card-title"><i>
                   Healty Meals for admitted patients</i></h2>
                    <p class="Card-text">Fresh and healty food as per doctors advice is provided 3 times a day.</p>
                    <p class="Card-text"><small class="text-muted">*only for patient, charges applicable</small></p>
                </div>
                </div>
            </div>
            </div>
            <div class="Card m-5">
            <div class="row g-0">
                <div class="col-md-4">
                <img src={pic3} class="img p-3 mt-4 rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="Card-body mt-xl-5 mt-lg-5 mt-md-5 mt-md-5 my-sm-2 pt-sm-0 mx-xs-3 my-xs-2 pt-xs-0 mx-xs-3 p-xl-3 p-lg-3 p-md-3 ps-xl-2 p-lg-2 p-md-2 p-sm-0 p-xs-0">
                    <h2 class="Card-title"><i>
                    Modern Pathology Service</i></h2>
                    <p class="Card-text">A modern pathology for diagnosis is available that gives 100% assurance of correct report</p>
                    <p class="Card-text"><small class="text-muted">*25% of for patients referred by us</small></p>
                </div>
                </div>
            </div>
            </div>
            <div class="Card m-5">
            <div class="row g-0">
                <div class="col-md-4">
                <img src={pic4} class="img p-3 mt-4 rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="Card-body mt-xl-5 mt-lg-5 mt-md-5 mt-md-5 my-sm-2 pt-sm-0 mx-xs-3 my-xs-2 pt-xs-0 mx-xs-3 p-xl-3 p-lg-3 p-md-3 ps-xl-2 p-lg-2 p-md-2 p-sm-0 p-xs-0">
                    <h2 class="Card-title"><i>
                    Cardiac Care</i></h2>
                    <p class="Card-text">Cardiologists from home and abroad visits every moth along with our regular physicians</p>
                    <p class="Card-text"><small class="text-muted">*24/7 open</small></p>
                </div>
                </div>
            </div>
            </div>
            <div class="Card m-5">
            <div class="row g-0">
                <div class="col-md-4">
                <img src={pic5} class="img p-3 mt-4 rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="Card-body mt-xl-5 mt-lg-5 mt-md-5 mt-md-5 my-sm-2 pt-sm-0 mx-xs-3 my-xs-2 pt-xs-0 mx-xs-3 p-xl-3 p-lg-3 p-md-3 ps-xl-2 p-lg-2 p-md-2 p-sm-0 p-xs-0">
                    <h2 class="Card-title"><i>
                    Pharmacy</i></h2>
                    <p class="Card-text">Our vast pharmacy is a store of all kinds of medicines and medical accessories that are provided with the govt approved rate </p>
                    <p class="Card-text"><small class="text-muted">*medicines are only purchaseable by prescriptions </small></p>
                </div>
                </div>
            </div>
            </div>
            <div class="Card m-5">
            <div class="row g-0">
                <div class="col-md-4">
                <img src={pic6} class="img p-3 mt-4 rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="Card-body mt-xl-5 mt-lg-5 mt-md-5 mt-md-5 my-sm-2 pt-sm-0 mx-xs-3 my-xs-2 pt-xs-0 mx-xs-3 p-xl-3 p-lg-3 p-md-3 ps-xl-2 p-lg-2 p-md-2 p-sm-0 p-xs-0">
                    <h2 class="Card-title"><i>
                    Specialized Doctors</i></h2>
                    <p class="Card-text">Our Doctors are proffessional, experienced and well trained.  </p>
                    <p class="Card-text"><small class="text-muted">*Serials must have to submit before </small></p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Specialities;