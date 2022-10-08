import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import SignUp from "../components/SignUp-form/SignUp";
import SignIn from "../components/SignIn-form/SignIn-form";
import Button from "../components/buttons/Button"
import '../components/styles/authentication.styles.scss'

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
      
    </div>
  );
};

export default Authentication;
