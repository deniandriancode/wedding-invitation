function getTwoDigit(num: number): string {
    if (num > 9) {
        return new String(num);
    }
    return new String("0" + num);
}


function getTimeRemaining(deadline: string): TimeRemainingType {
    const total = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
    return {
        seconds,
        minutes,
        hours,
        days
    };
}

export { getTimeRemaining, getTwoDigit };
