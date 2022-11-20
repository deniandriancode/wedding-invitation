function Doa(props) {
	return (
		<div className="min-w-fit flex items-center -mt-10 relative z-index-0 min-h-screen h-fit px-2 box-border">
			<div className="container bg-yellow-800 border-8 border-yellow-200 rounded-md max-w-4xl md:mx-auto h-screen my-24 text-center relative z-index-1">
<form>
    <div className="form-group mb-6">
		<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
		<textarea id="message" rows="4" class="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>
    </div>
  </form>
				
			</div>
		</div>
	);
}

export default Doa;
