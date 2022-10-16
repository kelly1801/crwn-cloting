import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles.js";

export const buttonTypeClasses = {
  base: "base",
  google: "google",
  inverted: "inverted",
};

function Button({ children, buttonType, ...buttonProps }) {
  const getButton = (buttonType = buttonTypeClasses.base) =>
    ({
      [buttonTypeClasses.base]: BaseButton,
      [buttonTypeClasses.google]: GoogleSignInButton,
      [buttonTypeClasses.inverted]: InvertedButton,
    }[buttonType]);

  const CustomButton = getButton(buttonType);
  return <CustomButton {...buttonProps}>{children}</CustomButton>;
}

export default Button;
