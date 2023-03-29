const SnowNight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64" 
      width={35}
    >
      <defs>
        <linearGradient
          id="a"
          x1="13.58"
          x2="24.15"
          y1="15.57"
          y2="33.87"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#86c3db" />
          <stop offset=".45" stop-color="#86c3db" />
          <stop offset="1" stop-color="#5eafcf" />
          <animateTransform
            attributeName="gradientTransform"
            dur="10s"
            repeatCount="indefinite"
            type="rotate"
            values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293"
          />
        </linearGradient>
        <linearGradient
          id="b"
          x1="22.56"
          x2="39.2"
          y1="21.96"
          y2="50.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f3f7fe" />
          <stop offset=".45" stop-color="#f3f7fe" />
          <stop offset="1" stop-color="#deeafb" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="30.12"
          x2="31.88"
          y1="43.48"
          y2="46.52"
          href="#a"
        />
        <linearGradient
          id="d"
          x1="29.67"
          x2="32.33"
          y1="42.69"
          y2="47.31"
          href="#a"
        />
        <linearGradient
          id="e"
          x1="23.12"
          x2="24.88"
          y1="43.48"
          y2="46.52"
          href="#a"
        />
        <linearGradient
          id="f"
          x1="22.67"
          x2="25.33"
          y1="42.69"
          y2="47.31"
          href="#a"
        />
        <linearGradient
          id="g"
          x1="37.12"
          x2="38.88"
          y1="43.48"
          y2="46.52"
          href="#a"
        />
        <linearGradient
          id="h"
          x1="36.67"
          x2="39.33"
          y1="42.69"
          y2="47.31"
          href="#a"
        />
      </defs>
      <path
        fill="url(#a)"
        stroke="#72b9d5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".5"
        d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"
      >
        <animateTransform
          attributeName="transform"
          dur="10s"
          repeatCount="indefinite"
          type="rotate"
          values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"
        />
      </path>
      <path
        fill="url(#b)"
        stroke="#e6effc"
        stroke-miterlimit="10"
        stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
      />
      <g>
        <circle
          cx="31"
          cy="45"
          r="1.25"
          fill="none"
          stroke="url(#c)"
          stroke-miterlimit="10"
        />
        <path
          fill="none"
          stroke="url(#d)"
          stroke-linecap="round"
          stroke-miterlimit="10"
          d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
        />
        <animateTransform
          additive="sum"
          attributeName="transform"
          dur="4s"
          repeatCount="indefinite"
          type="translate"
          values="-1 -6; 1 12"
        />
        <animateTransform
          additive="sum"
          attributeName="transform"
          dur="9s"
          repeatCount="indefinite"
          type="rotate"
          values="0 31 45; 360 31 45"
        />
        <animate
          attributeName="opacity"
          dur="4s"
          repeatCount="indefinite"
          values="0;1;1;1;0"
        />
      </g>
      <g>
        <circle
          cx="24"
          cy="45"
          r="1.25"
          fill="none"
          stroke="url(#e)"
          stroke-miterlimit="10"
        />
        <path
          fill="none"
          stroke="url(#f)"
          stroke-linecap="round"
          stroke-miterlimit="10"
          d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
        />
        <animateTransform
          additive="sum"
          attributeName="transform"
          begin="-2s"
          dur="4s"
          repeatCount="indefinite"
          type="translate"
          values="1 -6; -1 12"
        />
        <animateTransform
          additive="sum"
          attributeName="transform"
          dur="9s"
          repeatCount="indefinite"
          type="rotate"
          values="0 24 45; 360 24 45"
        />
        <animate
          attributeName="opacity"
          begin="-2s"
          dur="4s"
          repeatCount="indefinite"
          values="0;1;1;1;0"
        />
      </g>
      <g>
        <circle
          cx="38"
          cy="45"
          r="1.25"
          fill="none"
          stroke="url(#g)"
          stroke-miterlimit="10"
        />
        <path
          fill="none"
          stroke="url(#h)"
          stroke-linecap="round"
          stroke-miterlimit="10"
          d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
        />
        <animateTransform
          additive="sum"
          attributeName="transform"
          begin="-1s"
          dur="4s"
          repeatCount="indefinite"
          type="translate"
          values="1 -6; -1 12"
        />
        <animateTransform
          additive="sum"
          attributeName="transform"
          dur="9s"
          repeatCount="indefinite"
          type="rotate"
          values="0 38 45; 360 38 45"
        />
        <animate
          attributeName="opacity"
          begin="-1s"
          dur="4s"
          repeatCount="indefinite"
          values="0;1;1;1;0"
        />
      </g>
      <div xmlns="" id="divScriptsUsed" style={{display: 'none'}} />
      <script
        xmlns=""
        id="globalVarsDetection"
        src="chrome-extension://cmkdbmfndkfgebldhnkbfhlneefdaaip/js/wrs_env.js"
      />
    </svg>
  )
}

export default SnowNight