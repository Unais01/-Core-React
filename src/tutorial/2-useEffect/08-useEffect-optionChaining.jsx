import { people } from "../../data.js";
import imgD from '../../assets/react.svg'
const Chaining = () => {
    people.map((person) => console.log(person.name)
    );

    return (
        <div className="wrapper">
            {people.map((person) => {
                return (<div>
                    <h3>{person.name}</h3>
                    <h5>{person?.nickName ?? 'nickname'}</h5>
                    <div>
                        <img src={person?.images?.[0]?.small?.url ?? imgD} width='50px' alt={person.name} />
                    </div>
                </div>)
            })}
        </div>
    )
}
export default Chaining;