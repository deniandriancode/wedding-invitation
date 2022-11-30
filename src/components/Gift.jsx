import { useEffect } from "react";

function Gift(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

	return (
		<div className="min-w-fit flex flex-col items-center text-black -mt-16 relative z-index-0 min-h-screen h-fit px-2 bg-yellow-100 bg-[url('/assets/main-homepage-frame.png')] bg-[url('')] bg-center bg-cover bg-no-repeat">
			<div className="animate__animated animate__fadeIn container flex flex-col box-border px-2 md:px-12 items-center justify-center bg-yellow-200 border-2 border-yellow-800 rounded-md w-fit md:max-w-4xl md:mx-auto h-max py-5 my-24 text-center relative z-index-1">
				<h1 className="text-3xl md:text-4xl font-bold mb-5">HADIAH</h1>
				<p>Ingin kasih tambahan dana ke pengantin baru?<br />Scan saja QR Code di bawah hehe..</p>
                <img src="/assets/qrcode.png" alt="QR Code" className="my-16 px-0 md:px-14" />
			</div>
		</div>
	);
}

export default Gift;
