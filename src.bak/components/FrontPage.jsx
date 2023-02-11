import { RiDoorOpenFill } from 'react-icons/ri';

const bgColor = "bg-purple-200";
const mainTitleTextColor = "text-purple-900";

function FrontPage({ decGuestName, handleOpenInvite }) {
    const buttonOpenInvite = 'relative z-[2] text-white transition bg-purple-900 hover:bg-purple-800 py-2 px-4 user-shadow-open-btn rounded';

    return (
        <section className={`w-screen h-screen flex items-center justify-center bg-center bg-cover bg-no-repeat ${bgColor}`}>
            <article className='user-border-l relative text-center w-[80%] md:w-[75%] py-28'>
                <p className="italic text-md md:text-lg text-gray-600">Pernikahan</p>
                <h1 className={`text-4xl md:text-6xl ${mainTitleTextColor} font-["Great_Vibes"] my-10 text-shadow`}>Yuyu & Yaya</h1>
                <p className="text-sm">Kepada Yth Bapak/Ibu/Saudara/I</p>
                <p className="mt-2 mb-8 font-bold underline">{decGuestName}</p>
                <button className={buttonOpenInvite} onClick={handleOpenInvite}>
                    <div className='flex justify-center items-center gap-2'>
                        <RiDoorOpenFill /> Buka Undangan
                    </div>
                </button>
            </article>
        </section>
    );
}

export default FrontPage;
