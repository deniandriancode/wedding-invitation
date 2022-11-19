import { BsCalendar2DayFill } from "react-icons/bs";

function WeddingEvent(props) {
	return (
		<div className="min-w-fit flex flex-col items-center -mt-10 relative z-index-0 min-h-screen px-2 bg-cover bg-center bg-no-repeat bg-fixed">
			<div className="container bg-yellow-100 border max-w-4xl md:mx-auto h-screen my-24 text-center relative z-index-1">
				<h1>Susunan Acara</h1>

				<div className="container flex flex-wrap gap-5 md:flex-nowrap max-w-4xl md:mx-auto bg-yellow-100 h-screen mb-24 text-center relative z-index-1">
					<div className="w-full bg-blue-100">
						<h1>AKAD NIKAH</h1>
						<BsCalendar2DayFill className="mx-auto"/>
						<p>Ahad, 30 Muharram 1444 H</p>
						<p>Hari itu ada akad nikah, jangan lupa untuk datang</p>
					</div>
					<div className="w-full bg-blue-100">
						<h1>RESEPSI</h1>
						<BsCalendar2DayFill className="mx-auto"/>
						<p>Ahad, 30 Muharram 1444 H</p>
						<p>Parasmanan, semur daging, baso ikan (favorit saya) ada pada hari itu. Jangan makan dari rumah, makan di kondangan saja</p>
					</div>
				</div>
			</div>

			<div className="container flex flex-col justify-center gap-5 md:flex-nowrap border max-w-4xl md:mx-auto bg-yellow-100 h-screen mb-24 text-center relative z-index-1">
				<h1>TURUT MENGUNDANG</h1>
				<div className="flex flex-wrap justify-center text-left gap-24 md:flex-nowrap w-full h-auto py-5 bg-blue-100">
					<ul>
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
					<ul>
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