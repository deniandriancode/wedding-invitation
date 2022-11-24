import commentListData from "/src/assets/guest.json";

function CommentList(props) {
    const commentList = props.comments;
    const commentElement = commentList.map((item, index) => {
        return (
            <li className="my-2 bg-amber-900 text-amber-100 p-2 rounded-md">
                <p>
                    <span className="mr-3 bg-amber-700 px-3 py-1 rounded-full">{item.username}</span>
                    <span className="text-xs border-b">{item.date}</span>
                </p>
                <p className="py-2 amiri_quran">{item.content}</p>
            </li>
        );
    });
    return (
        <ul className="bg-amber-200 px-2 py-1 my-4 text-start rounded-md">
            {commentElement}
        </ul>
    );
}

function Doa(props) {
    const commentList = commentListData;

    function handleSubmit(event) {
        event.preventDefault();
    }

	return (
		<div className="min-w-fit flex flex-col items-center text-yellow-100 -mt-16 relative z-index-0 min-h-screen h-fit px-2 bg-yellow-100 bg-[url('/src/assets/main-homepage-frame.png')] bg-center bg-cover bg-no-repeat">
			<div className="animate__animated animate__fadeIn container bg-yellow-800 border-4 px-2 border-yellow-200 rounded-md max-w-4xl md:mx-auto min-h-screen h-fit my-24 text-center relative z-index-1">
				<h1 className="font-bold text-4xl my-5">DOA</h1>
                <p className="italic mb-5">Katakan sesuatu yang baik untuk kami</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <textarea spellCheck={false} id="message" rows="10" className="block p-2.5 w-full text-sm rounded-lg transition ease-in-out bg-yellow-900 border-2 border-yellow-200/50 placeholder-gray-300 text-white focus:ring-yellow-200 focus:border-yellow-200" placeholder="Tuliskan pesan Anda di sini" required></textarea>
                    </div>
                    <div className="flex justify-start">
                        <button 
                            className="bg-amber-200 transition ease-in-out text-amber-900 outline-none w-full md:w-fit py-2 px-8 rounded shadow-md hover:bg-amber-300 focus:ring ring-amber-200"
                            type="submit"
                        >
                        Kirim
                        </button>
                    </div>
                  </form>
                  <CommentList comments={commentList}/>
			</div>
		</div>
	);
}

export default Doa;
