import { useState } from 'react'
import './07-useEffect.css'
const UserChallenge = () => {
    const [user, setUser] = useState(null);
    const login = () => {
        setUser({ name: 'Unais' });
    }
    const logout = () => {
        setUser(null);
    }
    // login();
    // const {name}=user;
    return (
        <div className='wrapper'>
            {
                user ? <div className='ctn'><h4>Hello There {user.name.toUpperCase()}</h4><button className='btn' onClick={logout}> Logout</button></div>
                    : <div className='ctn'><h4>Please Login</h4><button className='btn' onClick={login}>Login</button></div>
            }
        </div>
    );
};

export default UserChallenge;