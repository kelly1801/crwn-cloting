import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  
} from "../utils/firebase/firebase.utils";
import SignUp from "../components/SignUp-form/SignUp";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <SignUp/>
      <button onClick={logGoogleUser}>Sign in with google</button>
    
    
    </>
  );
};

export default SignIn;
