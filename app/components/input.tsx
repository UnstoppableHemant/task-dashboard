const Input =({label,type,placeholder})=>{
    return(
        <>
            <p>{label}</p>
            <input className="outline-0 border p-1.5 text-black w-full rounded-md" type={type} placeholder={placeholder}/>
        </>
    )
}

export default Input