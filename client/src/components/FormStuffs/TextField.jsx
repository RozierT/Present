// this component is used to create a text field in the form


const TextField = ({ name, value, onChange, placeholder, styles }) => {
    return (
        <textarea 
        className={`form-input w-full text-black ${styles}`}
        rows={4}
        value={value}
        name={name}
        onChange={onChange} 
        placeholder={placeholder}
    />
    )
}

export default TextField;