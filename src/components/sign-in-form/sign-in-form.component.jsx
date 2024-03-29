import { useState, useContext} from "react";

import { signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";

import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";


import "./sign-in-form.styles.scss"


const defaultFormFields = {
    email:"",
    password:"",
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields

    const {setCurrentUser} = useContext(UserContext)


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        

        try {
           const {user} = await signInAuthUserWithEmailAndPassword(email, password)

            resetFormFields()
            setCurrentUser(user)
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
        <div className="sign-in-container">
            <h2>Already have an account ?</h2>
            <span>Sign In With Email Password</span>
            <form onSubmit={handleSubmit}>
                
                
                <FormInput
                label = "Email"
                type = "email"
                required
                onChange = {handleChange}
                name = "email"
                value = {email}>
                </FormInput>

                <FormInput
                label = "Password"
                type = "password"
                onChange = {handleChange}
                name = "password"
                value = {password}>
                </FormInput>
                <div className="buttons-container">
                <Button type = "submit"> Sign In</Button>
                <span></span>                
                <Button type = "button" buttonType = {BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}> Google Sign In</Button>
                </div>
                
            </form>
        </div>
    );

}

export default SignInForm