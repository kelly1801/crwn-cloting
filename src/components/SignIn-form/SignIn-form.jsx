import { useState } from "react";
import FormInput from "../form-input/FormInput";
import {SignInContainer, ButtonContainer} from "./sign-in-form.styles.js";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};
import Button, {buttonTypeClasses} from "../buttons/button";

function SignIn() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;


  function resetFormField() {
    setFormFields(defaultFormFields);
  }
  const signInWithGoogle = async () => {
   await signInWithGooglePopup();
    
  };
  function handleChange(event) {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
   
      resetFormField();
      
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("wrong password");
          break;
        case "auth/user-not-found":
          alert("wrong email");
          break;
        default:
          console.log(error);
      }

      console.log(error.code);
    }
  }

  return (
    <SignInContainer>
      <h2>Already have an account</h2>
      <span>Sign Up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          label="Email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          type="password"
          required
          onChange={handleChange}
          label="Password"
          name="password"
          value={password}
        />

        <ButtonContainer>
          <Button type="submit" onSubmit={handleSubmit}>
            Sign In
          </Button>
          <Button type="button" buttonType={buttonTypeClasses.google} onClick={signInWithGoogle}>
            Sign In with google
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
}

export default SignIn;
