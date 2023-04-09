import "./product-card.styles.scss"
import Button from "../button/button.component"

const ProductCard = (props) => {

    const {name, price, imageUrl} = props.product

    return(
    <div className = "product-card-container">
        <img src = {imageUrl} alt = {`${name}`}></img>
        <div className = "footer">
            <span className = "name"></span>
            <span className = "price"></span>
        </div>
        <Button buttonType = "inverted"> ADD TO CART</Button>
    </div>

    )

}

export default ProductCard