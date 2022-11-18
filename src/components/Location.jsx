function Location(props) {
  return (
    <div className="min-w-fit flex items-center -mt-10 relative z-index-0 min-h-screen px-2 bg-cover bg-center bg-no-repeat bg-fixed">
      {/* <div className="min-w-fit relative z-index-0 min-h-screen bg-[url('/src/assets/bg-vec.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"> */}
      <div className="container bg-yellow-100 border max-w-4xl md:mx-auto h-screen my-24 text-center relative z-index-1">
        <div style={{width: "100%"}}>
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/distance-area-calculator.html">
              distance maps
            </a>
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;
