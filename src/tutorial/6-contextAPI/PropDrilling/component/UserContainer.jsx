import React from 'react'

function UserContainer(props) {
    return (
        <div>
            {props.name ?
                <div>
                    <h4>Hello There, {props.name}</h4>
                    <button onClick={props.logout}>Logout</button>
                </div> :
                <h4>login please</h4>
            }
        </div>

    )
}

export default UserContainer
