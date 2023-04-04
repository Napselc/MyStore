import "./button.styles.scss"


const BUTTON_TYPES_CLASSES = {
    google: "google-sign-in",
    inverted:"inverted"
}


const Button = (props) => {
    return(
        <button 
        className = {`button-container ${BUTTON_TYPES_CLASSES[props.buttonType]}`}
        type = {props.type}
    >
    {props.children}
    </button>
    )
}

export default Button