
// i need a componenet hat is a well styled text input field
// i need to be able to pass in a name, value, and onChange and i need to pass in a size 
// i need to be able to pass in a placeholder

const InputField = ({ name, value, onChange, type, placeholder, size }) => {
    return (
        <input
            className={`form-input ${size}`}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}

export default InputField;