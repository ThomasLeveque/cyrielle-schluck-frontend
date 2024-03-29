import React from 'react';

const PreviousButton: React.FC<React.SVGAttributes<SVGElement>> = React.memo((svgProps) => {
  return (
    <svg width="25px" height="61px" viewBox="0 0 25 61" {...svgProps}>
      <g id="Mobile" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Projet-Mobile-UX-+-UI-(Noon)" transform="translate(0.000000, -2431.000000)">
          <g
            id="Group-8-Copy"
            transform="translate(12.500000, 2461.576370) scale(-1, 1) translate(-12.500000, -2461.576370) translate(0.000000, 2431.576370)"
          >
            <path
              d="M25,-5.32907052e-14 L25,59.3689088 C8.46262378,50.3853816 0.129791922,40.5332607 0.00150444165,29.8125462 C0,29.7668936 0.000120128539,29.7258321 0.000360385618,29.6847833 C0.00012142172,29.6435175 0,29.6022356 0,29.5609409 C0.00244941051,29.4772958 0.00384785313,29.3979668 0.00569606513,29.3186855 C0.00205342095,29.187626 1.13686838e-12,29.0558677 1.13686838e-12,28.9236297 C1.13686838e-12,27.8734327 0.129511206,26.8534846 0.373433449,25.8788857 C2.16248414,16.5731215 10.3712271,7.94672485 25,-5.32907052e-14 L25,-5.32907052e-14 Z"
              id="Combined-Shape"
              fill="#9B9B9B"
              opacity="0.198102679"
            ></path>
            <polyline
              id="Path-2"
              stroke="#161616"
              strokeLinecap="round"
              points="13 24.4236297 16.65944 28.9498868 13 33.4761438"
            ></polyline>
          </g>
        </g>
      </g>
    </svg>
  );
});

export default PreviousButton;
