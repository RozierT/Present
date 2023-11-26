// in this file i will need to make a little teeny tiny component that is going to handle the title of the form
//it will take in a title prop and render it in a nice way

const FormTitle = ({ title }) => {
    return (
        <h1 className='text-2xl font-bold text-content text-center mb-4'>{title}</h1>
    )
}

export default FormTitle;