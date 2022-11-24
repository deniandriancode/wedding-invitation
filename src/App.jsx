import { useState } from 'react';

import { encrypt, decrypt } from "./utils/cryptography.js";
import { getQueryString } from "./utils/urlquery.js";
import "./utils/userinteraction.js";

import { MdHome } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { BsCalendar2DayFill, BsFillGiftFill } from "react-icons/bs";
import { IoHandLeft, IoHandRight } from "react-icons/io5";
import { FaMapMarkerAlt, FaPray } from "react-icons/fa";

import AudioBackground from "./components/AudioBackground";
import HomePage from "./components/HomePage";
import Couple from "./components/Couple";
import WeddingEvent from "./components/WeddingEvent";
import Location from "./components/Location";
import Doa from "./components/Doa";
import Gift from "./components/Gift";
import BottomMenu from "./components/BottomMenu";
import MainHomePage from "./components/MainHomePage";

const initPages = [
        <HomePage />,
        <Couple />,
        <WeddingEvent />,
        <Location />,
        <Doa />,
        <Gift />
];

const initTabs = [
    {
        name: "Home",
        icon: [<MdHome />],
        active: true
    },
    {
        name: "Couple",
        icon: [<AiFillHeart />],
        active: false
    },
    {
        name: "Event",
        icon: [<BsCalendar2DayFill />],
        active: false
    },
    {
        name: "Location",
        icon: [<FaMapMarkerAlt />],
        active: false
    },
    {
        name: "Doa",
        icon: [<IoHandRight />, <IoHandLeft />],
        active: false
    },
    {
        name: "Gift",
        icon: [<BsFillGiftFill />],
        active: false
    },
]

function InvitationContent(props) {
    const page = props.page;
	return (
		<div>
            {page}
		</div>
	);
}

function App() {
    const [tabs, setTabs] = useState(initTabs);
    const [page, setPage] = useState(initPages[0]);
    const [invitationOpen, setInvitationOpen] = useState(false);

    function handleSetTabs(event) {
		let target = event.target;
		while (target.tagName !== "BUTTON") {
			target = target.parentElement;
		}
		setTabs(prev => {
			return prev.map((item, index) => {
				if (target.children[1].textContent === item.name) {
                    setPage(initPages[index]);
					return {...item, active: true};
				}
				return {...item, active: false};
			});
		});

    }

    function handleOpenInvitation() {
        setInvitationOpen(true);
    }

	return (
		<div className="font-serif">
            <AudioBackground /> {/* move to bottom menu, autoplay is not suitable */}
            {!invitationOpen && <MainHomePage onOpenInvitation={handleOpenInvitation} />}
            {invitationOpen && 
                <>
                    <InvitationContent page={page} /> 
                    <BottomMenu tabs={tabs} handleClick={handleSetTabs} /> 
                </>
            }
		</div>
	);
}

export default App;
