import * as React from 'react';

// colors = stroke

function FiltersIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 5a2 2 0 10-4 0m4 0a2 2 0 11-4 0m4 0h6M10 5H4m12 7a2 2 0 104 0 2 2 0 00-4 0zm0 0H4m4 7a2 2 0 10-4 0 2 2 0 004 0zm0 0h12"
        // stroke="#54ADFF"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default FiltersIcon;
