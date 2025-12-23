function InputField( { label, details, type, name, value, onChange}) {
    return (
        <label htmlFor={details}>
            {label}
            <input
                type={type}
                id={details}
                name={name}
                value={value}
                onChange={onChange}
            />
        </label>
    )
}

export default InputField