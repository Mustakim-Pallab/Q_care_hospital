import React from 'react';
import './Topbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt , faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { getAuth } from "firebase/auth";

import Login from '../../Shared/Login/Login';


const Topbar = () => {

    
    
    return (
        <div className="Topbar">
            
        <Container fluid >
        <Row>
            <Col xl={6} lg={5} md={6} xs={1} sm={1} className=" d-flex ms-5 ms-xs-0 mt-2">
                <FontAwesomeIcon icon={faPhoneAlt} className=" float-start mt-1 me-1"/> 
                <p>12345</p>
                <FontAwesomeIcon icon={faEnvelope} className="float-end mt-1 ms-3"/>
                <p className="ms-1">
                    hospital@gmail.com
                </p>

            </Col>
            
            <Col xl={5} lg={6} md={5} xs={8} sm={9} className=" float-end ms-5 mt-2 mt-xs-0 ms-lg-2 ms-md-1 ms-sm-5 ms-xs-5">
                <FontAwesomeIcon icon={ faLinkedin } className="topbar-hover float-end mt-1 ms-3" ></FontAwesomeIcon>
                <FontAwesomeIcon icon={ faInstagram } className="topbar-hover float-end mt-1 ms-3"></FontAwesomeIcon>
                <FontAwesomeIcon icon={ faTwitter } className="topbar-hover float-end mt-1 ms-3"></FontAwesomeIcon>
                <FontAwesomeIcon icon={ faFacebookF } className="topbar-hover float-end mt-1 ms-3"></FontAwesomeIcon>
            </Col>
        </Row>
        
        </Container>
        
        </div>
    );
};

export default Topbar;