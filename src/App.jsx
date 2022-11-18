import { useState, useEffect } from 'react';
import { MdHome } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { BsCalendar2DayFill, BsFillGiftFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaPray } from "react-icons/fa";
import { encrypt, decrypt } from "./utils/cryptography.js";
import { getQueryString } from "./utils/urlquery.js";
import { getTimeRemaining } from "./utils/date.js";

function Overlay(props) {
	return <div className="bg-black opacity-30 fixed z-index-1 left-0 top-0 right-0 bottom-0"></div>;
}

function MainHomePage(props) {
	return (
		<div className="min-w-fit relative z-index-0 min-h-screen bg-cover bg-center bg-no-repeat bg-fixed">
			<Overlay />
			<div className="container text-center px-2 md:px-0 absolute z-index-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<img alt="Couple Illustration" src="/src/assets/placeholder.png" className="w-36 h-auto mx-auto my-3"/>
				<h1 className="font-semibold">John & Jane</h1>
				<p className="italic font-light my-1 text-sm">Kepada Yth Bapak/Ibu/Saudara/I</p>
				<p className="my-3">--Tamu Undangan--</p>
				<p className="italic font-light my-1 text-sm">Kami mengundang anda untuk menghadiri ke pernikahan kami</p>
				<a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-sm text-white py-1 px-3 my-2 rounded-md">Buka Undangan</a>
			</div>
		</div>
	);
}

function getTwoDigit(num) {
	if (num > 9) {
		return new String(num);
	}
	return new String("0" + num);
}

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

function Couple(props) {
	return (
		<div className="min-w-fit flex flex-col justify-center items-center -mt-10 relative z-index-0 min-h-screen px-2 bg-cover bg-center bg-no-repeat bg-fixed">
		{/* <div className="min-w-fit relative z-index-0 min-h-screen bg-[url('/src/assets/bg-vec.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"> */ }
			<div className="container border max-w-xl md:mx-auto bg-yellow-100 h-screen my-24 text-center relative z-index-1">
				<h1 dir="rtl">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْمِ</h1>
				<h2>Assalamualaikum Warahmatullahi Wabarakatuh</h2>
				<p>Maha suci Allah Subhanahu wa ta'ala yang telah menciptakan makhluk-Nya berpasang-pasangan.</p>
				<p dir="rtl">
وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ ﴿ ٢١﴾
				</p>
				<p>[30:21] Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.</p>
			</div>

			<div className="container flex flex-wrap gap-5 md:flex-nowrap border max-w-4xl md:mx-auto bg-yellow-100 h-screen mb-24 text-center relative z-index-1">
				<div className="flex bg-blue-100">
					<h1>Aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis!</h1>
				</div>
				<div className="flex bg-blue-100">
					<h1>Aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis!</h1>
				</div>
			</div>
		</div>
	);
}

function Event(props) {
	return (
		<div className="min-w-fit flex items-center -mt-10 relative z-index-0 min-h-screen px-2 bg-cover bg-center bg-no-repeat bg-fixed">
		{/* <div className="min-w-fit relative z-index-0 min-h-screen bg-[url('/src/assets/bg-vec.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"> */ }
			<div className="container border max-w-4xl md:mx-auto h-screen my-24 text-center relative z-index-1">
			</div>
		</div>
	);
}

function Location(props) {
	return (
		<div className="min-w-fit flex items-center -mt-10 relative z-index-0 min-h-screen px-2 bg-cover bg-center bg-no-repeat bg-fixed">
		{/* <div className="min-w-fit relative z-index-0 min-h-screen bg-[url('/src/assets/bg-vec.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"> */ }
			<div className="container border max-w-4xl md:mx-auto h-screen my-24 text-center relative z-index-1">
			</div>
		</div>
	);
}

function Doa(props) {
	return (
		<div className="min-w-fit flex items-center -mt-10 relative z-index-0 min-h-screen px-2 bg-cover bg-center bg-no-repeat bg-fixed">
		{/* <div className="min-w-fit relative z-index-0 min-h-screen bg-[url('/src/assets/bg-vec.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"> */ }
			<div className="container border max-w-4xl md:mx-auto h-screen my-24 text-center relative z-index-1">
			</div>
		</div>
	);
}

function Gifts(props) {
	return (
		<div className="min-w-fit flex items-center -mt-10 relative z-index-0 min-h-screen px-2 bg-cover bg-center bg-no-repeat bg-fixed">
		{/* <div className="min-w-fit relative z-index-0 min-h-screen bg-[url('/src/assets/bg-vec.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"> */ }
			<div className="container border max-w-4xl md:mx-auto h-screen my-24 text-center relative z-index-1">
			</div>
		</div>
	);
}

function InvitationContent(props) {
	return (
		<div>
			{/* <HomePage /> */}
			<Couple />
		</div>
	);
}

function BottomMenu(props) {
	const normalTabClass = "flex flex-col justify-evenly items-center py-3 px-4 border-t-2 border-transparent hover:text-gray-600 hover:border-gray-300 group outline-none";
	const activeTabClass = "flex flex-col justify-evenly items-center py-3 px-4 text-blue-600 border-t-2 border-blue-600 active group outline-none";

	const [tab, setTab] = useState([
		{
			name: "Home",
			icon: <MdHome />,
			active: true
		},
		{
			name: "Couple",
			icon: <AiFillHeart />,
			active: false
		},
		{
			name: "Event",
			icon: <BsCalendar2DayFill />,
			active: false
		},
		{
			name: "Location",
			icon: <FaMapMarkerAlt />,
			active: false
		},
		{
			name: "Doa",
			icon: <FaPray />,
			active: false
		},
		{
			name: "Gifts",
			icon: <BsFillGiftFill />,
			active: false
		},
	]);

	function handleClick(event) {
		let target = event.target;
		while (target.tagName !== "BUTTON") {
			target = target.parentElement;
		}
		setTab(prev => {
			return prev.map(item => {
				if (target.children[1].textContent === item.name) {
					return {...item, active: true};
				}
				return {...item, active: false};
			});
		});
	}

	const tabList = tab.map((item, index) => {
		return (
			<li className="mr-2" key={index}>
				<button
					className={item.active ? activeTabClass : normalTabClass}
					onClick={handleClick}
				>
					<span className="text-xl">{item.icon}</span>
					<span className="text-xs ud-item-name">{item.name}</span>
				</button>
			</li>
		);
	});
	
	return (
		<div className="border-t border-gray-200 bg-white fixed bottom-0 left-0 right-0 overflow-x-auto z-index-5">
			<ul className="flex justify-center min-w-fit text-sm font-medium text-center text-gray-500">
				{tabList}
			</ul>
		</div>
	);
}

function App() {
	return (
		<div>
			<InvitationContent />
			<BottomMenu />
			{/* <MainHomePage /> */}
		</div>
	);
}

export default App;
