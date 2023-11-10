

const MusicButton = ({ theme, svgText}) => {
    let fill;
    let text;
    if (theme === "light") {
        text = "white";
        fill = "bg-[#2B2B2B]";
    } else {
        text = "#2B2B2B";
        fill = "bg-white";
    }

    const clickUrl = () => {
        window.open("https://www.youtube.com/@ACLURecords", "_blank");
    }
    
    return (
        <button className={`flex px-10 py-4 justify-center items-center gap-4 ${fill} text-[${text}] font-black md:text-2xl sm:text-base rounded-md`} onClick={clickUrl}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35.706032" height="25" x="0" y="0" viewBox="0 0 35.706032 25">
                <g id="g5" transform="scale(0.29412)">
                    <path id="path7" fill="#fff" fill-opacity="1" d="M118.9 13.3c-1.4-5.2-5.5-9.3-10.7-10.7C98.7 0 60.7 0 60.7 0s-38 0-47.5 2.5C8.1 3.9 3.9 8.1 2.5 13.3 0 22.8 0 42.5 0 42.5s0 19.8 2.5 29.2C3.9 76.9 8 81 13.2 82.4 22.8 85 60.7 85 60.7 85s38 0 47.5-2.5c5.2-1.4 9.3-5.5 10.7-10.7 2.5-9.5 2.5-29.2 2.5-29.2s.1-19.8-2.5-29.3z"/>
                    <path id="polygon9" fill="#282828" d="M80.2 42.5 48.6 24.3v36.4z"/>
                </g>
            </svg>
            {svgText}
            
        </button>
    )
}



export default MusicButton