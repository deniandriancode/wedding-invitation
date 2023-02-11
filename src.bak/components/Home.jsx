import { useState, useEffect } from 'react';

import HeaderElement from './HeaderElement';
import { getTimeRemaining, getTwoDigit } from "../utils/date";
import { rootClass, containerClass } from "../utils/commonStyle";

function Home() {
    const mainTitleClass = 'text-3xl md:text-4xl lg:text-6xl font-["Great_Vibes"]';
    const timeDigitClass = 'px-2 py-1 text-gray-600';
    const timeDigitNumClass = 'text-gray-700 font-bold text-2xl underline';

    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const eventDateString = "2023-02-18 09:00";
    const eventDate = new Date(eventDateString);

    const dayWeek = eventDate.getDate();
    const monthName = monthNames[eventDate.getMonth()];
    const yearNum = eventDate.getFullYear();
    const hourTime = getTwoDigit(eventDate.getHours());
    const minuteTime = getTwoDigit(eventDate.getMinutes());

    const remaining = getTimeRemaining(eventDateString);
    const days = remaining.days;
    const hours = remaining.hours;
    const minutes = remaining.minutes;
    const seconds = remaining.seconds;

    const [timeRemain, setTimeRemain] = useState({
        days,
        hours,
        minutes,
        seconds
    });

    useEffect(() => {
        window.scrollTo(0, 0);
         setInterval(() => {
             const remaining_l = getTimeRemaining(eventDateString);
             const days_l = remaining_l.days;
             const hours_l = remaining_l.hours;
             const minutes_l = remaining_l.minutes;
             const seconds_l = remaining_l.seconds;
             setTimeRemain({
                 days: days_l,
                 hours: hours_l,
                 minutes: minutes_l,
                 seconds: seconds_l,
             });
         }, 1000);
     }, []);

    return (
        <section className={rootClass + ' pt-12 pb-20 flex-col'}>
            <HeaderElement />
            <article className={'animate__animated animate__slideInUp animate__slow rounded-md max-w-[1024px] w-[90%] sm:w-[60%] text-center py-24 px-4'}>
                <h1 className={mainTitleClass}>Wahyu Supriatna S. Sos.</h1>
                <h1 className={mainTitleClass + ' my-4'}>&</h1>
                <h1 className={mainTitleClass}>Tiara Septia Mubarokah</h1>
                <div className='my-28'>
                    <img className={'max-w-[260px] w-[80%] mx-auto rotate-180'} src="/img/date-header.png" alt="date header" />
                    <p className='inline-block py-1 px-2 border-y-2 border-gray-600 font-bold'>27 Rajab 1444H - 18 Februari 2023</p>
                    <img className={'max-w-[260px] w-[80%] mx-auto'} src="/img/date-header.png" alt="date header" />
                </div>
                <div className="font-['Sangkuriang']">
                    <p className='my-4 font-sm text-gray-500'>tinggal</p>
                    <ul className='flex flex-wrap justify-center items-center gap-4'>
                        <li className={timeDigitClass}><span className={timeDigitNumClass}>{timeRemain.days}</span> hari</li>
                        <li className={timeDigitClass}><span className={timeDigitNumClass}>{timeRemain.hours}</span> jam</li>
                        <li className={timeDigitClass}><span className={timeDigitNumClass}>{timeRemain.minutes}</span> menit</li>
                        <li className={timeDigitClass}><span className={timeDigitNumClass}>{timeRemain.seconds}</span> detik</li>
                    </ul>
                    <p className='my-4 font-sm text-gray-500'>lagi sampai hari-H</p>
                </div>
            </article>
        </section>
    );
}

export default Home;
