// This component could be use further

const ErrorMessage = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className='error'>
            {message}
        </div>
    )
}

export default ErrorMessage