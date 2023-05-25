import * as React from 'react';

// color = stroke

function ArrowUpIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 4.00024L12 20.0002M12 4.00024L18 10.0002M12 4.00024L6 10.0002"
        // stroke="#54ADFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowUpIcon;
