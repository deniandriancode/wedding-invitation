function Couple(props) {
	return (
		<div className="min-w-fit flex flex-col justify-center items-center -mt-10 relative z-index-0 h-max px-2 bg-cover bg-center bg-no-repeat bg-fixed">
			<div className="container rounded-md flex flex-col gap-8 items-center box-border justify-center shadow-md border-8 border-yellow-800/75 max-w-xl md:mx-auto bg-yellow-100/75 h-max py-24 my-24 text-center relative z-index-1 px-2 md:px-8">
				<h1 dir="rtl" className="font-[sans]">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْمِ</h1>
				<h2 className="">Assalamualaikum Warahmatullahi Wabarakatuh</h2>
				<p>Maha suci Allah Subhanahu wa ta'ala yang telah menciptakan makhluk-Nya berpasang-pasangan.</p>
				<p dir="rtl" className="">
وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ ﴿ ٢١﴾
				</p>
				<p>Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir. (Ar Rum 30:21)</p>
			</div>

			<div className="container flex flex-wrap gap-5 md:flex-nowrap max-w-4xl md:mx-auto h-max mb-32 text-center relative z-index-1 text-white">
				<div className="flex flex-col items-center box-border justify-center w-full bg-yellow-800/75 rounded-md shadow-md border-8 border-yellow-200/75 px-5 md:px-15 py-5">
					<img src="/src/assets/arabic-man.png" alt="Muslim Man" className="w-full h-fit" />
					<h1 className="font-[kaushan]">Muhammad</h1>
					<h1>Muhammad bin Ibrahim</h1>
					<p className="italic text-sm">Putra Ke Dua dari<br/>Abu Salamah dan Ummu Salamah</p>
				</div>
				<div className="flex flex-col items-center box-border justify-center w-full bg-yellow-800/75 rounded-md shadow-md border-8 border-yellow-200/75 px-5 md:px-15 py-5">
					<img src="/src/assets/arabic-woman-2.jpeg" alt="Muslim Woman" className="w-full h-fit" />
					<h1 className="font-[kaushan]">Khadijah</h1>
					<h1>Khadijah bintu Yusuf</h1>
					<p className="italic text-sm">Putri Ke Pertama dari<br/>Abu Khadijah dan Ummu Khadijah</p>
				</div>
			</div>
		</div>
	);
}

export default Couple;
