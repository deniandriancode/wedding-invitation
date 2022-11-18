"use strict";

function getTimeRemaining(deadline) {
	const total = Date.parse(deadline) - Date.parse(new Date());
	const seconds = Math.floor( (total/1000) % 60 );
	const minutes = Math.floor( (total/1000/60) % 60 );
	const hours = Math.floor( (total/(1000*60*60)) % 24 );
	const days = Math.floor( total/(1000*60*60*24) );
	return {
		total,
		seconds,
		minutes,
		hours,
		days
	};
}

export { getTimeRemaining };
