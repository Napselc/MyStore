import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss"
import Button from "../button/button.component";

const defaultFormFields = {
    displayName : "",
    email:"",
    password:"",
    confirmPassword:""
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        
        if(password != confirmPassword ){
            alert("Passwords do not match")
            return
        }

        try {

            const response = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(response.user, {displayName})
            resetFormFields()
            

        }catch (error){
            if(error.code == "auth/email-already-in-use"){
                alert("User with same email address already exists")
            }

        }

    }

    const handleChange = (event) => {

        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value})

    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account ?</h2>
            <span>Sign Up With Email Password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput
                label = "Display Name"
                text = "text"
                required
                onChange = {handleChange}
                name = "displayName"
                value = {displayName}>
                </FormInput>

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

                <FormInput
                label = "Confirm Password"
                text = "password"
                onChange = {handleChange}
                name = "confirmPasword"
                value = {confirmPassword}>
                </FormInput>              
                
                <Button buttonType = "inverted" type="submit"> Sign Up</Button>
            </form>
        </div>
    );

}

export default SignUpForm