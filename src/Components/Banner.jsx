

const Banner = () => {
    return (
        <div>
            <div className="mt-8 md:mt-8 lg:mt-0  carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <div className="absolute inset-0 bg-black opacity-70"></div>
    <img src="/banner_1.png" className="w-full" />
    <h1 data-aos="zoom-in" className=" absolute inset-0 text-white font-sourceSans text-lg md:text-5xl lg:text-7xl font-bold text-center flex justify-center items-center">WE PERSONALIZE YOUR</h1>
    <h1 data-aos="zoom-in" className=" absolute top-14 md:top-36 lg:top-40 inset-0 text-[#FE3E01] font-sourceSans text-lg md:text-5xl lg:text-7xl font-bold text-center flex justify-center items-center">CORPORATE EVENTS</h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="absolute inset-0 bg-black opacity-70"></div>
    <img src="/banner_2.png" className="w-full" />
    <h1 data-aos="zoom-in" className=" absolute inset-0 text-[#FE3E01] font-sourceSans text-lg md:text-5xl lg:text-6xl font-bold text-center flex justify-center items-center">OUR SPECIAL LOUNGE</h1>
    <h1 data-aos="zoom-in" className=" absolute top-14 md:top-36 lg:top-40 inset-0 text-[white] font-sourceSans text-lg md:text-5xl lg:text-6xl font-bold text-center flex justify-center items-center">FOR BUSINESS PARTY</h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className="absolute inset-0 bg-black opacity-50"></div>
    <img src="banner_3.png" className="w-full" />
    <h1 data-aos="zoom-in" className=" absolute inset-0 text-[white] font-sourceSans text-lg md:text-5xl lg:text-6xl font-bold text-center flex justify-center items-center">WE ENSURE LUNCH AND DINNER</h1>
    <h1 data-aos="zoom-in" className=" absolute top-14 md:top-36 lg:top-40 inset-0 text-[#FE3E01] font-sourceSans text-lg md:text-5xl lg:text-6xl font-bold text-center flex justify-center items-center">FOR BUSINESS MEETING</h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <div className="absolute inset-0 bg-black opacity-70"></div>

    <img src="/banner_4.png" className="w-full" />
    <h1 data-aos="zoom-in" className=" absolute inset-0 text-[#FE3E01] font-sourceSans text-lg md:text-5xl lg:text-6xl font-bold text-center flex justify-center items-center">WE TAKE CARE YOUR</h1>
    <h1 data-aos="zoom-in" className=" absolute top-14 md:top-36 lg:top-40 inset-0 text-[white] font-sourceSans text-lg md:text-5xl lg:text-6xl font-bold text-center flex justify-center items-center">BUSINESS DEALS</h1>
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