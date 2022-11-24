"use strict";
const activityEvents = [
    'mousedown', 'mousemove', 'keydown',
    'scroll', 'touchstart'
];

for (let i in activityEvents) {
    document.addEventListener(activityEvents[i], () => {

    });
}
