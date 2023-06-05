import React from 'react';
import './Navigation.css';
import logo from '../../../Images/logo1.PNG'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {  Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import UseAuth from '../../Hooks/UseAuth';
import { signOut } from '@firebase/auth';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    
    const{User, setUser,auth}=UseAuth()
    console.log(User.email);
    const logOut=()=>{
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div className="Navigation">
            <Navbar collapseOnSelect expand="lg" sticky="top"  bg="light" className="navbar d-flex align-items-center" >
            <Container>
            <Navbar.Brand href="#home" className="CompanyName d-flex mt-3 ">
                <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="QCare logo"
                />
                <p className="mt-1 ms-1">QCare {" "}
                <span>
                    Hospital
                </span></p>
            </Navbar.Brand>
            {/* <Navbar.Brand to="#home"  >
                </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                
                </Nav>
                <Nav className="gap-2 mt-2 mt-xs-0 bg-light">
                <Nav.Link as={HashLink} className="Navigation_options" to='/home#home'>Home</Nav.Link>
                <Nav.Link as={HashLink} className="Navigation_options" to="/about_us">About Us</Nav.Link>
                <Nav.Link as={HashLink} className="Navigation_options" to="/services">Services</Nav.Link>
                <Nav.Link as={HashLink} className="Navigation_options" to="/speciality">Specialities</Nav.Link>
        
                <Nav.Link className="Name">
                    <i>
                    {User?.displayName}
                    </i>
                    </Nav.Link>
                
                {
                    User.email?(
                    <Nav.Link onClick={logOut} className="gap-5 ">
                    <Button id="sign_in_button" size="sm" >
                       <b>
                       Logout
                        </b>
                    </Button>
                </Nav.Link>)
                :(
                <Nav.Link as={HashLink} to="/login" className="gap-5 ">
                    <Button id="sign_in_button" size="sm" >
                       <b>
                       Login
                        </b>
                    </Button>
                </Nav.Link>)
                }
                
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Navigation; 