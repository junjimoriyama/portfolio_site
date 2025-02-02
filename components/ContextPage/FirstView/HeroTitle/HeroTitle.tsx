// style
import "./HeroTitle.scss";

export const HeroTitle = () => {

  // const titleSvg = useRef<(SVGPathElement | null)[]>(Array(15).fill(null));
  return (
    <div className="hero_title">
      <div className="hero_name">
        <span className="hero_name_word">J</span>
        <span className="hero_name_word">U</span>
        <span className="hero_name_word">N</span>
        <span className="hero_name_word">J</span>
        <span className="hero_name_word">I</span>
        <span className="hero_name_word">&nbsp;</span>
        <span className="hero_name_word">M</span>
        <span className="hero_name_word">O</span>
        <span className="hero_name_word">R</span>
        <span className="hero_name_word">I</span>
        <span className="hero_name_word">Y</span>
        <span className="hero_name_word">A</span>
        <span className="hero_name_word">M</span>
        <span className="hero_name_word">A</span>
      </div>
      <div className="svg_title">
        <div className="upper">
          {/* P */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 43 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path path1"
              d="M5 14V13.5H4.5H0.5V0.5H32C33.7916 0.5 36.2597 1.7786 38.2518 4.40235C40.2278 7.0049 41.6962 10.8897 41.5004 15.9808C41.3081 20.9789 38.6368 24.2601 35.3325 26.3526C32.0113 28.4557 28.0728 29.3382 25.4688 29.501L25 29.5303V30V36H0.5V23.5H4.5H5V23V14Z"
              fill="white"
              stroke="#fff"
              // ref={titleSvg[0]}
            ></path>
            <mask id="path-2-inside-1_271_171" fill="white">
              <path d="M24.5 20C24.1 20 24 19.6667 24 19.5V11C24 10.8333 24.1 10.5 24.5 10.5C24.9 10.5 25 10.9076 25 11V19.5C25 19.6667 24.9 20 24.5 20Z"></path>
            </mask>
            <path
              className="path path2"
              d="M24.5 20C24.1 20 24 19.6667 24 19.5V11C24 10.8333 24.1 10.5 24.5 10.5C24.9 10.5 25 10.9076 25 11V19.5C25 19.6667 24.9 20 24.5 20Z"
              fill="white"
              stroke="#fff"
              strokeWidth="2"
              // ref={titleSvg[1]}
            ></path>
            <path
              d="M23 19.5C23 19.7434 23.0648 20.0861 23.2885 20.3968C23.5489 20.7585 23.9741 21 24.5 21V19C24.5428 19 24.6213 19.01 24.7116 19.0566C24.8011 19.1028 24.8674 19.167 24.9115 19.2282C24.953 19.2858 24.9732 19.3379 24.9834 19.3737C24.9932 19.4081 25 19.4485 25 19.5H23ZM24.5 21C25.0259 21 25.4511 20.7585 25.7115 20.3968C25.9352 20.0861 26 19.7434 26 19.5H24C24 19.4485 24.0068 19.4081 24.0166 19.3737C24.0268 19.3379 24.047 19.2858 24.0885 19.2282C24.1326 19.167 24.1989 19.1028 24.2884 19.0566C24.3787 19.01 24.4572 19 24.5 19V21ZM26 19.5V11H24V19.5H26ZM26 11C26 10.752 25.9142 10.4361 25.7342 10.1638C25.5179 9.83667 25.1081 9.5 24.5 9.5V11.5C24.421 11.5 24.3229 11.4773 24.2297 11.421C24.1433 11.3688 24.0923 11.3068 24.0658 11.2668C24.0404 11.2284 24.0283 11.1966 24.0217 11.1747C24.0179 11.1625 24.0138 11.1464 24.01 11.1252C24.0074 11.1103 24 11.0655 24 11H26ZM24.5 9.5C23.9741 9.5 23.5489 9.74153 23.2885 10.1032C23.0648 10.4139 23 10.7566 23 11H25C25 11.0515 24.9932 11.0919 24.9834 11.1263C24.9732 11.1621 24.953 11.2142 24.9115 11.2718C24.8674 11.333 24.8011 11.3972 24.7116 11.4434C24.6213 11.49 24.5428 11.5 24.5 11.5V9.5ZM23 11V19.5H25V11H23Z"
              fill="#0a0a0a"
              mask="url(#path-2-inside-1_271_171)"
            ></path>

            {/* O */}
          </svg>

          {/* O */}
          <svg
            width="60"
            height="60"
            viewBox="-1 -1 45 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              className="ellipse"
              cx="21"
              cy="18.5"
              rx="21"
              ry="18.5"
              fill="#80B9AD"
              stroke="#fff"
            ></ellipse>
            {/* 内側の円 */}
            <path
              className="path path3"
              paintOrder="stroke"
              d="M21.5 27C21 27 20.5 26.3684 20.5 26.0526V9.94737C20.5 9.63158 21 9 21.5 9C22 9 22.5 9.63158 22.5 9.94737V26.0526C22.5 26.3684 22 27 21.5 27Z"
              fill="white"
              stroke="#fff"
              strokeWidth="2"
              // ref={titleSvg[2]}
            ></path>
          </svg>

          {/* R */}
          <svg
            width="58"
            height="58"
            version="1.1"
            viewBox="0 0 141.7 141.7"
            transform="translate(0, -4)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path path4"
              d="M140.2,96.7v43.1h-68.5l-30.7-43.1h-4.1l30.7,43.1H2.8v-43.1h14.2v-28.2H2.8V25.6h60.5l32.1,42.9h4.1l-32.1-42.9h19.2c32.5,0,48.6,19.6,48.6,39s-6.2,25.1-19.1,32.1h24Z"
              fill="#fff"
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="4"
              // ref={titleSvg[3]}
            ></path>
          </svg>

          {/* T */}
          <svg
            width="55"
            height="55"
            viewBox="0 0 42 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path path5"
              d="M9.15385 6.59589H8.65385V7.09589V18.2534H0.5V0.5H41.5V18.2534H32.8077V7.09589V6.59589H32.3077H31.2308H30.7308V7.09589V22.8082V23.3082H31.2308H34.5V36.5H6.42308V23.3082H10.2308H10.7308V22.8082V7.09589V6.59589H10.2308H9.15385Z"
              fill="#fff"
              stroke="#fff"
              // ref={titleSvg[4]}
            ></path>
          </svg>

          {/* F */}
          <svg
            width="55"
            height="55"
            version="1.1"
            viewBox="0 0 141.7 141.7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path path6"
              d="M20.1,89.9v-31.1H4.5V11.6h127.8v60.1h-24.6l-5.9-12.9h-14.4v3.1h12.7v45.8h-12.7v29.6H4.5v-47.4h15.6Z"
              fill="#fff"
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="4"
              // ref={titleSvg[5]}
            ></path>
          </svg>

          {/* O */}
          <svg
            width="60"
            height="60"
            viewBox="-1 -1 45 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 内側の円 */}
            <ellipse
              className="ellipse"
              cx="21"
              cy="18.5"
              rx="21"
              ry="18.5"
              fill="#80B9AD"
              stroke="#fff"
            ></ellipse>
            <path
              className="path path7"
              paintOrder="stroke"
              d="M21.5 27C21 27 20.5 26.3684 20.5 26.0526V9.94737C20.5 9.63158 21 9 21.5 9C22 9 22.5 9.63158 22.5 9.94737V26.0526C22.5 26.3684 22 27 21.5 27Z"
              fill="white"
              stroke="#fff"
              strokeWidth="2"
              // ref={titleSvg[6]}
            ></path>
          </svg>

          {/* L */}
          <svg
            width="53"
            height="53"
            version="1.1"
            viewBox="0 0 141.7 141.7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path path8"
              d="M96.1,56.4v32.2h2.2l9.3-21.6h25.1v70.8H4.8v-49.2h17.2v-32.2H4.8V7.4h108.4v49h-17.2Z"
              fill="#fff"
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="4"
              // ref={titleSvg[7]}
            ></path>
          </svg>

          {/* I */}
          <svg
            width="55"
            height="55"
            version="1.1"
            viewBox="0 0 111.5 141.7"
            transform="translate(-3, -2)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path path9"
              d="M5,91h14.2v-31.1H5V12.7h101.4v47.2h-14.2v31.1h14.2v47.4H5v-47.4Z"
              fill="#fff"
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="4"
              // ref={titleSvg[8]}
            ></path>
          </svg>

          {/* O */}
          <svg
            width="60"
            height="60"
            viewBox="-1 -1 45 39"
            fill="none"
            transform="translate(-4, 0)"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 内側の円 */}
            <ellipse
              className="ellipse"
              cx="21"
              cy="18.5"
              rx="21"
              ry="18.5"
              fill="#80B9AD"
              stroke="#fff"
            ></ellipse>
            <path
              className="path path10"
              paintOrder="stroke"
              d="M21.5 27C21 27 20.5 26.3684 20.5 26.0526V9.94737C20.5 9.63158 21 9 21.5 9C22 9 22.5 9.63158 22.5 9.94737V26.0526C22.5 26.3684 22 27 21.5 27Z"
              fill="white"
              stroke="#fff"
              strokeWidth="2"
              // ref={titleSvg[9]}
            ></path>
          </svg>
        </div>


        <div className="lower">
          {/* S */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 42 37"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path path11"
              d="M29.5993 6.19139H29.854L30.0037 5.98547L32.9124 1.98578H38.7844L38.7844 15.4718H36.3602L26.7914 9.93159L26.6752 9.8643H26.5409H26.0312H25.5312V10.3643V11.2989V11.5793L25.7704 11.7255C27.0543 12.5102 28.768 13.4851 30.581 14.5167C32.0049 15.3268 33.4901 16.1718 34.8766 16.9869C36.4638 17.92 37.9295 18.8181 39.0588 19.5961C39.6238 19.9854 40.0965 20.3391 40.4551 20.6477C40.8256 20.9665 41.0323 21.2021 41.1137 21.3514C41.4574 21.9815 41.5657 22.8356 41.4628 23.8478C41.3605 24.8537 41.0543 25.9676 40.624 27.0744C39.7597 29.2977 38.4319 31.4003 37.3999 32.4424C35.2574 34.6059 31.5681 36.4709 23.9903 36.4998C17.1829 36.5258 13.9561 33.3304 12.6726 31.5656L12.5228 31.3596H12.2682H11.2487H10.9671L10.8211 31.6005L8.41842 35.5653H2.57345V22.0793H4.49371L14.5759 27.6248L15.0156 27.8667L15.2559 27.4262L15.7656 26.4916L16.0119 26.04L15.5536 25.8066C13.2718 24.6445 9.79825 22.7151 6.799 20.7081C5.29844 19.704 3.92864 18.6884 2.8886 17.7464C2.36861 17.2754 1.93938 16.8302 1.61922 16.421C1.29543 16.0072 1.10384 15.6561 1.02663 15.3729C0.234644 12.4688 0.171978 9.48555 1.99378 6.41374C3.42509 4.00035 4.98888 2.4483 7.09905 1.54053C9.22711 0.625078 11.9685 0.339364 15.8047 0.582907C19.5679 0.821814 22.4295 1.73914 24.4639 2.81133C26.5111 3.89022 27.6934 5.11035 28.1409 5.93081L28.283 6.19139H28.5799H29.5993Z"
              fill="#fff"
              stroke="#fff"
              // ref={titleSvg[10]}
            ></path>
          </svg>

          {/* I */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            version="1.1"
            viewBox="0 0 111.5 141.7"
          >
            <path
              className="path path12"
              d="M5,91h14.2v-31.1H5V12.7h101.4v47.2h-14.2v31.1h14.2v47.4H5v-47.4Z"
              fill="#fff"
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="4"
              // ref={titleSvg[11]}
            ></path>
          </svg>

          {/* T */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 42 37"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path path13"
              d="M9.15385 6.59589H8.65385V7.09589V18.2534H0.5V0.5H41.5V18.2534H32.8077V7.09589V6.59589H32.3077H31.2308H30.7308V7.09589V22.8082V23.3082H31.2308H34.5V36.5H6.42308V23.3082H10.2308H10.7308V22.8082V7.09589V6.59589H10.2308H9.15385Z"
              fill="#fff"
              stroke="#fff"
              // ref={titleSvg[12]}
            ></path>
          </svg>

          {/* E */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 42 37"
            fill="#fff"
            transform="translate(5 0)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path path14"
              d="M5.47368 14.1918V13.6918H4.97368H0.5V0.5H41.5V17.2397H35.6151L32.8967 13.6957L32.7466 13.5H32.5H27.0789H26.5789V14V14.6986V15.1986H27.0789H30.4474V21.5491H27.0789H26.5789V22.0491V22.8082V23.3082H27.0789H32.0526H32.2697L32.4179 23.1496L35.5855 19.7603H41.5V36.5H0.5V23.3082H4.97368H5.47368V22.8082V14.1918Z"
              fill="#fff"
              stroke="#fff"
              // ref={titleSvg[13]}
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
