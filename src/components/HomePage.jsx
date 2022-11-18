import { useState, useEffect } from "react";
import { getTimeRemaining, getTwoDigit } from "../utils/date.js";

function HomePage(props) {
	const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
		"Juli", "Agustus", "September", "Oktober", "November", "Desember"
	];
	const eventDateString = "2023-03-13 09:00";
	const eventDate = new Date(eventDateString);

	const dayWeek = eventDate.getDate();
	const monthName = monthNames[eventDate.getMonth()];
	const yearNum = eventDate.getFullYear();
	const hourTime = getTwoDigit(eventDate.getHours());
	const minuteTime = getTwoDigit(eventDate.getMinutes());
	
	const remaining = getTimeRemaining(eventDateString);
	const days = remaining.days;
	const hours = remaining.hours;
	const minutes = remaining.minutes;
	const seconds = remaining.seconds;

	const [timeRemain, setTimeRemain] = useState({
		days,
		hours,
		minutes,
		seconds
	});

	useEffect(() => {
		setInterval(() => {
			const remaining_l = getTimeRemaining(eventDateString);
			const days_l = remaining_l.days;
			const hours_l = remaining_l.hours;
			const minutes_l = remaining_l.minutes;
			const seconds_l = remaining_l.seconds;
			setTimeRemain({
				days: days_l,
				hours: hours_l,
				minutes: minutes_l,
				seconds: seconds_l,
			});
		}, 1000);
	});
	
	return (
		<div className="min-w-fit flex items-center -mt-10 relative z-index-0 min-h-screen px-2 bg-cover bg-center bg-no-repeat bg-fixed">
		{/* <div className="min-w-fit relative z-index-0 min-h-screen bg-[url('/src/assets/bg-vec.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"> */ }
			<div className="container border max-w-4xl md:mx-auto py-24 text-center relative z-index-1">
				<img alt="Couple Illustration" src="/src/assets/placeholder.png" className="w-36 h-auto mx-auto my-3"/>
				<h1 className="font-semibold">John & Jane</h1>
				<h3>{dayWeek} {monthName} {yearNum} {hourTime}:{minuteTime}</h3>
				<p>{timeRemain.days} days {timeRemain.hours} hours {timeRemain.minutes} minutes {timeRemain.seconds} seconds</p>
			</div>
		</div>
	);
}

export default HomePage;