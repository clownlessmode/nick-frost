export default function Lighting({...props}) {
    return (
        <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[39px] sm:size-[82px] md:size-[39px] lg:size-[52px] cursor-pointer overflow-visible" {...props}>
            <foreignObject x="-12.1721" y="-11.8733" width="63.1736" height="63.1739">
                <div xmlns="http://www.w3.org/1999/xhtml" className="w-full h-full"></div>
            </foreignObject>
            <circle data-figma-bg-blur-radius="12.1721" cx="19.4147" cy="19.7135" r="19.2637" stroke="white" stroke-opacity="0.35" stroke-width="0.302049" className="origin-center pulse-light-out"/>
            <foreignObject x="-5.70046" y="-5.40163" width="50.2305" height="50.2305">
                <div xmlns="http://www.w3.org/1999/xhtml" className="w-full h-full lightingPath"></div>
            </foreignObject>
            <g data-figma-bg-blur-radius="12.1721">
                <circle cx="19.4148" cy="19.7136" r="12.9431" fill="black" fill-opacity="0.1"/>
                <circle cx="19.4148" cy="19.7136" r="12.7921" stroke="white" stroke-opacity="0.35" stroke-width="0.302049"/>
            </g>
            <g filter="url(#filter2_d_292_4946)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.052 14.5568C20.1242 14.5819 20.1868 14.6291 20.2311 14.6918C20.2754 14.7545 20.2992 14.8296 20.2991 14.9066V18.9744H22.4995C22.5683 18.9744 22.6357 18.9939 22.6941 19.0308C22.7524 19.0676 22.7992 19.1202 22.8293 19.1826C22.8594 19.245 22.8714 19.3147 22.8641 19.3837C22.8567 19.4527 22.8303 19.5182 22.7878 19.5727L18.7537 24.7499C18.7066 24.8104 18.642 24.8545 18.5688 24.8761C18.4957 24.8978 18.4176 24.8959 18.3456 24.8708C18.2735 24.8456 18.211 24.7985 18.1668 24.7359C18.1226 24.6732 18.0988 24.5983 18.0988 24.5214V20.4536H15.8984C15.8296 20.4536 15.7622 20.4341 15.7039 20.3972C15.6455 20.3604 15.5987 20.3078 15.5686 20.2454C15.5385 20.183 15.5265 20.1133 15.5338 20.0443C15.5412 19.9753 15.5676 19.9098 15.6102 19.8553L19.6442 14.6781C19.6912 14.6176 19.7558 14.5735 19.8289 14.5517C19.9019 14.53 19.9799 14.5317 20.052 14.5568Z" fill="#1C8F74"/>
            </g>
            <defs>
                <clipPath id="bgblur_0_292_4946_clip_path" transform="translate(5.70046 5.40163)">
                    <circle cx="19.4148" cy="19.7136" r="12.9431"/>
                </clipPath>
                <filter id="filter2_d_292_4946" x="4.41452" y="3.4194" width="29.5689" height="32.5889" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="5.55861"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.239216 0 0 0 0 0.819608 0 0 0 0 0.686275 0 0 0 0.7 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_292_4946"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_292_4946" result="shape"/>
                </filter>
            </defs>
        </svg>
    )
}
