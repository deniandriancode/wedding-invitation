import { useState, useEffect } from 'react';

import uniqid from 'uniqid';
import axios from 'axios';
import { IoIosSend } from 'react-icons/io';
import LoadingIcons from 'react-loading-icons'

import HeaderElement from './HeaderElement';
import { rootClass, containerClass } from '../utils/commonStyle';
import { getQueryString } from '../utils/urlquery';
import { encrypt, decrypt } from '../utils/cryptography';

const loadingIconStroke = 'rgb(147 51 234)';

function MessageElem({ messageList }) {
    if (!messageList) {
        return (<></>);
    }
    const msg = messageList.map(item => {
	if (item.username.includes("Tiara Septia Muabrokah")) {
	    item.username = "Tiara Septia Mubarokah";
	    return item;
	}
	return item;
    });
    const messageListSort = msg.sort((x, y) => {
	return x.username === "Wahyu Supriatna" || x.username === "Tiara Septia Mubarokah" ? 1 : y.username === "Wahyu Supriatna" || y.username === "Tiara Septia Mubarokah" ? -1 : 0;
    });
    console.log(messageListSort);
    const rendered = messageListSort.map((item, index) => {
        return (
            <li className='bg-purple-200 p-2 mb-1 rounded text-start' key={uniqid()}>
                <p className='text-[.80rem] text-gray-900'><span className='break-all inline-block px-2 rounded bg-purple-300'>{item.username.replace("S. Sos.", "").replace("M. Si.", "").replace("S. AB.", "")}</span></p>
                <p className='text-sm md:text-base text-gray-800 mt-1'>{item.message}</p>
            </li>
        );
    });

    return rendered.reverse();
}

function Doa() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const mainTitleClass = 'font-bold font-["Great_Vibes"] text-shadow-sm text-xl sm:text-3xl mb-16';
      const salt = "aaaa";
      const encGuestName = getQueryString("guest");
      const username = decrypt(salt, encGuestName).replaceAll("_", " ").replace("S. Sos.", "").replace("M. Si.", "").replace("S. AB.", "");

    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        if (message.trim().length === 0)
            return;

        const url = 'https://peridot-eminent-seatbelt.glitch.me/message';
        const reqData = {
            username,
            message,
        };

        setMessage('');

        axios.post(url, reqData).then((res) => {
            //
        }).catch((err) => {
            console.error(err);
        });
        setMessageList([...messageList, reqData]);

        axios.get('https://peridot-eminent-seatbelt.glitch.me/')
            .then((res) => {
            });
    }

    function handleChange(event) {
        setMessage(event.target.value);
    }

    useEffect(() => {
        const url = 'https://peridot-eminent-seatbelt.glitch.me/';
        axios.get(url)
            .then((res) => {
                setMessageList(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <section className={rootClass + ' flex-col gap-8 pt-12 pb-24'}>
            <HeaderElement />
            <article className={containerClass}>
                <h1 className={mainTitleClass}>Doa & Ucapan Selamat</h1>
                <p>Katakan sesuatu yang baik untuk kami😊</p>
                {/* <p className='text-sm'>untuk obrolan lebih seru, <a href="https://yuyu-yaya.github.io" className='underline text-purple-500' target="_blank">klik di sini.</a></p> */}

                <form onSubmit={handleSubmit} className='flex flex-col gap-2 my-8'>
                    <textarea spellCheck={false} className='transition rounded text-sm md:text-base outline-none bg-purple-50 border-gray-400 focus:border-purple-300 resize-none shadow' value={message} onChange={handleChange} placeholder='Tulis pesan' rows='4' />
                    <button className='flex justify-center items-center gap-1 transition text-white bg-purple-400 hover:bg-purple-500 py-1 px-6 rounded shadow md:w-fit'><IoIosSend /> Kirim</button>
                </form>

                <div className='mt-8 relative min-h-[50px] border-2 border-purple-400 rounded'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <LoadingIcons.Oval stroke={loadingIconStroke} />
                    </div>
                    <ul className='relative min-h-[50px] bg-gray-50 p-1 overflow-y-auto max-h-[400px] rounded z-10'>
                        <MessageElem messageList={messageList} />
                    </ul>
                </div>
            </article>
        </section>
    );
}

export default Doa;
