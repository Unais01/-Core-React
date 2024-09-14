import { useEffect, useRef, useState } from 'react';

const UncontrolledInput = () => {
    const [user, setUser] = useState(0);
    const formRef = useRef(null);

    useEffect(() => {});
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = formRef.current.value;

        console.log(name);
    };
    return (
        <div>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input ref={formRef} id="name" type="text" />

                <button className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};
export default UncontrolledInput;
