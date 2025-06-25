import './TextField.css';

const TextField = (props) => {
    
    const placeholderModificado = `${props.placeholder}...`;

    const aoTyped = (event) => {
        props.aoChanged(event.target.value);
    }

    return (
        <div className="text-filed">
            <label>{props.label}</label>
            <input value={props.value} onChange={aoTyped} required={props.requiredField} placeholder={placeholderModificado} />
        </div>
    )
}

export default TextField