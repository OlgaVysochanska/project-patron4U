import * as React from 'react';

function FemaleIcon(props) {
  return (
    <svg
      width={25}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M 12 13 C 14.7614 13 17 10.7614 17 8 C 17 5.23858 14.7614 3 12 3 C 9.23858 3 7 5.23858 7 8 C 7 10.7614 9.23858 13 12 13 Z M 12 13 L 12 21 M 9 18 L 15 18"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FemaleIcon;
