import { useState } from 'react';

const bottomMenuBg = "bg-purple-900";
const bottomMenuBorderColor = "border-purple-900";
const bottomMenuTextColor = "text-[#fedada]";
const tabTextHoverColor = "hover:text-gray-100";
const tabBorderHoverColor = "hover:border-gray-200";
const tabActiveBorderColor = "border-[#fedada]";
const tabActiveTextColor = "text-[#fedada]";


function BottomMenu({ tabs, handleSetTab }) {
    const normalTabClass = `flex flex-col justify-evenly items-center py-1 pt-2 md:py-3 px-2 md:px-4 border-t-2 border-transparent ${tabTextHoverColor} ${tabBorderHoverColor} group outline-none ease-in-out duration-200`;
    const activeTabClass = `flex flex-col justify-evenly items-center py-1 pt-2 md:py-3 px-2 md:px-4 ${tabActiveTextColor} border-t-2 ${tabActiveBorderColor} active group outline-none ease-in-out duration-200`;


    const tabList = tabs.map((item, index) => {
        return (
            <li className="mr-2" key={index}>
                <button
                    className={item.active ? activeTabClass : normalTabClass}
                    onClick={handleSetTab}
                >
                    <span className="text-md md:text-lg inline-flex">{item.icons.map(ic => ic)}</span>
                    <span className="text-[.5rem] md:text-xs">{item.name}</span>
                </button>
            </li>
        );
    });
    return (
        <div className={`border ${bottomMenuBg} ${bottomMenuBorderColor} shadow-md fixed bottom-2 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto overflow-x-auto rounded-md z-[99]`}>
            <ul className={`flex mx-2 justify-center min-w-fit font-medium text-center ${bottomMenuTextColor}`}>
                {tabList}
            </ul>
        </div>
    );
}

export default BottomMenu;
