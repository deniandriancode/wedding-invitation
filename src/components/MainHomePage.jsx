import { getTwoDigit } from "../utils/date.js";
import { BsArrowRightCircle } from "react-icons/bs";

function Overlay(props) {
	return <div className="bg-black opacity-30 fixed z-index-1 left-0 top-0 right-0 bottom-0"></div>;
}

function MainHomePage(props) {
	return (
		<div className="min-w-fit relative z-index-0 min-h-screen bg-[url('/src/assets/main-homepage-bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
			<Overlay />
			<div className="container text-white flex flex-col items-center justify-center text-center px-2 md:px-0 relative w-auto h-screen z-index-1">
				<img alt="Couple Illustration" src="/src/assets/arabic-bride.png" className="w-96 h-auto mx-auto"/>
				<h1 className="font-semibold text-3xl">Muhammad & Khadijah</h1>
				<p className="italic font-light my-1 text-sm">Kepada Yth Bapak/Ibu/Saudara/I</p>
				<p className="">Umar bin Abdul Manaf</p>
				<p className="italic font-light my-1 text-sm my-2">Kami mengundang anda untuk menghadiri ke pernikahan kami</p>
				{/* <a href="#" className="inline-block bg-gradient-to-b from-yellow-600 to-yellow-700 focus:ring focus:ring-yellow-600 px-5 py-2 rounded-md">Buka Undangan</a> */}
				<a href="#" className="inline-flex items-center gap-2 bg-yellow-700 shadow-lg hover:bg-yellow-800 focus:ring focus:ring-yellow-600 px-5 py-2 rounded-md ease-in-out duration-200">
					<BsArrowRightCircle />
					Buka Undangan
				</a>
			</div>
		</div>
	);
}

export default MainHomePage;