import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <section>
            <div className="header d-flex justify-content-center align-items-center p-5 p-md-0 p-xs-0">
                <div className="px-4 py-5 px-xs-0 py-xs-0 rounded" style={{backgroundColor : "rgba(59, 66, 75, 0.7)"}}>
                    <h2 className="text-light text-center py-3 py-xs-0"><span className='text-1 '>We Care Your Health </span><br /><span className='text-2 pt-2 pt-xs-0'> You are very important to us</span></h2>

                    <p className="text-center banner-dialogue text-light px-4 py-3 py-xs-0 rounded"><small>We offer the best services with highly professional staffs who cares your health and life <br />who cares your health and life with our service <br /> and make it a piece of art with our service </small></p>
                    
                    <div className="d-flex justify-content-center align-items-center py-3">
                        <button className="btn btn-dark btn-brand ">View Gallery</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;