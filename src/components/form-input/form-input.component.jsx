import { FormInputLabel, Input, Group } from "./form-input.styles";


const FormInput = (props) => {

    const {label, ...otherProps} = props

    return (
        <Group> 
        <Input {...otherProps}></Input>
        <FormInputLabel shrink={otherProps.value.length}>
            {label}
        </FormInputLabel>
        
        
        </Group>
    )
}

export default FormInput;