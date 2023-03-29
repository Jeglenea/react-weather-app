const OvercastNight = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={35}>
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
          x1="40.76"
          x2="50.83"
          y1="23"
          y2="40.46"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#9ca3af" />
          <stop offset=".45" stop-color="#9ca3af" />
          <stop offset="1" stop-color="#6b7280" />
        </linearGradient>
        <linearGradient
          id="c"
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
        stroke="#848b98"
        stroke-miterlimit="10"
        stroke-width=".5"
        d="M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z"
      >
        <animateTransform
          attributeName="transform"
          dur="7s"
          repeatCount="indefinite"
          type="translate"
          values="-2.1 0; 2.1 0; -2.1 0"
        />
      </path>
      <path
        fill="url(#c)"
        stroke="#e6effc"
        stroke-miterlimit="10"
        stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
      >
        <animateTransform
          attributeName="transform"
          dur="7s"
          repeatCount="indefinite"
          type="translate"
          values="-3 0; 3 0; -3 0"
        />
      </path>
      <div xmlns="" id="divScriptsUsed" style={{ display: "none" }} />
      <script
        xmlns=""
        id="globalVarsDetection"
        src="chrome-extension://cmkdbmfndkfgebldhnkbfhlneefdaaip/js/wrs_env.js"
      />
    </svg>
  )
}

export default OvercastNight
