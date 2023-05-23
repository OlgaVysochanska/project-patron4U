const Button = props => {
  const {
    onClick,
    label,
    className,
    type,
    SVGComponent,
    showLabelFirst = true,
    buttonStyle,
    disabled = false,
  } = props;
  const buttonStyles = {
    ...buttonStyle,
  };
  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
      style={buttonStyles}
      disabled={disabled}
    >
      {showLabelFirst && label}
      {SVGComponent && <SVGComponent />}
      {!showLabelFirst && label}
      {props.children}
    </button>
  );
};

export default Button;
