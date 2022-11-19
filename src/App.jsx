import { useState, useEffect } from 'react';

import { encrypt, decrypt } from "./utils/cryptography.js";
import { getQueryString } from "./utils/urlquery.js";

import HomePage from "./components/HomePage";
import Couple from "./components/Couple";
import WeddingEvent from "./components/WeddingEvent";
import Location from "./components/Location";
import Doa from "./components/Doa";
import Gifts from "./components/Gifts";
import BottomMenu from "./components/BottomMenu";
import MainHomePage from "./components/MainHomePage";

function InvitationContent(props) {
	return (
		<div>
			<HomePage />
			{/* <Couple /> */}
			{/* <WeddingEvent /> */}
			{/* <Location /> */}
			{/* <Doa /> */}
			{/* <Gifts /> */}
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
