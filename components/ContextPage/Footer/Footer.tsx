"use client";

// svg
import { EarthSvg } from "@/assets/svg/EarthSvg";
// style
import "./Footer.scss";
import { useSwitchContext } from "@/components/context/switchProvider";
import { HeroTitle } from "../FirstView/HeroTitle/HeroTitle";

export const Footer = () => {

  const { isSwitchOn } = useSwitchContext();

  return (
    <div className={`footer ${isSwitchOn ? "isOn" : ""}`}>
      <EarthSvg />
      {isSwitchOn && 
      <HeroTitle />
      }
    </div>
  );
};


{/* <div className="footer">
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div> */}