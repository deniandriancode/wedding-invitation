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
		<div className="min-w-fit min-h-screen flex justify-center items-center relative z-index-0 h-fit px-2 text-white">
			<div className="container bg-yellow-800/50 max-w-4xl md:mx-auto py-10 my-24 text-center relative z-index-1">
				<img alt="Couple Illustration" src="/src/assets/arabic-bride.png" className="w-96 h-auto mx-auto"/>
				<h1 className="font-semibold text-3xl my-2 font-[kaushan]">Muhammad & Khadijah</h1>
				<h3 className="text-yellow-800 text-xl font-semibold underline">
					{dayWeek} {monthName} {yearNum}
				</h3>
				<p className="flex justify-center font-semibold text-xl">
					<span className="inline-block px-3 py-1 mx-1 bg-yellow-800 rounded shadow-md mt-3">
						{timeRemain.days}&nbsp;
						<span className="text-sm">hari</span>
					</span>
					<span className="inline-block px-3 py-1 mx-1 bg-yellow-800 rounded shadow-md mt-3">
						{timeRemain.hours}&nbsp;
						<span className="text-sm">jam</span>
					</span>
					<span className="inline-block px-3 py-1 mx-1 bg-yellow-800 rounded shadow-md mt-3">
						{timeRemain.minutes}&nbsp;
						<span className="text-sm">menit</span>
					</span>
					<span className="inline-block px-3 py-1 mx-1 bg-yellow-800 rounded shadow-md mt-3">
						{timeRemain.seconds}&nbsp;
						<span className="text-sm">detik</span>
					</span>
				</p>
			</div>
		</div>
	);
}

export default HomePage;
