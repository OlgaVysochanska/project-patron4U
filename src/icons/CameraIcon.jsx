import * as React from 'react';

// color = stroke

function CameraIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 16a3 3 0 100-6 3 3 0 000 6z"
        // stroke="#54ADFF"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M3 9a2 2 0 012-2h2.5a1 1 0 001-1 1 1 0 011-1h5a1 1 0 011 1 1 1 0 001 1H19a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        // stroke="#54ADFF"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CameraIcon;
