import { useContext} from "react";
import { Link } from "react-router-dom";
import {UserContext} from '../../context/user.context'
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cartIcon/CartIcon";
import CartDropDown from '../cart-dropdown/CartDropDown'
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigationStyles'

function Nav() {
  const { currentUser } = useContext(UserContext);
const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src="/crwn.svg" alt="" />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to="/shop">
            Shop
          </NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser} to="/auth">
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">
              Sign in
            </NavLink>
          )}

          <CartIcon />
        </NavLinksContainer>
      {isCartOpen &&  <CartDropDown />}
      </NavigationContainer>
    </>
  );
}

export default Nav;
