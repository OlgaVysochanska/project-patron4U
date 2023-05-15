function Button(props) {
  const {
    onClick,
    label,
    className,
    SVGComponent,
    showLabelFirst = true,
    buttonStyle,
  } = props;
  const buttonStyles = {
    ...buttonStyle,
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
  };
  return (
    <button onClick={onClick} className={className} style={buttonStyles}>
      {showLabelFirst && label}
      {SVGComponent && <SVGComponent />}
      {!showLabelFirst && label}
      {props.children}
    </button>
  );
}

export default Button;
