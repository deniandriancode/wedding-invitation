import { useEffect } from "react";

        //<audio tablist="1" controls id="backsound" className="w-0 h-0" muted={false} loop>
            //<source src="/src/assets/qaf.m4a" type="audio/mpeg"></source>
        //</audio>
function AudioBackground() {
        document.addEventListener("DOMContentLoaded", () => {
            console.log(123123);
        });
    useEffect(() => {
        let audioBG = document.querySelector("#backsound");
    }, []);
    return (
        <video id="backsound" src="/src/assets/qaf.m4a" muted loop type="audio/mpeg" controls></video>
    );
}

export default AudioBackground;
