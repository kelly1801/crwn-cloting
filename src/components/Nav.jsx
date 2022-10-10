import {useContext} from "react";
import { Link } from "react-router-dom";
import './Styles/navigation.styles.scss';
import { UserContext } from "../context/user.context";
import { signOutUser } from '../utils/firebase/firebase.utils'

function Nav() {
const {currentUser} = useContext(UserContext)


  return (
    <nav className="navigation">
      <Link className="logo-container" to="/">
        <img src="/crwn.svg" alt="" />
      </Link>

      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        
        {
          currentUser? (<span onClick={signOutUser} className="nav-link"  to="/auth">
          Sign Out
        </span>) : (
          <Link className="nav-link" to="/auth">
          Sign in
        </Link>
        )
        }
      </div>
    </nav>
  );
}

export default Nav;
