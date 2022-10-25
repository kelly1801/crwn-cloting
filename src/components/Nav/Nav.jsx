import { useContext} from "react";
import {UserContext} from '../../context/user.context'
import { CartContext } from "../../context/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cartIcon/CartIcon";
import CartDropDown from '../cart-dropdown/CartDropDown'
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigationStyles'
import {useSelector} from 'react-redux'

function Nav() {
 
const currentUser =  useSelector(selectCurrentUser)
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
