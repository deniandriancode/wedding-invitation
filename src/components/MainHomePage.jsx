import { getTwoDigit } from "../utils/date.js";
import { RiDoorOpenFill } from "react-icons/ri";

function Overlay(props) {
	return <div className="bg-black opacity-80 fixed z-index-1 left-0 top-0 right-0 bottom-0"></div>;
}

function MainHomePage(props) {
	return (
		<div className="min-w-fit relative box-border py-12 z-index-0 min-h-screen px-2 bg-amber-900 text-sm">
			<div className="container w-fit md:w-max rounded-md shadow-md text-yellow-800 flex flex-col bg-amber-100 bg-[url('/assets/main-homepage-frame.png')] bg-center bg-no-repeat bg-cover gap-3 items-center justify-center text-center px-2 md:px-24 relative w-auto h-screen z-index-1">
				<h1 className="text-6xl md:text-8xl drop-shadow-lg font-[yaquote]">Yuyu<br/>&<br/>Yaya</h1>
				<p className="italic mt-3 mb-1">Kepada Yth Bapak/Ibu/Saudara/I</p>
				<p className="md:text-lg underline">Umar bin Abdul Manaf</p>
				<p className="italic my-1 text-sm my-2">Kami mengundang anda untuk menghadiri momen bahagia ini</p>
				<button onClick={props.onOpenInvitation} className="inline-flex items-center gap-2 bg-yellow-800 text-yellow-100 shadow-lg hover:bg-yellow-900 focus:ring focus:ring-yellow-700 px-5 py-2 rounded-md ease-in-out duration-200">
					<RiDoorOpenFill />
					Buka Undangan
				</button>
			</div>
		</div>
	);
}

export default MainHomePage;
