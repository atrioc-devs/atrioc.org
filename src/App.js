import { useAudio } from "./hooks/useAudio";

import DiscordButton from "./components/DiscordButton";
import YoutubeButton from "./components/YoutubeButton";
import MoooAudio from "./assets/mooo_audio.wav";

const Footer = () => {
  return (
    <div className="absolute flex right-0 bottom-0 flex-col items-center w-full bg-white p-8">
      <div className="max-w-5xl w-full">
        <div className="flex justify-between items-center">
          <img
            class="Emote_emote__Lckjz"
            src="https://cdn.betterttv.net/emote/5ff10db95ae5852e4154a2c3/3x.webp"
            alt="MOOOO, 3x"
          />
          <p className="hidden sm:text-5xl md:block font-black text-6xl tracking-tighter text-[#2B2B2B]">
            “KEEP ON MOOING”
          </p>
          <div className="flex flex-col items-center gap-2">
            <svg
              width="181"
              height="64"
              viewBox="0 0 181 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M79.2605 37.7831V42.4097C79.2605 46.2651 77.904 48 74.0281 48H72.0902C68.2143 48 66.8578 46.0722 66.8578 42.4097V21.5903C66.8578 17.7349 68.2143 16 72.0902 16H74.0281C77.904 16 79.2605 17.9278 79.2605 21.5903V26.2169H94.9576V37.7831H79.2605ZM21.1232 38.3615L25.7742 12.9157H26.937L31.5879 38.3615H21.1232ZM0 62.6506H16.666L18.6039 51.8554H34.3009L36.2389 62.6506H53.4863L51.3545 52.4337H52.1298C54.8428 59.9518 61.0442 64 71.5089 64H73.4467C87.2059 64 93.9886 56.8675 94.3761 44.7228H95.3451V62.6506H135.46V51.4699H136.041C139.142 59.9518 145.731 64 156.195 64H158.52C173.249 64 181 56.4819 181 42.024V1.3494H163.366V42.7952C163.366 46.2651 162.009 48.1928 158.327 48.1928H156.39C152.513 48.1928 151.351 46.2651 151.351 42.7952V1.3494H133.716V46.0722H112.592V1.3494H94.9576V19.2772H93.9886C93.9886 7.51807 87.7872 0 73.8342 0H71.1212C56.0056 0 49.2229 7.71085 49.2229 21.5903V42.2169C49.2229 42.9879 49.2229 43.7591 49.2229 44.5301H48.6415L40.6961 1.3494H12.7902L0 62.6506Z"
                fill="#2B2B2B"
              />
            </svg>
            <div className="flex items-center gap-2">
              <p className="text-[#2B2B2B] leading-trim text-cap font-black text-6xl max-sm:text-5xl tracking-tight">
                © 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Content = ({ toggle }) => {
  return (
    <div className="w-full pb-24">
      <div className="max-w-[750px]">
        <div className="flex flex-col items-start gap-4 w-full">
          <p className="text-6xl font-black max-sm:text-5xl">
            DEFEND THE RIGHTS OF ALL CHATTERS GLOBALLY
          </p>
          <p className="text-2xl font-black max-sm:text-1xl">
            Atrioc Chat Labor Union's goal is simple. Criminal justice,
            chatter's right to message freely, and chatter's right to vote -
            these are crucial issues, and we're standing up for our freedoms
            against a corrupt streamer. Join today and fuel our fight back in
            Twitch chat, Discord channels, and YouTube comment sections.
          </p>
          <div class="button-container">
            <DiscordButton theme="light" toggle={toggle} svgText="DISCORD" />
            <YoutubeButton theme="light" svgText="ATRIARCHY STUDIOS" link="https://www.youtube.com/@ACLURecords"/>
            <YoutubeButton theme="light" svgText="IMM" link="https://www.youtube.com/channel/UCxIkgQxxh_hw-ZVJyAUuNlw"/>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [toggle] = useAudio(MoooAudio);

  return (
    <div className="relative flex flex-col items-center w-full min-h-screen h-full overflow-hidden p-2">
      <div className="absolute top-0 right-0 -z-50">
        <svg
          width="565"
          height="1266"
          viewBox="0 0 565 1266"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M436.903 465.402C432.443 498.066 420.73 523.98 397.565 546.477C390.28 553.264 383.419 560.468 377.019 568.049C362.327 586.221 362.497 600.516 379.918 616.555C392.005 627.681 406.42 636.545 420.304 645.7C453.419 667.517 476.729 696.199 485.233 734.547C490.464 758.142 490.988 781.902 476.448 804.118C481.911 747.055 451.106 710.897 405.723 682.546C391.016 673.356 376.32 664.095 362.187 654.111C301.138 610.981 298.191 584.892 344.189 527.066C356.591 511.473 370.387 492.665 372.249 474.258C377 427.262 395.869 386.694 417.059 345.403C435.78 308.922 453.436 270.527 462.381 231.015C478.496 159.829 462.098 89.416 443.983 20.0118C442.469 14.2094 441.044 8.38256 438.945 0C478.225 10.8323 490.741 38.283 499.392 68.7011C529.553 174.713 520.068 276.565 468.65 375.32C453.959 403.506 441.126 434.485 436.903 465.402Z"
            fill="#604A8F"
          />
          <path
            d="M380.197 308.002C379.406 308.083 378.612 308.121 377.817 308.119C368.844 308.119 356.551 304.654 339.786 296.298C322.852 287.87 299.784 297.27 304.586 346.027C305.971 360.089 308.053 374.068 309.913 388.863C287.816 379.4 271.924 361.273 262.748 341.498C259.444 342.28 256.008 342.382 252.661 341.797C249.315 341.211 246.132 339.951 243.317 338.098C240.502 336.245 238.118 333.84 236.319 331.038C234.52 328.236 233.345 325.099 232.871 321.829C232.396 318.559 232.632 315.229 233.564 312.054C234.495 308.878 236.101 305.927 238.279 303.39C240.457 300.854 243.157 298.789 246.207 297.328C249.257 295.867 252.588 295.043 255.985 294.908C257.879 288.511 260.876 282.472 264.849 277.048C257.594 274.511 251.561 269.461 247.907 262.867C244.254 256.274 243.237 248.602 245.054 241.326C246.87 234.049 251.39 227.68 257.747 223.443C264.104 219.205 271.849 217.397 279.494 218.366C280.916 211.867 284.397 205.962 289.45 201.482C294.504 197.001 300.875 194.17 307.67 193.385C314.464 192.6 321.342 193.901 327.336 197.106C333.331 200.31 338.142 205.257 341.093 211.251C346.715 206.669 353.758 204.05 361.094 203.817C368.429 203.583 375.634 205.747 381.552 209.963C387.471 214.178 391.761 220.2 393.736 227.065C395.71 233.93 395.254 241.239 392.442 247.822C398.873 250.927 404.074 256 407.244 262.257C410.414 268.515 411.378 275.612 409.985 282.454C408.593 289.296 404.923 295.503 399.54 300.12C394.158 304.737 387.361 307.506 380.197 308.002Z"
            fill="#604A8F"
          />
          <path
            d="M1.50277 834.347C14.1105 814.741 30.8551 786.573 41.8803 766.359C52.5844 746.739 50.2756 733.104 46.1136 717.981C68.2333 719.426 80.4297 737.482 89.8724 746.547C135.93 664.488 170.201 576.692 191.733 485.605C202.53 440.36 243.491 405.917 290.02 401.535C294.873 401.079 299.971 403.084 310.822 404.961C295.29 414.079 285.472 419.497 276.014 425.458C224.003 458.248 209.061 497.724 232.409 553.102C245.046 583.074 262.2 611.721 280.67 638.807C326.005 705.286 375.197 769.324 419.292 836.538C477.682 925.544 527.75 1018.9 553.962 1122.39C562.836 1157.43 568.654 1193.15 559.209 1229.11C551.706 1257.65 535.36 1267.91 502.354 1264.78C498.622 1094.47 404.596 963.328 314.975 833.835C303.698 911.508 295.395 990.261 279.778 1067.62C271.382 1109.27 252.468 1149.41 234.42 1188.54C222.549 1214.28 199.451 1219.65 177.606 1209.3C226.205 1021.51 238.982 832.643 205.279 641.25C199.415 647.654 196.376 654.846 192.113 661.27C169.433 695.459 146.967 729.792 123.767 763.64C134.343 767.309 142.849 769.479 142.849 769.479C139.464 786.668 126.231 791.684 106.554 788.433C95.3818 803.417 76.9603 809.246 56.7778 804.658C53.8164 808.938 50.8633 813.218 47.8661 817.478C38.2367 831.188 18.0269 844.38 -9.09124e-06 839.951C0.261721 838.03 0.766462 836.148 1.50277 834.347Z"
            fill="#604A8F"
          />
        </svg>
      </div>
      <div className="max-w-5xl w-full pt-6 pb-60">
        <div className="flex justify-between items-center pb-32">
          <svg
            width="181"
            height="64"
            viewBox="0 0 181 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M79.2605 37.7831V42.4097C79.2605 46.2651 77.904 48 74.0281 48H72.0902C68.2143 48 66.8578 46.0722 66.8578 42.4097V21.5903C66.8578 17.7349 68.2143 16 72.0902 16H74.0281C77.904 16 79.2605 17.9278 79.2605 21.5903V26.2169H94.9576V37.7831H79.2605ZM21.1232 38.3615L25.7742 12.9157H26.937L31.5879 38.3615H21.1232ZM0 62.6506H16.666L18.6039 51.8554H34.3009L36.2389 62.6506H53.4863L51.3545 52.4337H52.1298C54.8428 59.9518 61.0442 64 71.5089 64H73.4467C87.2059 64 93.9886 56.8675 94.3761 44.7228H95.3451V62.6506H135.46V51.4699H136.041C139.142 59.9518 145.731 64 156.195 64H158.52C173.249 64 181 56.4819 181 42.024V1.3494H163.366V42.7952C163.366 46.2651 162.009 48.1928 158.327 48.1928H156.39C152.513 48.1928 151.351 46.2651 151.351 42.7952V1.3494H133.716V46.0722H112.592V1.3494H94.9576V19.2772H93.9886C93.9886 7.51807 87.7872 0 73.8342 0H71.1212C56.0056 0 49.2229 7.71085 49.2229 21.5903V42.2169C49.2229 42.9879 49.2229 43.7591 49.2229 44.5301H48.6415L40.6961 1.3494H12.7902L0 62.6506Z"
              fill="white"
            />
          </svg>
          <div className="max-sm:hidden">
          <DiscordButton theme="dark" toggle={toggle} svgText="DISCORD" />
          </div>
        </div>
        <Content toggle={toggle} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
