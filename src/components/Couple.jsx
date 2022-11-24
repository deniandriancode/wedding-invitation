import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Couple(props) {
	return (
		<div className="min-w-fit flex flex-col box-border justify-center items-center -mt-10 relative z-index-0 h-max px-2 bg-yellow-100 bg-[url('/src/assets/main-homepage-frame.png')] bg-cover bg-center bg-no-repeat">
			<div className="animate__animated animate__fadeInUp container rounded-md flex flex-col gap-8 items-center box-border justify-center shadow-md border-4 border-yellow-700 max-w-xl md:mx-auto bg-amber-100 h-max py-24 my-24 text-center relative z-index-1 px-2 md:px-8">
				<h1 dir="rtl" className="font-['amiri_quran']">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْمِ</h1>
				<h2 className="">Assalamualaikum Warahmatullahi Wabarakatuh</h2>
				<p>Maha suci Allah Subhanahu wa ta'ala yang telah menciptakan makhluk-Nya berpasang-pasangan.</p>
				<p dir="rtl" className="font-[amiri_quran]">
وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ ﴿ ٢١﴾
				</p>
				<p>Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir. (Ar Rum 30:21)</p>
			</div>

			<div className="container flex flex-col py-5 flex-wrap gap-5 bg-amber-700 p-2 border-2 border-yellow-200 shadow-md rounded-md md:flex-nowrap max-w-4xl md:mx-auto h-max mb-32 text-center relative z-index-1 text-white">
                <h1 className="text-3xl md:text-4xl my-3 font-semibold">KEDUA MEMPELAI</h1>
                <div className="container flex flex-wrap md:flex-nowrap gap-2">
                    <AnimationOnScroll className="flex flex-col gap-3 items-center box-border justify-center w-full bg-yellow-800 rounded-md shadow-md border-2 border-yellow-200/75 px-5 md:px-15 py-5" animateIn="animate__bounceIn">
                        <img src="/src/assets/arabic-man.png" alt="Muslim Man" className="w-full h-fit" />
                        <h1 className="font-[yaquote] text-3xl md:text-4xl border-b">Muhammad</h1>
                        <h1 className="font-semibold">Muhammad bin Ibrahim</h1>
                        <p className="italic text-sm">Putra Ke Dua dari<br/>Abu Salamah dan Ummu Salamah</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll className="flex flex-col gap-3 items-center box-border justify-center w-full bg-yellow-800 rounded-md shadow-md border-2 border-yellow-200/75 px-5 md:px-15 py-5" animateIn="animate__bounceIn">
                        <img src="/src/assets/arabic-woman-2.png" alt="Muslim Woman" className="w-[55%] h-fit" />
                        <h1 className="font-[yaquote] text-3xl md:text-4xl border-b">Khadijah</h1>
                        <h1 className="font-semibold">Khadijah binti Abdul Manaf</h1>
                        <p className="italic text-sm">Putri Ke Pertama dari<br/>Abu Khadijah dan Ummu Khadijah</p>
                    </AnimationOnScroll>
                </div>
			</div>
		</div>
	);
}

export default Couple;
