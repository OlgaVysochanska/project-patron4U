import * as React from 'react';

// color = stroke

function LogoutIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 4h4a2 2 0 012 2v12a2 2 0 01-2 2h-4M3 12h12M3 12l4-4m-4 4l4 4"
        // stroke="#54ADFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LogoutIcon;
