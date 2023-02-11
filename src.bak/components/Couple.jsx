import { useEffect } from 'react';

import HeaderElement from './HeaderElement';
import { rootClass, containerClass } from '../utils/commonStyle';

function Couple() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const mainTitleClass = 'font-bold font-["Great_Vibes"] text-shadow-sm text-3xl sm:text-3xl mb-16';
    const parClass = 'my-4 max-w-[576px] w-[90%] mx-auto';
    const coupleClass = 'text-gray-700 rounded bg-purple-200 shadow py-4 px-2';
    const coupleTitle = 'mt-8 font-semibold underline'
    const coupleFullName = 'text-md my-4 text-gray-500 font-["Butler"]';
    const pClass = 'text-sm';

    return (
        <section className={rootClass + ' flex-col gap-8 pt-12 pb-24'}>
            <HeaderElement />
            <article className={containerClass + ' min-h-screen flex flex-col justify-center'}>
                <p className={parClass + " font-['Amiri']"} dir={"rtl"}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْمِ</p>
                <p className={parClass}>{"Assalamu'alaikum Warahmatullahi Wabarakatuh"}</p>
                <p className={parClass}>{"Maha suci Allah Subhanahu wa ta'ala yang telah menciptakan makhluk-Nya berpasang-pasangan."}</p>
                <p className={parClass + " font-['Amiri'] py-8"} dir={"rtl"}>{"وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً  إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ ﴿ ٢١﴾"}</p>
                <p className={parClass}>{"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir. (Ar Rum 30:21)"}</p>
            </article>

            <article className={containerClass}>
                <h1 className={mainTitleClass}>Kedua Mempelai</h1>
                    <p className='mb-8'>Kami yang berbahagia</p>
                    <div className='grid grid-cols-1 items-center justify-center gap-2'>
                    <div className={coupleClass + ' pb-14'}>
                        <h3 className={coupleTitle}>Yuyu</h3>
                        <p className={coupleFullName}>Wahyu Supriatna S. Sos.</p>
                        <p className={pClass}>Putra Kedua dari</p>
                        <p className={pClass}>Ajat Rasiman & Sukaeni</p>
                        <img alt="Mempelai Pria" src="/img/swan-couple-edit.png" className={'mx-auto'}/>
                        <h3 className={coupleTitle}>Yaya</h3>
                        <p className={coupleFullName}>Tiara Septia Mubarokah</p>
                        <p className={pClass}>Putri Pertama dari</p>
                        <p className={pClass}>Asep Rahmat & Yati Suryati</p>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Couple;
