import React from "react";

const Hamburger = () => (
  <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_645_4068)">
      <path
        d="M1 21C1 9.95431 9.95431 1 21 1V1C32.0457 1 41 9.95431 41 21V21C41 32.0457 32.0457 41 21 41V41C9.95431 41 1 32.0457 1 21V21Z"
        fill="#14141C"
        shapeRendering="crispEdges"
      />
      <g opacity="0.98">
        <path
          d="M1 21C1 9.95431 9.95431 1 21 1C32.0457 1 41 9.95431 41 21C41 32.0457 32.0457 41 21 41C9.95431 41 1 32.0457 1 21Z"
          fill="url(#paint0_radial_645_4068)"
        />
      </g>
      <g opacity="0.98">
        <path
          d="M1 21C1 9.95431 9.95431 1 21 1V1C32.0457 1 41 9.95431 41 21V21C41 32.0457 32.0457 41 21 41V41C9.95431 41 1 32.0457 1 21V21Z"
          fill="url(#paint1_radial_645_4068)"
        />
      </g>
    </g>
    <rect width="20" height="1" transform="translate(11 23.3)" fill="#E3B2B3" />
    <rect width="20" height="1" transform="translate(11 17.7)" fill="#E3B2B3" />
    <defs>
      <filter
        id="filter0_d_645_4068"
        x="0.25"
        y="0.75"
        width="41.5"
        height="41.5"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology radius="0.75" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_645_4068" />
        <feOffset dy="0.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.184314 0 0 0 0 0.184314 0 0 0 0 0.254902 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_645_4068" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_645_4068" result="shape" />
      </filter>
      <radialGradient
        id="paint0_radial_645_4068"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(21 21) rotate(45) scale(28.2843)"
      >
        <stop offset="0.48" stopColor="#14141C" />
        <stop offset="1" stopColor="#0D0D13" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_645_4068"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(21 21) rotate(45) scale(28.2843)"
      >
        <stop offset="0.48" stopColor="#14141C" />
        <stop offset="1" stopColor="#0D0D13" />
      </radialGradient>
    </defs>
  </svg>
);

export default Hamburger;
