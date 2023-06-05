import React from 'react';

const NotFound = () => {
    return (
        <div>
            <br /> <br />
            <h1>
                404
            </h1>
            <h3>
                The Page you requested is not found
            </h3>
            <br/> <br/> <br/> <br/>
            <p className="mb-5"> 
                This is maybe broken or removed...or the URL you enterd is completely wrong. Try with another one. <br />
                Thank you
            </p>
        </div>
    );
};

export default NotFound;