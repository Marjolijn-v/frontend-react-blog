import './textarea.css'

function Textarea( { label, id, name, rows, cols, minLength, maxLength, value, onChange, error}) {
    return (
        <div className='message-field'>
            <label htmlFor={id}>{label}</label>
            <textarea
                id={id}
                name={name}
                rows={rows}
                cols={cols}
                minLength={minLength}
                maxLength={maxLength}
                value={value}
                onChange={onChange}
            />
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default Textarea;