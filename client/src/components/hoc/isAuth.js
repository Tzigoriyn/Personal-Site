import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../contexts/authContext';

const isAuth = (WrapedComponent) => {

    const Component = (props) => {
        console.log(props);
        const { isAuthenticated } = useContext(AuthContext);
        const history = useHistory();

        if (!isAuthenticated) {
            history.push('/login');

            return null;
        }
        return <WrapedComponent {...props} />
    }
    return Component;
}

export default isAuth;