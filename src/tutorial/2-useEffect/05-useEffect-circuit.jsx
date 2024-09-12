import { useState, useEffect } from 'react'
import './03-useEffect.css'
const ShortCircuitEg = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className='wrapper'>
            <h2>Conditional Rendering</h2>
            {(name) ? <h1>{name} is the username</h1> : <h2>You need to provide Valid Name</h2>}
            {(user) ? <div>{user.name} is registerd</div> : <div>first register</div>}
            {isLogin?<button>Go Ahead</button>:<button>Login</button>}
        </div>
    );



}

export default ShortCircuitEg;