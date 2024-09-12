import React, { useContext } from 'react'
import Navbar, { NavbarContext } from './Navbar'

function UserContainer() {
    const { name, logout } = useContext(NavbarContext)
    return (
        <div>
            {name ?
                <div>
                    <h4>Hello There, {name}</h4>
                    <button onClick={logout}>Logout</button>
                </div> :
                <h4>login please</h4>
            }
        </div>

    )
}

export default UserContainer
