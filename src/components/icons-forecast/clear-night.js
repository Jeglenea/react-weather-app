const ClearNight = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={35}>
      <defs>
        <linearGradient
          id="a"
          x1="21.92"
          x2="38.52"
          y1="18.75"
          y2="47.52"
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
            values="5 32 32; -15 32 32; 5 32 32"
          />
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        stroke="#72b9d5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".5"
        d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"
      >
        <animateTransform
          attributeName="transform"
          dur="10s"
          repeatCount="indefinite"
          type="rotate"
          values="-5 32 32; 15 32 32; -5 32 32"
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

export default ClearNight
