import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import SignUp from "../components/SignUp-form/SignUp";
import SignIn from "../components/SignIn-form/SignIn-form";

import {AuthenticationContainer} from '../components/styles/authentication.styles.js'

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
      
    </AuthenticationContainer>
  );
};

export default Authentication;
