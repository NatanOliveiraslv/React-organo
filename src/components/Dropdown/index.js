import './Dropdown.css';

const Dropdown = (props) => {
    
    const aoTyped = (event) => {
        props.aoChanged(event.target.value);
    }

    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select default="" onChange={aoTyped} required={props.requiredField} value={props.value}>
                <option value="" selected disabled hidden>Selecione o time</option>
                {props.itens.map(item => <option value={item} key={item}>{item}</option>)}
            </select>
        </div>
    )

}


export default Dropdown;