import React from 'react'

const GradientBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1440 809"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full object-cover"
                preserveAspectRatio="xMidYMid slice"
            >
                <g filter="url(#filter0_f_90_221)">
                    <path
                        d="M1440 68.0001L0 68.0006V248.585C485.903 447.932 572.963 741.002 1100.52 741.001C1242.6 741.001 1353.91 730.012 1440 710.841V68.0001Z"
                        fill="url(#paint0_radial_90_221)"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_f_90_221"
                        x="-68"
                        y="0"
                        width="1576"
                        height="809.001"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="34" result="effect1_foregroundBlur_90_221" />
                    </filter>
                    <radialGradient
                        id="paint0_radial_90_221"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(740.969 -362.899) rotate(69.3397) scale(1290.58 7625.52)"
                    >
                        <stop offset="0.223958" stopColor="#CCFF02" />
                        <stop offset="0.651042" stopColor="#59FFCD" stopOpacity="0" />
                        <stop offset="1" stopColor="#161616" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    )
}

export default GradientBackground
