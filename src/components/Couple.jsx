import { useEffect } from "react";
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Couple(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

	return (
		<div className="min-w-fit flex flex-col box-border justify-center items-center -mt-10 relative z-index-0 h-max px-2 bg-yellow-100 bg-[url('/assets/7.png')] bg-center bg-cover bg-no-repeat">
			<div className="animate__animated animate__fadeIn container rounded-md flex flex-col gap-8 items-center box-border justify-center shadow-md border-2 border-yellow-700 max-w-xl md:mx-auto bg-amber-50 bg-[url('/assets/2.png')] bg-center bg-no-repeat bg-cover h-max py-24 my-24 text-sm md:text-base text-center relative z-index-1 px-2 md:px-8">
				<h1 dir="rtl" className="font-[Amiri]">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْمِ</h1>
				<h2 className="">Assalamualaikum Warahmatullahi Wabarakatuh</h2>
				<p>Maha suci Allah Subhanahu wa ta'ala yang telah menciptakan makhluk-Nya berpasang-pasangan.</p>
				<p dir="rtl" className="font-[Amiri]">
وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ ﴿ ٢١﴾
				</p>
				<p>Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir. (Ar Rum 30:21)</p>
			</div>

			<div className="animate__animated animate__fadeIn container flex flex-col py-5 flex-wrap gap-5 bg-amber-800 py-12 px-2 md:px-6 shadow-md rounded-md md:flex-nowrap max-w-4xl md:mx-auto h-max mb-32 text-center relative z-index-1 text-white">
                <h1 className="text-3xl md:text-4xl my-3 font-semibold">KEDUA MEMPELAI</h1>
                <div className="container flex flex-wrap md:flex-nowrap gap-2">
                    <AnimationOnScroll className="flex flex-col gap-3 items-center box-border justify-center w-full bg-[#613a12] bg-[url('/assets/main-homepage-frame.png')] bg-center bg-no-repeat bg-cover rounded-md shadow-md border-2 border-yellow-200/75 px-5 md:px-15 py-5" animateIn="animate__bounceIn">
                        <img src="/assets/arabic-man.png" alt="Muslim Man" className="w-full h-fit" />
                        <h1 className="font-[yaquote] text-5xl border-b">Yuyu</h1>
                        <h1 className="font-bold">Wahyu Supriatna S. Sos.</h1>
                        <p className="italic text-sm">Putra Ke Dua dari<br/>Ajat Rasiman dan Sukaeni</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll className="flex flex-col gap-3 items-center box-border justify-center w-full bg-[#613a12] bg-[url('/assets/main-homepage-frame.png')] bg-center bg-no-repeat bg-cover rounded-md shadow-md border-2 border-yellow-200/75 px-5 md:px-15 py-5" animateIn="animate__bounceIn">
                        <img src="/assets/arabic-woman.png" alt="Muslim Woman" className="w-[90%] h-fit mb-5" />
                        <h1 className="font-[yaquote] text-5xl border-b">Yaya</h1>
                        <h1 className="font-bold">Tiara Septia Mubarakah</h1>
                        <p className="italic text-sm">Putri Pertama dari<br/>Asep dan Mamah Tiara</p>
                    </AnimationOnScroll>
                </div>
			</div>
		</div>
	);
}

export default Couple;
