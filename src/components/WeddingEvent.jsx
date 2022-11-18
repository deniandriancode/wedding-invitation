function WeddingEvent(props) {
	return (
		<div className="min-w-fit flex flex-col items-center -mt-10 relative z-index-0 min-h-screen px-2 bg-cover bg-center bg-no-repeat bg-fixed">
			<div className="container bg-yellow-100 border max-w-4xl md:mx-auto h-screen my-24 text-center relative z-index-1">
				<h1>Susunan Acara</h1>

				<div className="container flex flex-wrap gap-5 md:flex-nowrap border max-w-4xl md:mx-auto bg-yellow-100 h-screen mb-24 text-center relative z-index-1">
					<div className="flex bg-blue-100">
						<h1>Aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis!</h1>
					</div>
					<div className="flex bg-blue-100">
						<h1>Aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis!</h1>
					</div>
				</div>
			</div>

			<div className="container flex flex-wrap justify-center gap-5 md:flex-nowrap border max-w-4xl md:mx-auto bg-yellow-100 h-screen mb-24 text-center relative z-index-1">
				<h1>TURUT MENGUNDANG</h1>
			</div>
		</div>
	);
}

export default WeddingEvent;