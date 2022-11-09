import {
  CheckoutItemContainer,
  ImageContainer,
  Item,
  Arrow,
  RemoveButton,
} from "./checkout-item.styles.js";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/Cart/cart.selector.js";
import {
  addItemToCart,
  deleteItemFromCart,
  removeItems,
} from "../../store/Cart/cart.action.js";
function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)

  const clearItemHandler = () => dispatch(removeItems(cartItems,cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems,cartItem));
  const deleteSingleItem = () => dispatch(deleteItemFromCart(cartItems,cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Item>{name}</Item>
      <Item quantity>
        <Arrow onClick={deleteSingleItem}>&#10094;</Arrow>
        <span> {quantity}</span>

        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Item>
      <span className="price">{quantity * price}</span>
      <RemoveButton onClick={clearItemHandler}> &#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;
