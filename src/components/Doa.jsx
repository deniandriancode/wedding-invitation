import { useState, useEffect } from "react";
import axios from "axios";
import { getTwoDigit, getTimeRemaining } from "../utils/date";
import { decrypt } from "../utils/cryptography";

import { FaPaperPlane } from "react-icons/fa";

function CommentList(props) {
    const commentList = JSON.parse(props.comments);
    let commentElement = [];
    if (commentList.length > 0) {
        commentElement = commentList.map((item, index) => {
            return (
                <li className="my-2 bg-amber-900 text-amber-100 p-2 rounded-md">
                    <p>
                        <span className="mr-3 bg-amber-700 px-3 py-1 rounded">{item.username}</span>
                        <span className="text-xs border-b">{item.date}</span>
                    </p>
                    <p className="py-2 font-['Alegreya'] font-['Amiri']">{item.content}</p>
                </li>
            );
        }).reverse();
    } 
    return (
        <ul className="bg-amber-200 px-2 py-[1px] my-10 text-start rounded-md">
            { commentElement }
        </ul>
    );
}

function Doa(props) {

    const [doa, setDoa] = useState("");
    const [commentList, setCommentList] = useState([]);

    function handleChange(event) {
        setDoa(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const salt = "paraphrase";
        const params = new Proxy(new URLSearchParams(window.location.search), {
          get: (searchParams, prop) => searchParams.get(prop),
        });
        const guestName = params.guest; 
        const decGuestName = decrypt(salt, guestName).replaceAll("_", " ");

        const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];

        const eventDate = new Date();

        const dayDate = eventDate.getDate();
        const monthName = monthNames[eventDate.getMonth()];
        const yearNum = eventDate.getFullYear();
        const hourTime = getTwoDigit(eventDate.getHours());
        const minuteTime = getTwoDigit(eventDate.getMinutes());
        
        const currentDate = `${dayDate} ${monthName} ${yearNum}, ${hourTime}:${minuteTime}`;

        const newDoa = doa;
        const response = axios.post("http://localhost:5000/pray", {
            username: decGuestName,
            date: currentDate,
            content: newDoa
        });

        setDoa("");
        setTimeout(() => {
            axios.get("http://localhost:5000/")
                .then(result => {
                    setCommentList(result.data);
                });
        }, 3000);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get("http://localhost:5000/")
            .then(result => {
                setCommentList(result.data);
            });
    }, []);

	return (
		<div className="min-w-fit flex flex-col items-center text-yellow-100 -mt-16 relative z-index-0 min-h-screen h-fit px-2 bg-yellow-100 bg-[url('/assets/7.png')] bg-center bg-cover bg-no-repeat">
			<div className="animate__animated animate__fadeIn container bg-yellow-900 px-2 rounded-md max-w-4xl md:mx-auto py-5 h-fit my-24 text-center relative z-index-1">
				<h1 className="font-bold text-4xl my-5">DOA</h1>
                <p className="italic mb-5">Katakan sesuatu yang baik untuk kami</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <textarea value={doa} onChange={handleChange} spellCheck={false} id="message" rows="10" className="block p-2.5 w-full rounded-lg transition ease-in-out bg-[#613a12] border-1 border-[#ffffff] placeholder-gray-300 text-white focus:ring-yellow-100 focus:border-yellow-200" placeholder="Tuliskan pesan Anda di sini" required></textarea>
                    </div>
                    <div className="flex justify-start">
                        <button 
                            className="inline-flex items-center justify-center gap-1 bg-amber-200 transition ease-in-out text-amber-900 outline-none w-full md:w-fit py-2 px-8 rounded shadow-md hover:bg-amber-300 focus:ring ring-amber-200"
                            type="submit"
                        >
                        <FaPaperPlane />
                        Kirim
                        </button>
                    </div>
                  </form>
                {commentList.length > 0 && <CommentList comments={commentList}/> }
			</div>
		</div>
	);
}

export default Doa;
