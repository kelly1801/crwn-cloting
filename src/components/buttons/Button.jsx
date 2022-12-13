import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  SpinnerContainer
} from "./button.styles.js";

export const buttonTypeClasses = {
  base: "base",
  google: "google",
  inverted: "inverted",
};

function Button({ children, buttonType,isLoading, ...buttonProps }) {
  const getButton = (buttonType = buttonTypeClasses.base) =>
    ({
      [buttonTypeClasses.base]: BaseButton,
      [buttonTypeClasses.google]: GoogleSignInButton,
      [buttonTypeClasses.inverted]: InvertedButton,
    }[buttonType]);

  const CustomButton = getButton(buttonType);
  return <CustomButton disabled={isLoading} {
    ...buttonProps}>{
    isLoading? <SpinnerContainer/> :
    children}</CustomButton>;
}

export default Button;
