import React, { useState, useEffect } from 'react';

import LoadingIcons from 'react-loading-icons'

import HeaderElement from './HeaderElement';
import { rootClass, containerClass } from '../utils/commonStyle';

const loadingIconStroke = 'rgb(147 51 234)';

function Location(): React.FC {
    const mainTitleClass = 'font-bold font-["Great_Vibes"] text-xl sm:text-3xl mb-16';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={rootClass + ' pt-12 pb-24 flex flex-col'}>
            <HeaderElement />
            <article className={containerClass}>
                <h1 className={mainTitleClass}>Lokasi</h1>
                <div className='mb-8'>
                    <p>Gunakanlah peta, jangan sampai nyasar ke kondangan orang.</p>
                </div>

                <div>
                    <div style={{width: "100%", minHeight: "500px", position: "relative"}}>
                        <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                            <LoadingIcons.Oval stroke={loadingIconStroke} />
                        </div>
                        <iframe
                            width="100%"
                            height="600"
                            frameBorder="0"
                            scrolling="yes"
                            marginHeight="0"
                            marginWidth="0"
                            className='rounded shadow'
                            style={{position: "relative", zIndex: 2}}
                            src="https://www.google.com/maps/embed/v1/place?q=Gumuruh,+Nagrak,+Bandung+Regency,+West+Java,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
                            <a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a>
                        </iframe>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Location;
