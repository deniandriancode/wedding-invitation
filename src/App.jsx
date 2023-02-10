import { useState } from 'react';
import uniqid from 'uniqid';

import { MdHome } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { BsCalendar2DayFill, BsFillGiftFill } from "react-icons/bs";
import { IoHandLeft, IoHandRight } from "react-icons/io5";
import { FaMapMarkerAlt, FaPray } from "react-icons/fa";

import AudioBackground from './components/AudioBackground';
import FrontPage from './components/FrontPage';
import BottomMenu from './components/BottomMenu';

import Home from './components/Home';
import Couple from './components/Couple';
import Event from './components/Event';
import Location from './components/Location';
import Doa from './components/Doa';
import Gift from './components/Gift';

import { getQueryString } from './utils/urlquery';
import { encrypt, decrypt } from './utils/cryptography';

const initTabs = [
    {
        name: "Home",
        icons: [<MdHome key={uniqid()} />],
        active: true
    },
    {
        name: "Couple",
        icons: [<AiFillHeart key={uniqid()} />],
        active: false
    },
    {
        name: "Event",
        icons: [<BsCalendar2DayFill key={uniqid()} />],
        active: false
    },
    {
        name: "Location",
        icons: [<FaMapMarkerAlt key={uniqid()} />],
        active: false
    },
    {
        name: "Doa",
        icons: [<IoHandRight key={uniqid()} />, <IoHandLeft key={uniqid()} />],
        active: false
    },
    {
        name: "Gift",
        icons: [<BsFillGiftFill key={uniqid()} />],
        active: false
    },
];

function App() {
  const salt = "cdef";
  const encGuestName = getQueryString("guest");
  const decGuestName = decrypt(salt, encGuestName).replaceAll("_", " ");

  const pageList = [
    <Home key={uniqid()} />,
    <Couple key={uniqid()} />,
    <Event key={uniqid()} />,
    <Location key={uniqid()} />,
    <Doa username={decGuestName} key={uniqid()} />,
    <Gift key={uniqid()} />,
  ];

  const [openInvite, setOpenInvite] = useState(false);
  const [page, setPage] = useState(pageList[0]);
  const [tabs, setTabs] = useState(initTabs);


  function handleOpenInvite() {
    setOpenInvite(true);
  }

  function handleSetTab(event) {
      let target = event.target;
      while (target.tagName !== "BUTTON") {
          target = target.parentElement;
      }
      let tabName = target.children[1].textContent;
      if (tabName === page.type.name)
        return;

      setTabs(prev => {
          return prev.map((item, index) => {
              if (tabName === item.name) {
                  setPage(pageList[index]);
                  return {...item, active: true};
              }
              return {...item, active: false};
          });
      });
  }

  return (
    <div className={`w-screen h-screen bg-white box-border text-gray-700 overflow-x-hidden text-sm md:text-base`}>
      <AudioBackground />
      {
        !openInvite ?
          <FrontPage decGuestName={decGuestName} handleOpenInvite={handleOpenInvite} /> :
        <>
          { page }
          <BottomMenu tabs={tabs} handleSetTab={handleSetTab} />
        </>
      }
    </div>
  );
}

export default App;
