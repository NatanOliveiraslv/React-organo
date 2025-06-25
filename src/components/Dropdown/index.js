import './Dropdown.css';

const Dropdown = (props) => {
    
    const aoTyped = (event) => {
        props.aoChanged(event.target.value);
    }

    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select onChange={aoTyped} required={props.requiredField} value={props.value}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )

}


export default Dropdown;