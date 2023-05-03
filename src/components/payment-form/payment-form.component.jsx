import { CardElement } from "@stripe/react-stripe-js";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

import { useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const paymentsHandler = async (e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }
        const response = await fetch("/.netlify/functions/create-payment-intent",{
            method:"post",
            headers:{
                "Content-Types":"application/json"
            },
            body:JSON.stringify({amount:10000})
        }).then(res => res.json())
        const clientSecret = response.paymentIntent.client_secret

        const paymentResult = await stripe.confirmCardPayment(clientSecret,{
            card:elements.getElement(CardElement),
            billing_details:{
                name:"Abhishek Kadam"
            }
        })


        if(paymentResult.error){
            alert(paymentResult.error);
        }
        else{
            if(paymentResult.paymentIntent.status === "succeeded"){
                alert("payment successful")
            }
        }
    }

    return(
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentsHandler}>
                <h2>
                    Credit Card Payment
                </h2>

            <CardElement>

            </CardElement>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now </Button>
            </FormContainer>
        </PaymentFormContainer>
    )

}

export default PaymentForm