import './inputField.css'

function InputField( { label, id, type, name, value, onChange}) {
    return (
        <div className="input-field">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            />

        </div>
    )
}

export default InputField