import React, { useEffect } from 'react';

import LoadingIcons from 'react-loading-icons'

import HeaderElement from './HeaderElement';
import { rootClass, containerClass } from '../utils/commonStyle';

const loadingIconStroke = 'rgb(147 51 234)';

function Gift(): React.FC {
    const mainTitleClass = 'font-bold font-["Great_Vibes"] text-3xl mb-16';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={rootClass + ' flex-col gap-8 pt-12 pb-24'}>
            <HeaderElement />
            <article className={containerClass}>
                <h1 className={mainTitleClass}>Dana Tambahan</h1>
                <p className='mb-5 max-w-[435px] mx-auto'>Ingin kasih tambahan dana buat pengantin baru😀? Scan saja QR code di bawah ini.</p>
                <div className='relative min-h-[200px]'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <LoadingIcons.Oval stroke={loadingIconStroke} />
                    </div>
                    <img alt="QR Code Image" src="/img/qrcode.png" className='relative rounded shadow mx-auto z-10 border max-w-[300px] w-full' />
                </div>
                <p className='mb-5 max-w-[435px] mx-auto mt-14 font-bold text-xl'>Rekening: 3790620924</p>
            </article>
        </section>
    );
}

export default Gift;
