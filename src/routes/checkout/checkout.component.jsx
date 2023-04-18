import "./checkout.styles.scss"
import { CartContext } from "../../contexts/cart.context"
import { useContext } from "react"

const Checkout = () => {


    const {cartItems, addItemToCart, removeItemFromCart} = useContext(CartContext)

    return(
        <div className="checkout-container">
            <div className="cheackout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((item)=>
            (<div key={item.id}>
            <h2>{item.name}</h2>
            <h2>{item.quantity}</h2>
            <span onClick={()=>{addItemToCart(item)}}>Increment</span>
            <br/>
            <span onClick={()=>{removeItemFromCart(item)}}>Decrement</span>
            </div>)
            )}
            <span className="total">Total: 0</span>
        </div>
    )
}

export default Checkout