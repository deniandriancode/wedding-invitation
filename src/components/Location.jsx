import { useEffect } from "react";

function Location(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
	return (
		<div className="min-w-fit flex flex-col items-center text-yellow-100 -mt-16 relative z-index-0 min-h-screen h-fit px-2 bg-yellow-100 bg-[url('/src/assets/main-homepage-frame.png')] bg-center bg-cover bg-no-repeat">
			<div className="animate__animated animate__fadeIn container bg-yellow-900 rounded-md px-2 md:px-3 py-8 max-w-4xl md:mx-auto h-max my-24 text-center relative z-index-1">
				<h1 className="font-bold text-4xl my-5">LOKASI</h1>
				<p className="italic mb-8 text-sm">Lihatlah peta, jangan sampai nyasar ke kondangan orang</p>
				<div style={{width: "100%"}}>
					<iframe
						width="100%"
						height="600"
						frameborder="0"
						scrolling="yes"
						marginheight="0"
						marginwidth="0"
						src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bandasari+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
						<a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a>
					</iframe>
				</div>
			</div>
		</div>
	);
}

export default Location;
