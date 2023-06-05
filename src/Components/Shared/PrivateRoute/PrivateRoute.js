import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../Context/AuthProvider';
import UseAuth from '../../Hooks/UseAuth';

const PrivateRoute = ({children,...rest}) => {
    const{User,isLoading}= UseAuth()

    if(isLoading){
        return(
            <div>
                <Spinner className="m-3" animation="grow" size="sm" />
                <Spinner className="m-3" animation="grow" size="sm" />
                <Spinner className="m-3" animation="grow" size="sm" />
            </div>
        )
    }
    return (
        <div>
            <Route
            {...rest}
            render={({location})=>User.email?children:
            <Redirect to={
                {
                    pathname:"/login",
                    state:{from:location}
                }
            }
            > </Redirect>
        }
            >

            </Route>
            
        </div>
    );
};

export default PrivateRoute;