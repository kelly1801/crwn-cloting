import './button.styles.scss'
const buttonTypeClasses = {
  google: "google",
  inverted: "inverted",
};
function Button({ children, buttonType, ...buttonProps }) {
  return (
    
    
    <button
      className={`button-container ${buttonTypeClasses[buttonType]}`}
      {...buttonProps}
    >
      {children}
    </button>
    

  );
}

export default Button;
