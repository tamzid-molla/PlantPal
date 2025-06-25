import React, { useContext } from 'react';
import { AuthContext } from '../Context/FirebaseContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to='/login' state={location?.pathname}></Navigate>
    }
    return (
      children
    );
};

export default PrivateRoute;