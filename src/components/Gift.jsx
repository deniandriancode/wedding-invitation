import { useEffect } from 'react';

import LoadingIcons from 'react-loading-icons'

import HeaderElement from './HeaderElement';
import { rootClass, containerClass } from '../utils/commonStyle';

const loadingIconStroke = 'rgb(147 51 234)';

function Gift() {
    const mainTitleClass = 'font-bold font-["Great_Vibes"] text-shadow-sm text-3xl mb-16';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={rootClass + ' flex-col gap-8 pt-12 pb-24'}>
            <HeaderElement />
            <article className={containerClass}>
                <h1 className={mainTitleClass}>Dana Tambahan</h1>
                <p className='mb-5 max-w-[435px] mx-auto'>Bagi yang berhalangan hadir, tapi ingin memberi hadiah kepada pengantin baru, silahkan scan saja <i>QR code</i> di bawah ini.</p>
                <div className='relative min-h-[200px]'>
                    <p>Mempelai Pria</p>
                    <img alt="QR Code Image" src="/img/qrcode.png" className='my-2 relative rounded shadow mx-auto z-10 border max-w-[300px] w-full' />
                    <p className='mt-8'>Mempelai Wanita</p>
                    <img alt="QR Code Image" src="/img/qrcode-woman.png" className=' my-2 relative rounded shadow mx-auto z-10 border max-w-[300px] w-full' />
                </div>
                <p className='mb-5 max-w-[435px] mx-auto mt-14 font-bold md:text-xl'>Rekening: 3790620924 a/n Wahyu Supriatna</p>
                <p className='mb-5 max-w-[435px] mx-auto font-bold md:text-xl'>Rekening: 1570401609 a/n Tiara Septia M</p>
            </article>
        </section>
    );
}

export default Gift;
