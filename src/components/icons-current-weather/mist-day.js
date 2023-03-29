const MistDay = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      width={150}
    >
      <defs>
        <linearGradient
          id="a"
          x1="27.5"
          x2="36.5"
          y1="17.21"
          y2="32.79"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#d4d7dd" />
          <stop offset=".45" stop-color="#d4d7dd" />
          <stop offset="1" stop-color="#bec1c6" />
        </linearGradient>
        <linearGradient id="b" y1="24.21" y2="39.79" href="#a" />
        <linearGradient id="c" y1="31.21" y2="46.79" href="#a" />
      </defs>
      <path
        fill="none"
        stroke="url(#a)"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="3"
        d="M17 25h30"
      >
        <animateTransform
          attributeName="transform"
          begin="0s"
          dur="5s"
          repeatCount="indefinite"
          type="translate"
          values="-4 0; 4 0; -4 0"
        />
      </path>
      <path
        fill="none"
        stroke="url(#b)"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="3"
        d="M17 32h30"
      >
        <animateTransform
          attributeName="transform"
          begin="-2s"
          dur="5s"
          repeatCount="indefinite"
          type="translate"
          values="-3 0; 3 0; -3 0"
        />
      </path>
      <path
        fill="none"
        stroke="url(#c)"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="3"
        d="M17 39h30"
      >
        <animateTransform
          attributeName="transform"
          begin="-4s"
          dur="5s"
          repeatCount="indefinite"
          type="translate"
          values="-4 0; 4 0; -4 0"
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

export default MistDay
