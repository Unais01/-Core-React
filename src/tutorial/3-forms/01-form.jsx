import { useState } from "react";
import './01-form.css'
import { data } from "../../data.js";
const FormControl = () => {
    const [name, setName] = useState('');
    const [users, setUsers] = useState(data);
    // const [email, setEmail] = useState('');
    // const [newUser, setNewUser] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) return;
        const fakeId = Date.now();
        const newUsers = { id: fakeId, name: name };
        const updatedUsers = [...users, newUsers];
        setUsers(updatedUsers);
        setName("")
        console.log('form submitted');

    }
    const removeUser = (id) => {
        const updatedUsers = users.filter((person) =>
            person.id !== id
        );
        setUsers(updatedUsers);

    }
    const handleClearAll = () => {
        setUsers([]);
    }



    return (
        <div>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter the name" value={name}
                    onChange={(e) => setName(e.target.value)} />


                {/* <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter the email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
                <button className="btn" type="submit" >Submit</button>

            </form>
            <button className="btn" onClick={handleClearAll} >Clear All</button>
            <div>
                {users.map((person) => {
                    // const { name } = person
                    return (
                    <div className='list' key={person.id}>
                        <h4>{person.name}</h4>
                        <button className="btn" onClick={() => removeUser(person.id)}>Remove</button>
                    </div>)
                })}
                <div className='list'>
                    <h4>{users.name}</h4>


                </div>
            </div>
        </div>
    )
}
export default FormControl;