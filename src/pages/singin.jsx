import { singInWithGooglePopUp,createUserDocumentFromAuth,singInUserAuthWithEmailAndPassword} from "../firebase";
import { useState,} from "react";
import Button from "../componenet/button";
import InputForm from "../componenet/singupComponent";
function Singin(){

    const defaultFormFeidls = {
        email:'',
        password:'',
        
    }


    const [ formFeilds,setFormFeilds] = useState(defaultFormFeidls)
    const {email,password} = formFeilds;

    const handleChange = (event)=>{
    const {name,value} = event.target;
    setFormFeilds({...formFeilds,[name]:value})
    }

    const resetForm = ()=>{
        setFormFeilds(defaultFormFeidls);
    }
    const handleForm = async (event) =>{
        event.preventDefault();
   
        try{
           const {user} = await singInUserAuthWithEmailAndPassword(email,password)
        
           alert('you have succesfully login '+ user.email)
       resetForm();

            
        }catch(error){
           switch (error.code) {
            case 'auth/wrong-password':
                alert('incorrect password')
                break;

           
            default:
               console.log("this is"+error)
           }
        }
    }
    



    const logGoogleUser = async () => {
        const {user} = await singInWithGooglePopUp();
     await createUserDocumentFromAuth(user);
      }
      
  
    return(
        <>
        
        <h3> sing in with google</h3>
        <h2>this is a sing up page</h2>
        <button onClick={resetForm}>reset form</button>
        <form onSubmit={handleForm }>
        <InputForm type="email"name="email"id="email"onChange={handleChange}value={email}label={"email"}/>
        <InputForm type="password"name="password"id="password"onChange={handleChange}value={password}label={"password"}/>
     
     <Button type='submit' buttonType='twiter'>sing up google</Button>

        </form>
        <button onClick={logGoogleUser}>sing in</button>
        </>
    )
}
export default Singin;