const Button = props => {
  const {
    onClick,
    label,
    className,
    type,
    SVGComponent,
    showLabelFirst = true,
    buttonStyle,
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
    >
      {showLabelFirst && label}
      {SVGComponent && <SVGComponent />}
      {!showLabelFirst && label}
      {props.children}
    </button>
  );
};

export default Button;
