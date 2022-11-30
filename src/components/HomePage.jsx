import { useState, useEffect } from "react";
import { getTimeRemaining, getTwoDigit } from "../utils/date.js";

function HomePage(props) {
	const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
		"Juli", "Agustus", "September", "Oktober", "November", "Desember"
	];
	const eventDateString = "2023-02-18 09:00";
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

     //useEffect(() => {
         //window.scrollTo(0, 0);
         //setInterval(() => {
             //const remaining_l = getTimeRemaining(eventDateString);
             //const days_l = remaining_l.days;
             //const hours_l = remaining_l.hours;
             //const minutes_l = remaining_l.minutes;
             //const seconds_l = remaining_l.seconds;
             //setTimeRemain({
                 //days: days_l,
                 //hours: hours_l,
                 //minutes: minutes_l,
                 //seconds: seconds_l,
             //});
         //}, 1000);
     //}, []);
	
	return (
		<div className="min-w-fit text-yellow-200 flex items-center -mt-10 relative z-index-0 min-h-screen px-4 bg-yellow-100 bg-[url('/assets/main-homepage-frame.png')] bg-[url()] bg-cover bg-center bg-no-repeat">
			<div className="animate__animated animate__fadeIn container flex flex-col gap-5 items-center bg-yellow-900 bg-[url('/assets/circle-frame.png')] bg-center bg-no-repeat bg-cover rounded-md px-5 py-24 max-w-4xl md:mx-auto h-max my-24 text-center relative z-index-1">
				<h1 className="text-5xl md:text-7xl my-22 rounded-md px-2 md:px-10 font-[yaquote] drop-shadow-md">Wahyu Supriatna S. Sos.<br/>&<br/>Tiara Septian Mubarakah</h1>
				<a href="https://calendar.google.com/calendar/u/0/r/week/2023/2/18?pli=1" target="_blank" title="Click to open calendar" className="px-5 py-3 rounded-full shadow-md bg-yellow-200 text-amber-800 text-sm md:text-xl font-semibold hover:underline">
                    6 Jumadal Awwal  1444 H - {dayWeek} {monthName} {yearNum}
				</a>
				<p className="flex flex-wrap justify-center font-semibold text-sm md:text-lg text-amber-800">
					<span className="inline-block px-3 py-1 mx-1 bg-yellow-200 rounded-md shadow-md mt-3">
						{timeRemain.days}&nbsp;
						<span className="text-sm">hari</span>
					</span>
					<span className="inline-block px-3 py-1 mx-1 bg-yellow-200 rounded-md shadow-md mt-3">
						{timeRemain.hours}&nbsp;
						<span className="text-sm">jam</span>
					</span>
					<span className="inline-block px-3 py-1 mx-1 bg-yellow-200 rounded-md shadow-md mt-3">
						{timeRemain.minutes}&nbsp;
						<span className="text-sm">menit</span>
					</span>
					<span className="inline-block px-3 py-1 mx-1 bg-yellow-200 rounded-md shadow-md mt-3">
						{timeRemain.seconds}&nbsp;
						<span className="text-sm">detik</span>
					</span>
				</p>
            </div>
        </div>
	);
}

export default HomePage;
