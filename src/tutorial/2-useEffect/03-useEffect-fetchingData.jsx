import { useState, useEffect } from "react";
import './03-useEffect.css'

const url = 'https://api.github.com/users';
const fetchingData = () => {
    const [users, setUsers] = useState([]);
    // console.log(users);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setUsers(data)
            } catch (error) {
                console.log(error);

            }
        }
        fetchData();
    }, []);
     console.log(users);

    return (
        <>
            <div className="wrapper">
                {
                    users.map((item) => {
                        return (
                            <div className="ctn" key={item.id}>
                                <img className="img-ctn" src={item.avatar_url} alt="image" />
                                <div >
                                <h4>{item.login}</h4>
                                <a className="links" href={item.url}>Links</a>
                                </div>
                            </div>
                        )

                    })
                }

            </div>
        </>
    );
}
export default fetchingData;