import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';

const Header = () => {
    const {logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error.message))
    }
    return (
        <div>
            <h2>Header goes here</h2>
            <button className='btn btn-primary' onClick={handleLogOut}>Log Out</button>
        </div>
    );
};

export default Header;