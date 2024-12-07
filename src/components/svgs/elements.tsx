import React from "react";

export const elem = ({
  width = "100%", // Making width responsive by default
  height = "auto",
}: {
  height?: string;
  width?: string;
}) => {
  return (
    <>
      <svg
        height={height}
        width={width}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 350 350"
      >
        <g id="XMLID_972_">
          <path
            id="XMLID_973_"
            fill="#ACABB1"
            d="M225,90c0,8.284-6.716,15-15,15H60c-8.284,0-15-6.716-15-15l0,0
		c0-8.284,6.716-15,15-15h150C218.284,75,225,81.716,225,90L225,90z"
          />
          <path
            id="XMLID_974_"
            fill="#BD3C1A"
            d="M95,75H60c-8.284,0-15,6.716-15,15s6.716,15,15,15h35V75z"
          />
          <path
            id="XMLID_975_"
            fill="#CDCDD0"
            d="M215,90l-5-35c-19.33,0-35,15.67-35,35s15.67,35,35,35L215,90z"
          />
          <polygon
            id="XMLID_976_"
            fill="#FFDA44"
            points="265,225 205,225 205,55 235,55 265,145 	"
          />
          <path
            id="XMLID_977_"
            fill="#FFDA44"
            d="M257.94,260c4.546-10.759,7.06-22.586,7.06-35c0-49.706-40.294-90-90-90
		s-90,40.294-90,90c0,12.414,2.514,24.241,7.06,35H257.94z"
          />
          <path
            id="XMLID_978_"
            fill="#FFAD41"
            d="M175,260c0-22.923,0-45,0-125c-49.706,0-90,40.294-90,90
		c0,12.414,2.514,24.241,7.06,35H175z"
          />
          <path
            id="XMLID_979_"
            fill="#FFE98F"
            d="M223.719,260C230.81,250.147,235,238.066,235,225c0-33.137-26.863-60-60-60
		s-60,26.863-60,60c0,13.066,4.189,25.147,11.281,35H223.719z"
          />
          <circle id="XMLID_980_" fill="#FFDA44" cx="175" cy="225" r="30" />
          <path
            id="XMLID_981_"
            fill="#FFAD41"
            d="M175,255c-16.568,0-30-13.432-30-30s13.432-30,30-30"
          />
          <circle id="XMLID_982_" fill="#BD3C1A" cx="85" cy="225" r="40" />
          <circle id="XMLID_983_" fill="#FF5023" cx="265" cy="225" r="40" />
          <path
            id="XMLID_984_"
            fill="#91DC5A"
            d="M335,225H15c-8.284,0-15,6.716-15,15s6.716,15,15,15h10c0,22.091,17.909,40,40,40
		h220c22.091,0,40-17.909,40-40h10c8.284,0,15-6.716,15-15S343.284,225,335,225z"
          />
          <path
            id="XMLID_985_"
            fill="#64C37D"
            d="M175,225H15c-8.284,0-15,6.716-15,15s6.716,15,15,15h10c0,22.091,17.909,40,40,40
		h110V225z"
          />
          <path
            id="XMLID_986_"
            fill="#FFE98F"
            d="M235,55v95c0,8.284,6.716,15,15,15s15-6.716,15-15V55H235z"
          />
        </g>
      </svg>
    </>
  );
};

