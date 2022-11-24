import commentListData from "/src/assets/guest.json";

function CommentList(props) {
    const commentList = props.comments;
    const commentElement = commentList.map((item, index) => {
        return (
            <li className="my-2 bg-blue-900 p-2 rounded-md">
                <p>
                    <span className="mr-3">{item.username}</span>
                    <span className="text-xs">{item.date}</span>
                </p>
                <p className="py-2 amiri_quran">{item.content}</p>
            </li>
        );
    });
    return (
        <ul className="bg-red-800 my-4 text-start rounded-md">
            {commentElement}
        </ul>
    );
}

function Doa(props) {
    const commentList = commentListData;

	return (
		<div className="min-w-fit box-border flex items-center -mt-10 relative z-index-0 min-h-screen h-fit px-2 text-white box-border">
			<div className="container bg-yellow-800 border-8 px-2 border-yellow-200 rounded-md max-w-4xl md:mx-auto min-h-screen h-fit my-24 text-center relative z-index-1">
				<h1 className="font-bold text-4xl my-5">DOA</h1>
                <p className="italic mb-5">Katakan sesuatu yang baik untuk kami</p>
                <form>
                    <div className="form-group mb-3">
                        <textarea spellCheck={false} id="message" rows="10" className="block p-2.5 w-full text-sm rounded-lg transition ease-in-out bg-yellow-900 border-2 border-yellow-200/50 placeholder-gray-300 text-white focus:ring-yellow-200 focus:border-yellow-200" placeholder="Tuliskan pesan Anda di sini"></textarea>
                    </div>
                    <div className="flex justify-start">
                        <button 
                            className="bg-yellow-900 w-full md:w-fit py-2 px-8 rounded shadow-md hover:bg-amber-900"
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
