import "./product-card.styles.scss";
import Button from "../buttons/button";


function ProductCard({ product }) {
const {name, price, imageUrl} = product
    return (
    <figure className="product-card-container">
      <img src={imageUrl} alt={`${name}`}/>
     
      <figcaption className="footer">
        <span className="name">{name}</span>
      <span className="price">{price}</span>
      </figcaption>
     
      <Button buttonType='inverted'>Add to cart</Button>
    </figure>
  );
}

export default ProductCard;
