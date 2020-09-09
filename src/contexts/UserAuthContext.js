import React from 'react';


const UserAuthContext = React.createContext({
    authStatus: false,
    setAuthStatus: () => { }
});



export default UserAuthContext;