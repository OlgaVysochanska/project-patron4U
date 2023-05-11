function Button(props) {
  const { onClick, label, className, SVGComponent, showLabelFirst = true } = props;

  return (
    <button onClick={onClick} className={className}>
      {showLabelFirst && label}
      {SVGComponent && <SVGComponent />}
      {!showLabelFirst && label}
      {props.children}
    </button>
  );
}

export default Button;
