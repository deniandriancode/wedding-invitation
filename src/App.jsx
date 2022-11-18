import { useState } from 'react';
import { encrypt, decrypt } from "../utils/cryptography.js";
import { getQueryString } from "../utils/urlquery.js";
import { getTimeRemaining } from "../utils/date.js";

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
				<p className="italic font-light my-1 text-sm">Kepada Bapak/Ibu/Saudara/I</p>
				<p className="my-3">--Tamu Undangan--</p>
				<p className="italic font-light my-1 text-sm">Kami mengundang anda untuk menghadiri ke pernikahan kami</p>
				<a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-sm text-white py-1 px-3 my-2 rounded-md">Buka Undangan</a>
			</div>
		</div>
	);
}

function HomePage(props) {
	return <div></div>;
}

function InvitationContent(props) {
	return (
		<div>
			<HomePage />
		</div>
	);
}

function BottomMenu(props) {
	const normalTabClass = "inline-flex p-4 rounded-b-lg border-t-2 border-transparent hover:text-gray-600 hover:border-gray-300 group outline-none";
	const activeTabClass = "inline-flex p-4 text-blue-600 rounded-b-lg border-t-2 border-blue-600 active group outline-none";

	const [tab, setTab] = useState([
		{
			name: "Home",
			active: true
		},
		{
			name: "Couple",
			active: false
		},
		{
			name: "Event",
			active: false
		},
		{
			name: "Location",
			active: false
		},
		{
			name: "Doa",
			active: false
		},
		{
			name: "Gifts",
			active: false
		},
	]);

	function handleClick(event) {
		setTab(prev => {
			return prev.map(item => {
				if (event.target.textContent === item.name) {
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
					{item.name}
				</button>
			</li>
		);
	});
	
	return (
		<div className="border-t border-gray-200 fixed bottom-0 left-0 right-0 overflow-x-auto">
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
