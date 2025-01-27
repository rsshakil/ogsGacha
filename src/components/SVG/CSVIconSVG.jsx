import React from 'react';

export default function CSVIconSVG({ onClick }) {
    return (
        <>
            <svg
                onClick={onClick}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                className="w-[20px] h-[20px] hover:text-blue-50 cursor-pointer text-blue-100"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4.99 12.862a7.1 7.1 0 0 0 12.171 3.924a1.956 1.956 0 0 1 -.156 -.637l-.005 -.149l.005 -.15a2 2 0 1 1 1.769 2.137a9.099 9.099 0 0 1 -15.764 -4.85a1 1 0 0 1 1.98 -.275z" stroke-width="0" fill="currentColor"></path>
                <path d="M12 8a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" strokeWidth="0" fill="currentColor"></path>
                <path d="M13.142 3.09a9.1 9.1 0 0 1 7.848 7.772a1 1 0 0 1 -1.98 .276a7.1 7.1 0 0 0 -6.125 -6.064a7.096 7.096 0 0 0 -6.048 2.136a2 2 0 1 1 -3.831 .939l-.006 -.149l.005 -.15a2 2 0 0 1 2.216 -1.838a9.094 9.094 0 0 1 7.921 -2.922z" stroke-width="0" fill="currentColor"></path>
            </svg>
        </>
    );
}
