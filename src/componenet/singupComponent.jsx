
function InputForm ({label,...otherprops}){
    return(
        <>
        <div>
            <label>{label}</label>
            <input {...otherprops}/>
        </div>
        </>
    )
}
export default InputForm;