import React, { useContext } from 'react';
import Loading from '../../Component/LoadingPage/Loading';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
   
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
     }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;