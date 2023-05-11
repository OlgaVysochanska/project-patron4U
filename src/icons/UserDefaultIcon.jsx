import * as React from 'react';

function UserDefaultIcon(props) {
  return (
    <svg
      width={28}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 24v-2a4 4 0 00-4-4h-8a4 4 0 00-4 4v2m12-14a4 4 0 11-8 0 4 4 0 018 0z"
        stroke="#FFC107"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x={0.75}
        y={0.75}
        width={26.5}
        height={26.5}
        rx={13.25}
        stroke="#FFC107"
        strokeWidth={1.5}
      />
    </svg>
  );
}

export default UserDefaultIcon;
