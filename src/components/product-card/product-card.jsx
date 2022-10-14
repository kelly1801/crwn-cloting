import "./product-card.styles.scss";
import Button from "../buttons/button";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";


function ProductCard({ product }) {
const {name, price, imageUrl} = product
const {addItemToCart} = useContext(CartContext)


function addOnClick() {
  addItemToCart(product)
}
return (
    <figure className="product-card-container" >
      <img src={imageUrl} alt={`${name}`}/>
     
      <figcaption className="footer"  >
        <span className="name">{name}</span>
      <span className="price">{price}</span>
      </figcaption>
     
      <Button 
      buttonType='inverted'
      onClick={addOnClick}
      >Add to cart</Button>
    </figure>
  );
}

export default ProductCard;
