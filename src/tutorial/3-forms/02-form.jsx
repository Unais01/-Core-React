import { useState } from "react";
const MultipleInputs = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
        // console.log(e.target);


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        // (user)
        // setUser({
        //     ...user, email: '', name: '', password: ''
        // });



    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit} autoComplete="on">
                <h4>Multiple Inputs</h4>
                {/* name */}
                <div className='form-row'>
                    <label htmlFor='name' className='form-label'>
                        name
                    </label>
                    <input
                        type='text'
                        className='form-input'
                        id='name'
                        name='name'
                        value={user.name}
                        onChange={handleChange}
                    />
                </div>
                {/* email */}
                <div className='form-row'>
                    <label htmlFor='email' className='form-label'>
                        Email
                    </label>
                    {/* <input type="text" style={{ display: 'none' }} /> */}
                    <input
                        type='email'
                        className='form-input'
                        id='email'
                        name='email'
                        value={user.email}
                        autoComplete="new-password"
                        onChange={handleChange}
                    />
                </div>
                {/* password */}
                <div className='form-row'>
                    <label htmlFor='password' className='form-label'>
                        Password
                    </label>
                    <input
                        type='password'
                        className='form-input'
                        id='password'
                        name='password'
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>

                <button type='submit' className='btn btn-block'>
                    submit
                </button>
            </form>
            <div >
                
                <h3>{user.name}</h3>
                <h3>{(user.email||" ").toLowerCase()}</h3>
                <h3>{user.password}</h3>
            </div>
        </div>
    )
}
export default MultipleInputs;