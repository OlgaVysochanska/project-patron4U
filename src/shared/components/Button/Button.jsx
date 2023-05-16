const Button = props => {
  const {
    onClick,
    label,
    className,
    SVGComponent,
    showLabelFirst = true,
    type = 'button',
  } = props;

  return (
    <button onClick={onClick} className={className} type={type}>
      {showLabelFirst && label}
      {SVGComponent && <SVGComponent />}
      {!showLabelFirst && label}
      {props.children}
    </button>
  );
};

export default Button;
