import React from 'react';

export default function AddSVG({ onClick }) {
    return (
        <>
            <svg
                onClick={onClick}
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                t="1551322312294"
                viewBox="0 0 1024 1024"
                version="1.1"
                class="h-[22px] w-[22px] z-10 mr-[-32px] text-blue-100 hover:text-blue-50  cursor-pointer"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs></defs>
                <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
            </svg>
        </>
    );
}
