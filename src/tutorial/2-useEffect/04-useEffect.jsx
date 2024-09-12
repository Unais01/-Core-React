import { useState, useEffect } from "react";
import './04-useEffect.css'
function FetchingData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      console.log(DataTransfer);

      setUsers(data);
      setLoading(false);  // Stop loading once data is fetched
    };
    setTimeout(() => {

      fetchData();
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-bar-container">
          <div className="loading-bar"></div>
          <h3>Loading...</h3>
        </div>
      ) : (
        <UserList users={users} />
      )}
    </div>
  );
}

function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
  );
}

export default FetchingData;