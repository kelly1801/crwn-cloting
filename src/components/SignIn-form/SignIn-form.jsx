import { useState } from "react";
import FormInput from "../form-input/FormInput";
import "./sign-in-form.styles.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};
import Button from "../buttons/button";

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
    <div className="sign-in-container">
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

        <div className="buttons-container">
          <Button type="submit" onSubmit={handleSubmit}>
            Sign In
          </Button>
          <Button type="button"buttonType="google" onClick={signInWithGoogle}>
            Sign In with google
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
