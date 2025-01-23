import React, { createContext } from 'react';
export const Authcontext = createContext(null)
const AuthProvider = ({ children }) => {
    const authInfo={

    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;