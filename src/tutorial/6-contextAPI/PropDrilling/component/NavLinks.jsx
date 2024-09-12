import React from 'react'
import UserContainer from './UserContainer'



function NavLinks(props) {
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>FAQ'S</li>
            </ul>
            <UserContainer name={props.name} logout={props.logout}/>
        </div>
    )
}

export default NavLinks
