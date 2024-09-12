import React, { useContext, useState } from 'react'
import NavLinks from './NavLinks'
import './01-context.css'
export const NavbarContext = React.createContext();
function Navbar() {
    const [user, setUser] = useState({ name: 'John Doe' });

        const{name}=user;


    const logout = () => {
        setUser((prevState) => ({
            ...prevState,
            name: prevState.name ? null : "John Doe"
        }));

    }
    return (
        <NavbarContext.Provider value={{name,logout}}>
            <div>
                <NavLinks/>
            </div>
        </NavbarContext.Provider>
    )
}

export default Navbar
