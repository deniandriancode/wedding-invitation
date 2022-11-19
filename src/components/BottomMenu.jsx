import { useState } from "react";

import { MdHome } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { BsCalendar2DayFill, BsFillGiftFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaPray } from "react-icons/fa";

function BottomMenu(props) {
	const normalTabClass = "flex flex-col justify-evenly items-center py-3 px-4 border-t-2 border-transparent hover:text-amber-500 hover:border-amber-500 group outline-none ease-in-out duration-200";
	const activeTabClass = "flex flex-col justify-evenly items-center py-3 px-4 text-amber-600 border-t-2 border-amber-600 active group outline-none ease-in-out duration-200";

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
		<div className="border-t border-amber-900/90 bg-amber-900/90 fixed bottom-0 left-0 right-0 overflow-x-auto z-index-5">
			<ul className="flex justify-center min-w-fit text-sm font-medium text-center text-amber-300">
				{tabList}
			</ul>
		</div>
	);
}

export default BottomMenu;