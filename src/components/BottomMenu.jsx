import { useState } from "react";

function BottomMenu(props) {
	const normalTabClass = "flex flex-col justify-evenly items-center py-3 px-2 md:px-4 border-t-2 border-transparent hover:text-amber-400 hover:border-amber-400 group outline-none ease-in-out duration-200";
	const activeTabClass = "flex flex-col justify-evenly items-center py-3 px-2 md:px-4 text-amber-500 border-t-2 border-amber-500 active group outline-none ease-in-out duration-200";

    const tabs = props.tabs;
    const handleClick = props.handleClick;

	const tabList = tabs.map((item, index) => {
		return (
			<li className="mr-2" key={index}>
				<button
					className={item.active ? activeTabClass : normalTabClass}
					onClick={handleClick}
				>
					<span className="text-lg md:text-2xl inline-flex">{item.icon.map(ic => ic)}</span>
					<span className="text-[.7rem]">{item.name}</span>
				</button>
			</li>
		);
	});
	
	return (
		<div className="border-t bg-amber-900 border-amber-900 fixed bottom-0 left-0 right-0 overflow-x-auto z-index-5">
			<ul className="flex mx-2 justify-center min-w-fit text-sm font-medium text-center text-amber-200">
				{tabList}
			</ul>
		</div>
	);
}

export default BottomMenu;
