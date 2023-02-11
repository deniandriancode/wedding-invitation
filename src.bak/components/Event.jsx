import { useEffect } from 'react';

import { FaHandshake } from "react-icons/fa";
import { GiRose } from "react-icons/gi";

import HeaderElement from './HeaderElement';
import { rootClass, containerClass } from '../utils/commonStyle';

function Event() {
    const mainTitleClass = 'font-bold font-["Great_Vibes"] text-shadow-sm text-3xl sm:text-3xl mb-16';

    return (
        <section className={rootClass + ' flex-col gap-8 pt-12 pb-24'}>
            <HeaderElement />
            <article className={containerClass}>
                <h1 className={mainTitleClass}>Susunan Acara</h1>
                <div className='flex flex-col gap-8'>
                    <div className='max-w-[576px] w-full mx-auto px-4 py-6 rounded shadow text-sm bg-purple-100'>
                        <h2 className='text-lg font-bold font-["Butler"]'>AKAD NIKAH</h2>
                        <p className='text-5xl flex justify-center my-4'><FaHandshake /></p>
                        <p className='my-2 text-lg font-bold font-["Sangkuriang"] text-shadow-sm'>18 Februari 2023</p>
                        <p>08:00 - 10:00 WIB</p>
                        <p>di</p>
                        <p>Kediaman Mempelai Wanita</p>
                    </div>

                    <div className='max-w-[576px] w-full mx-auto px-4 py-20 rounded shadow text-sm bg-purple-100'>
                        <h2 className='text-lg font-bold font-["Butler"]'>RESEPSI</h2>
                        <p className='text-5xl flex justify-center my-4'><GiRose /></p>
                        <p className='my-2 text-lg font-bold font-["Sangkuriang"] text-shadow-sm'>18 Februari 2023</p>
                        <p>11:00 WIB - selesai</p>
                        <p>di</p>
                        <p>Kediaman Mempelai Wanita</p>
                    </div>
                </div>
            </article>

            <article className={containerClass}>
                <h1 className={mainTitleClass}>Turut Mengundang</h1>
                <p className='mb-16 max-w-[453px] px-2 mx-auto'>Semua tamu penting bagi kami, namun sebagian tamu lebih dikenal oleh tamu yang lain, berikut di antaranya</p>
                <div className='text-sm grid md:grid-cols-2 md:justify-center md:items-stretch gap-8 md:gap-2 lg:px-8'>
                    <div className='text-center bg-purple-100 px-4 py-8 shadow rounded'>
                        <ul className='md:leading-7'>
                            <li>Kel. Besar Bpk. Jana (Alm)/Ibu Kanah(Alm)</li>
                            <li>Kel. Besar Bpk. Aman (Alm)/Ibu Komasih</li>
                            <li>Aki Endut/Ma Hj Euceu</li>
                            <li>Jang Rodi/Eneng Susi</li>
                            <li>Ma Ameh</li>
                            <li>Bpk. Asep Obes/Ibu Rosita (Alm)</li>
                            <li>Bpk. Dadang/Ibu Dede</li>
                            <li>Bpk. Ojim Son/Ibu Eka</li>
                            <li>Mas Imam/Ibu Eneng</li>
                            <li>A Willy/Teh Ami</li>
                            <li>Bpk. Jana Breng (Bangke)/Ibu Eneng Ratih</li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center bg-purple-100 px-4 py-8 shadow rounded'>
                        <ul className='md:leading-7'>
                            <li>Alm. Bpk. Ade Solih</li>
                            <li>Alm. Ayi Hamdani</li>
                            <li>Ujang Wahyuding</li>
                            <li>Yusup Solihin</li>
                            <li>Moh. Taufan</li>
                            <li>Bpk. Endang</li>
                            <li>Bpk. Ruswaya</li>
                            <li>Alm. Salim Ood</li>
                            <li>Ujang Dedih</li>
                            <li>Bpk. Yaya</li>
                        </ul>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Event;
