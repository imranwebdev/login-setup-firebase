import { useState} from "react";
import  {createUserAuthWithEmailAndPassword,createUserDocumentFromAuth } from "../firebase"
import Button from "../componenet/button";
import InputForm from "../componenet/singupComponent";
function SingUp(){
const defaultFormFeidls = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}
const [ formFeilds,setFormFeilds] = useState(defaultFormFeidls)
const {displayName,email,password,confirmPassword} = formFeilds;
console.log(formFeilds )
const handleChange = (event)=>{
const {name,value} = event.target;
setFormFeilds({...formFeilds,[name]:value})
}
const resetForm = ()=>{
    setFormFeilds(defaultFormFeidls);
}
const handleForm = async (event) =>{
    event.preventDefault();

    if(password!== confirmPassword){
        alert("passwode not matched")
        return;
    }

    try{
       const {user} = await createUserAuthWithEmailAndPassword(email,password)
          await createUserDocumentFromAuth(user,{displayName})
          
          alert('you succesfully registered')
   resetForm();
        
    }catch(error){
        console.log('this is ' + error)
    }
}

    return(
        <>
        <h2>this is a sing up page</h2>
        <button onClick={resetForm}>reset form</button>
        <form onSubmit={handleForm }>
        <InputForm type="text"name="displayName"id="name"onChange={handleChange}value={displayName}label={"display name"}/>
        <InputForm type="email"name="email"id="email"onChange={handleChange}value={email}label={"email"}/>
        <InputForm type="password"name="password"id="password"onChange={handleChange}value={password}label={"password"}/>
        <InputForm type="password"name="confirmPassword"id="name"onChange={handleChange}value={confirmPassword}label={'password'}/>
     
     <Button type='submit' buttonType='twiter'>sing up google</Button>

        </form>
        </>
    )
}
export default SingUp;