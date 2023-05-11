import * as React from 'react';

// color = stroke

function CheckboxIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 8a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4V8z"
        // stroke="#54ADFF"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CheckboxIcon;
