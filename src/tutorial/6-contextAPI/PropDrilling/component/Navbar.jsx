import React, { useState } from 'react';
import NavLinks from './NavLinks';
function Navbar() {
  const [user, setUser] = useState({ name: 'John Doe' });
  const logout = () => {
    setUser((prevState) => ({
      ...prevState,
      name: prevState.name ? null : 'John Doe',
    }));
  };
  return (
    <div>
      <NavLinks name={user.name} logout={logout} />
    </div>
  );
}

export default Navbar;
