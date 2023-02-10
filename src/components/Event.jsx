import { useEffect } from 'react';

import { FaHandshake } from "react-icons/fa";
import { GiRose } from "react-icons/gi";

import HeaderElement from './HeaderElement';
import { rootClass, containerClass } from '../utils/commonStyle';

function Event() {
    const mainTitleClass = 'font-bold font-["Great_Vibes"] text-xl sm:text-3xl mb-16';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={rootClass + ' flex-col gap-8 pt-12 pb-24'}>
            <HeaderElement />
            <article className={containerClass}>
                <h1 className={mainTitleClass}>Susunan Acara</h1>
                <div className='flex flex-col gap-8'>
                    <div className='max-w-[576px] w-full mx-auto px-4 py-20 rounded shadow text-sm bg-purple-100'>
                        <h2 className='text-lg font-bold'>AKAD NIKAH</h2>
                        <p className='text-5xl flex justify-center my-4'><FaHandshake /></p>
                        <p className='my-2 text-lg font-bold font-["Sangkuriang"] text-shadow-sm'>18 Februari 2023</p>
                        <p>Ijab qobul dan acara lainnya yang penting bagi pengantin dan keluarga, tolong di sini kontennya apa saya tidak tahu, nanti tanya klien saja.</p>
                    </div>

                    <div className='max-w-[576px] w-full mx-auto px-4 py-20 rounded shadow text-sm bg-purple-100'>
                        <h2 className='text-lg font-bold'>RESEPSI</h2>
                        <p className='text-5xl flex justify-center my-4'><GiRose /></p>
                        <p className='my-2 text-lg font-bold font-["Sangkuriang"] text-shadow-sm'>18 Februari 2023</p>
                        <p>Makan-makan dan acara lainnya yang penting bagi tamu juga pengantin, di sini tamu bisa berinteraksi dengan pengantin baru, ngobrol, foto untuk status wa dan ig, narasinya saya tidak tahu harus apa, nanti tanya klien saja.</p>
                    </div>
                </div>
            </article>

            <article className={containerClass}>
                <h1 className={mainTitleClass}>Turut Mengundang</h1>
                <p className='mb-16 max-w-[453px] px-2 mx-auto'>Semua tamu penting bagi kami, namun sebagian tamu lebih dikenal oleh tamu yang lain, berikut di antaranya</p>
                <div className='text-sm grid md:grid-cols-2 md:justify-center md:items-center gap-8 md:gap-2 lg:px-8'>
                    <div className='text-center bg-purple-100 px-4 py-8 shadow rounded'>
                        <ul className='md:leading-7'>
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
                    <div className='text-center bg-purple-100 px-4 py-8 shadow rounded'>
                        <ul className='md:leading-7'>
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
            </article>
        </section>
    );
}

export default Event;
