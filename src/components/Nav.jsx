import { useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user.context";
import { signOutUser } from "../utils/firebase/firebase.utils";
import { CartContext } from "../context/cart.context";
import CartIcon from "./cartIcon/CartIcon";
import CartDropDown from './cart-dropdown/CartDropDown'
import "./Styles/navigation.styles.scss";

function Nav() {
  const { currentUser } = useContext(UserContext);
const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <img src="/crwn.svg" alt="" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>

          {currentUser ? (
            <span onClick={signOutUser} className="nav-link" to="/auth">
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign in
            </Link>
          )}

          <CartIcon />
        </div>
      {isCartOpen &&  <CartDropDown />}
      </nav>
    </>
  );
}

export default Nav;
