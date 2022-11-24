import { useEffect } from "react";

        //<audio tablist="1" controls id="backsound" className="w-0 h-0" muted={false} loop>
            //<source src="/src/assets/qaf.m4a" type="audio/mpeg"></source>
        //</audio>
function AudioBackground() {
    useEffect(() => {
        const activityEvents = [
            'mousedown', 'mousemove', 'keydown',
            'scroll', 'touchstart'
        ];

        for (let i in activityEvents) {
            document.addEventListener(activityEvents[i], () => {
                document.querySelector("#backsound").play();
            });
        }
    }, []);
    return (
        <audio id="backsound" autoPlay loop controls className="fixed w-0 h-0">
            <source src="/src/assets/qaf.m4a" type="audio/mpeg"></source>
        </audio>
    );
}

export default AudioBackground;
