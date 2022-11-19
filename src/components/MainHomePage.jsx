import { getTwoDigit } from "../utils/date.js";

function Overlay(props) {
	return <div className="bg-black opacity-30 fixed z-index-1 left-0 top-0 right-0 bottom-0"></div>;
}

function MainHomePage(props) {
	return (
		<div className="min-w-fit relative z-index-0 min-h-screen bg-cover bg-center bg-no-repeat bg-fixed">
		{/* <div className="min-w-fit relative z-index-0 min-h-screen bg-[url('/src/assets/body-bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"> */}
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

export default MainHomePage;