

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <div className="absolute inset-0 bg-black opacity-70"></div>
    <img src="/banner_1.png" className="w-full" />
    <h1 className=" absolute inset-0 text-white font-sourceSans text-lg md:text-5xl lg:text-7xl font-bold text-center flex justify-center items-center">WE PERSONALIZE YOUR</h1>
    <h1 className=" absolute top-14 md:top-36 lg:top-40 inset-0 text-[#FE3E01] font-sourceSans text-lg md:text-5xl lg:text-7xl font-bold text-center flex justify-center items-center">CORPORATE EVENTS</h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="absolute inset-0 bg-black opacity-70"></div>
    <img src="/banner_2.png" className="w-full" />
    <h1 className="absolute inset-0 text-white text-4xl text-center flex justify-center items-center">Title 1</h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className="absolute inset-0 bg-black opacity-50"></div>
    <img src="banner_3.png" className="w-full" />
    <h1 className="absolute inset-0 text-white text-4xl text-center flex justify-center items-center">Title 1</h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <div className="absolute inset-0 bg-black opacity-70"></div>

    <img src="/banner_4.png" className="w-full" />
    <h1 className="absolute inset-0 text-white text-4xl text-center flex justify-center items-center">Title 1</h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;