export const ButtonSvg = ({
  height = "auto",
  width = "100%",
}: {
  height: string;
  width: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 436 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="cursor-pointer fill-black transition duration-500"
    // fill="#E2582D"
  >
    <path d="M0 28L33.5 0H436V62H0V28Z" />
    <path
      d="M165.866 38.27C164.876 38.27 163.952 38.117 163.094 37.811C162.242 37.505 161.495 37.067 160.853 36.497C160.211 35.927 159.71 35.24 159.35 34.436C158.99 33.626 158.81 32.72 158.81 31.718C158.81 30.716 158.981 29.81 159.323 29C159.671 28.19 160.157 27.497 160.781 26.921C161.405 26.345 162.134 25.904 162.968 25.598C163.802 25.286 164.708 25.13 165.686 25.13C166.136 25.13 166.598 25.166 167.072 25.238C167.546 25.31 168.017 25.43 168.485 25.598C168.959 25.766 169.412 25.997 169.844 26.291L168.845 28.118C168.395 27.83 167.912 27.617 167.396 27.479C166.88 27.335 166.343 27.263 165.785 27.263C165.083 27.263 164.45 27.365 163.886 27.569C163.322 27.773 162.842 28.07 162.446 28.46C162.05 28.844 161.747 29.312 161.537 29.864C161.327 30.41 161.222 31.028 161.222 31.718C161.222 32.684 161.426 33.503 161.834 34.175C162.248 34.847 162.812 35.357 163.526 35.705C164.246 36.047 165.068 36.218 165.992 36.218C166.418 36.218 166.808 36.179 167.162 36.101C167.516 36.017 167.81 35.924 168.044 35.822V33.05H165.281V31.142H170.123V37.208C169.775 37.424 169.349 37.613 168.845 37.775C168.347 37.937 167.831 38.06 167.297 38.144C166.769 38.228 166.292 38.27 165.866 38.27ZM173.128 38V25.4H181.507V27.452H175.468V30.503H180.634V32.42H175.468V35.93H181.57V38H173.128ZM186.621 38V27.542H183.138V25.4H192.453V27.542H188.97V38H186.621ZM203.013 38.27C202.113 38.27 201.234 38.141 200.376 37.883C199.524 37.619 198.804 37.244 198.216 36.758L199.35 34.985C199.638 35.249 199.983 35.477 200.385 35.669C200.787 35.861 201.213 36.011 201.663 36.119C202.119 36.221 202.572 36.272 203.022 36.272C203.772 36.272 204.381 36.134 204.849 35.858C205.317 35.576 205.551 35.171 205.551 34.643C205.551 34.229 205.389 33.884 205.065 33.608C204.741 33.326 204.144 33.062 203.274 32.816L202.05 32.465C200.82 32.117 199.929 31.652 199.377 31.07C198.831 30.482 198.558 29.762 198.558 28.91C198.558 28.352 198.672 27.842 198.9 27.38C199.128 26.918 199.449 26.519 199.863 26.183C200.283 25.847 200.778 25.589 201.348 25.409C201.918 25.229 202.539 25.139 203.211 25.139C204.093 25.139 204.912 25.268 205.668 25.526C206.424 25.778 207.042 26.123 207.522 26.561L206.361 28.28C206.109 28.046 205.812 27.842 205.47 27.668C205.128 27.494 204.759 27.362 204.363 27.272C203.967 27.176 203.568 27.128 203.166 27.128C202.692 27.128 202.278 27.194 201.924 27.326C201.57 27.458 201.294 27.647 201.096 27.893C200.898 28.139 200.799 28.439 200.799 28.793C200.799 29.051 200.865 29.276 200.997 29.468C201.135 29.66 201.369 29.837 201.699 29.999C202.029 30.155 202.485 30.32 203.067 30.494L204.345 30.872C205.551 31.226 206.43 31.682 206.982 32.24C207.534 32.792 207.81 33.512 207.81 34.4C207.81 35.162 207.618 35.834 207.234 36.416C206.85 36.998 206.298 37.454 205.578 37.784C204.864 38.108 204.009 38.27 203.013 38.27ZM212.514 38V27.542H209.031V25.4H218.346V27.542H214.863V38H212.514ZM218.13 38L222.963 25.4H225.573L230.505 38H227.868L226.797 35.147H221.73L220.695 38H218.13ZM222.306 33.158H226.203L224.223 28.046L222.306 33.158ZM232.243 38V25.4H237.121C238.015 25.4 238.792 25.553 239.452 25.859C240.112 26.159 240.622 26.591 240.982 27.155C241.342 27.719 241.522 28.391 241.522 29.171C241.522 29.795 241.393 30.344 241.135 30.818C240.877 31.292 240.52 31.685 240.064 31.997C239.614 32.309 239.092 32.528 238.498 32.654L242.161 38H239.353L236.095 33.068H234.583V38H232.243ZM234.583 31.151H236.779C237.529 31.151 238.114 30.995 238.534 30.683C238.954 30.365 239.164 29.903 239.164 29.297C239.164 28.667 238.972 28.187 238.588 27.857C238.204 27.527 237.64 27.362 236.896 27.362H234.583V31.151ZM246.668 38V27.542H243.185V25.4H252.5V27.542H249.017V38H246.668ZM254.532 38V25.4H262.911V27.452H256.872V30.503H262.038V32.42H256.872V35.93H262.974V38H254.532ZM265.695 38V25.4H269.763C271.029 25.4 272.148 25.667 273.12 26.201C274.092 26.735 274.851 27.476 275.397 28.424C275.943 29.372 276.216 30.467 276.216 31.709C276.216 32.633 276.06 33.482 275.748 34.256C275.436 35.024 274.992 35.687 274.416 36.245C273.846 36.803 273.165 37.235 272.373 37.541C271.587 37.847 270.717 38 269.763 38H265.695ZM268.035 35.822H269.547C270.177 35.822 270.75 35.729 271.266 35.543C271.782 35.357 272.226 35.087 272.598 34.733C272.976 34.379 273.264 33.947 273.462 33.437C273.666 32.927 273.768 32.351 273.768 31.709C273.768 30.839 273.591 30.098 273.237 29.486C272.889 28.868 272.397 28.397 271.761 28.073C271.131 27.743 270.393 27.578 269.547 27.578H268.035V35.822Z"
      fill="white"
    />
  </svg>
);