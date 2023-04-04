import { useState } from "react";
import { signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss"
import Button from "../button/button.component";


const defaultFormFields = {
    email:"",
    password:"",
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    
    const signInWithGoogle = async () => {
        const response = await signInWithGooglePopup();
        createUserDocumentFromAuth(response.user)
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        

        try {
           const response = await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields()
        }catch (error){

            switch(error.code){
                case "auth/wrong-password":
                    alert("Incorrect Password")
                    break;
                case "auth/user-not-found":
                    alert("No user found")
                    break;
                default:
                    console.log(error)
            }

        }

    }

    const handleChange = (event) => {

        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value})

    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account ?</h2>
            <span>Sign In With Email Password</span>
            <form onSubmit={handleSubmit}>
                
                
                <FormInput
                label = "Email"
                text = "email"
                required
                onChange = {handleChange}
                name = "email"
                value = {email}>
                </FormInput>

                <FormInput
                label = "Password"
                text = "password"
                onChange = {handleChange}
                name = "password"
                value = {password}>
                </FormInput>
                <div className="buttons-container">
                <Button type="submit"> Sign In</Button>                
                <Button type = "button" buttonType = "google" onClick={signInWithGoogle}> Google Sign In</Button>
                </div>
                
            </form>
        </div>
    );

}

export default SignInForm