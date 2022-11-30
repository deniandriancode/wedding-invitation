import { useEffect } from "react";
import { BsCalendar2DayFill } from "react-icons/bs";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { GiRose } from "react-icons/gi";
import ReactTooltip from 'react-tooltip';

function WeddingEvent(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

	return (
		<div className="min-w-fit flex flex-col items-center -mt-16 relative z-index-0 min-h-screen h-fit px-2 bg-yellow-100 bg-[url('/assets/main-homepage-frame.png')] bg-[url()] bg-center bg-cover bg-no-repeat">
			<div className="animate__animated animate__fadeIn text-white px-2 md:px-12 py-12 container bg-yellow-900 rounded-md max-w-4xl md:mx-auto h-fit my-24 text-center relative z-index-1">
				<h1 className="font-bold text-3xl md:text-4xl mt-5 mb-14 text-yellow-200">SUSUNAN ACARA</h1>
				<div className="container flex flex-wrap items-stretch gap-3 md:flex-nowrap max-w-4xl md:mx-auto box-border px-2 h-fit mb-12 text-center relative z-index-1">
					<div className="w-full bg-amber-200 py-5 text-amber-800 rounded-md px-2">
						<h1 data-tooltip="Akad nikah, ini yang paling penting, resepsi mah bisa kapan-kapan" className="text-2xl font-bold">AKAD NIKAH</h1>
						<FaHandshake className="mx-auto text-5xl my-3"/>
						<p className="my-3 underline text-amber-900 font-bold">6 Jumadal Awwal  1444 H - 18 Februari 2023</p>
						<p className="my-3 w-full sm:w-[75%] mx-auto">Hari itu ada akad nikah, jangan lupa untuk datang</p>
                        <ReactTooltip place="top" type="dark" effect="float" />
					</div>
					<div className="w-full bg-amber-200 py-5 text-amber-800 rounded-md px-2">
						<h1 className="text-2xl font-bold">RESEPSI</h1>
						<GiRose className="mx-auto text-5xl my-3"/>
						<p className="my-3 underline text-amber-900 font-bold">6 Jumadal Awwal  1444 H - 18 Februari 2023</p>
						<p className="my-3 w-full sm:w-[75%] mx-auto">Parasmanan, semur daging, baso ikan (favorit saya) ada pada hari itu. Jangan makan dari rumah, makan di kondangan saja</p>
					</div>
				</div>
			</div>

			<div className="animate__animated animate__fadeIn container flex flex-col flex-wrap justify-center gap-5 text-amber-900 rounded-md py-3 border-2 border-yellow-800 md:flex-nowrap max-w-4xl mx-2 md:mx-auto bg-amber-200 h-fit mb-24 text-center relative z-index-1">
				<h1 className="font-bold text-3xl md:text-4xl mt-5 mb-4">TURUT MENGUNDANG</h1>
				<div className="flex flex-wrap justify-center text-left mx-auto gap-12 md:flex-nowrap w-fit h-auto py-5">
					<ul className="bg-amber-800 text-yellow-100 shadow-md mx-2 px-6 md:pr-20 md:pl-10 w-full md:w-fit rounded-md py-4">
						<li>Abdul Gafur Lc. Ma.</li>
						<li>Abu Milya As Sundawi</li>
						<li>Abu Detiara Al Gharibi</li>
						<li>Abdul Gafur Lc. Ma.</li>
						<li>Abu Milya As Sundawi</li>
						<li>Abu Detiara Al Gharibi</li>
						<li>Abdul Gafur Lc. Ma.</li>
						<li>Abu Milya As Sundawi</li>
						<li>Abu Detiara Al Gharibi</li>
						<li>Abdul Gafur Lc. Ma.</li>
						<li>Abu Milya As Sundawi</li>
						<li>Abu Detiara Al Gharibi</li>
						<li>Abdul Gafur Lc. Ma.</li>
						<li>Abu Milya As Sundawi</li>
						<li>Abu Detiara Al Gharibi</li>
						<li>Abdul Gafur Lc. Ma.</li>
						<li>Abu Milya As Sundawi</li>
						<li>Abu Detiara Al Gharibi</li>
					</ul>
					<ul className="bg-amber-800 text-yellow-100 shadow-md mx-2 px-6 md:pr-20 md:pl-10 w-full md:w-fit rounded-md py-4">
						<li>Abdul Gafur Lc. Ma.</li>
						<li>Abu Milya As Sundawi</li>
						<li>Abu Detiara Al Gharibi</li>
						<li>Abdul Gafur Lc. Ma.</li>
						<li>Abu Milya As Sundawi</li>
						<li>Abu Detiara Al Gharibi</li>
						<li>Abdul Gafur Lc. Ma.</li>
						<li>Abu Milya As Sundawi</li>
						<li>Abu Detiara Al Gharibi</li>
						<li>Abdul Gafur Lc. Ma.</li>
						<li>Abu Milya As Sundawi</li>
						<li>Abu Detiara Al Gharibi</li>
						<li>Abdul Gafur Lc. Ma.</li>
						<li>Abu Milya As Sundawi</li>
						<li>Abu Detiara Al Gharibi</li>
						<li>Abdul Gafur Lc. Ma.</li>
						<li>Abu Milya As Sundawi</li>
						<li>Abu Detiara Al Gharibi</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default WeddingEvent;
