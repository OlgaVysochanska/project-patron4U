import * as React from 'react';

function MaleIcon(props) {
  return (
    <svg
      width={25}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.758 11a5 5 0 100 10 5 5 0 000-10zm0 0V3m0 0l4 4m-4-4l-4 4"
        // stroke=візьме колір з className
        d="M 12 11 C 9.23858 11 7 13.2386 7 16 C 7 18.7614 9.23858 21 12 21 C 14.7614 21 17 18.7614 17 16 C 17 13.2386 14.7614 11 12 11 Z M 12 11 V 3 M 12 3 L 16 7 M 12 3 L 8 7"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default MaleIcon;
