import { useState } from "react";

import { MdHome } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { BsCalendar2DayFill, BsFillGiftFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaPray } from "react-icons/fa";

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
					<span className="text-2xl">{item.icon}</span>
					<span className="text-xs">{item.name}</span>
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

export default BottomMenu;