const Button = ({label, onClick, backgroundColor='bg-blue-400', type='button'})=>{

    return(
            <button type={type} onClick={onClick} className={`rounded-lg  w-full py-1 ${backgroundColor}  text-white cursor-pointer hover:bg-blue-600 transition duration-200`}>
            {label}
        </button>
    );
}

export default Button;