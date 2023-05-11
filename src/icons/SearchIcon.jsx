import * as React from 'react';

// color = fill

function SearchIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      //   fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.47 20.53a.75.75 0 101.06-1.06l-1.06 1.06zM17.25 10.5a6.75 6.75 0 01-6.75 6.75v1.5a8.25 8.25 0 008.25-8.25h-1.5zm-6.75 6.75a6.75 6.75 0 01-6.75-6.75h-1.5a8.25 8.25 0 008.25 8.25v-1.5zM3.75 10.5a6.75 6.75 0 016.75-6.75v-1.5a8.25 8.25 0 00-8.25 8.25h1.5zm6.75-6.75a6.75 6.75 0 016.75 6.75h1.5a8.25 8.25 0 00-8.25-8.25v1.5zm10.03 15.72l-4.187-4.188-1.06 1.06 4.187 4.188 1.06-1.06z"
        // fill="#54ADFF"
      />
    </svg>
  );
}

export default SearchIcon;
