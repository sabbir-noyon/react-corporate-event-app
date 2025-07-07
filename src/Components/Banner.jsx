const Banner = () => {
    return (
        <div>
            <div className="mt-8 md:mt-8 lg:mt-0 carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <div className="absolute inset-0 bg-black opacity-70"></div>
    <img src="/banner_1.png" className="w-full" />
    <h1 data-aos="zoom-in" className="absolute inset-0 text-white font-sourceSans font-bold text-center flex justify-center items-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-snug">WE PERSONALIZE YOUR</h1>
    <h2 data-aos="zoom-in" className="absolute top-14 md:top-36 lg:top-40 inset-0 text-[#FE3E01] font-sourceSans font-semibold text-center flex justify-center items-center text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-relaxed mt-5">CORPORATE EVENTS</h2>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a 
  href="#slide4" 
  className="btn btn-circle w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-sm sm:text-base md:text-lg lg:text-xl"
>
  ❮
</a>
      <a 
  href="#slide2" 
  className="btn btn-circle w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-sm sm:text-base md:text-lg lg:text-xl"
>
  ❯
</a>
    </div>
  </div>

  <div id="slide2" className="carousel-item relative w-full">
  <div className="absolute inset-0 bg-black opacity-70"></div>
    <img src="/banner_2.png" className="w-full" />
    <h1 data-aos="zoom-in" className="absolute inset-0 text-[#FE3E01] font-sourceSans font-bold text-center flex justify-center items-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-snug">OUR SPECIAL LOUNGE</h1>
    <h2 data-aos="zoom-in" className="absolute top-14 md:top-36 lg:top-40 inset-0 text-white font-sourceSans font-semibold text-center flex justify-center items-center text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-relaxed mt-5">FOR BUSINESS PARTY</h2>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide3" className="carousel-item relative w-full">
  <div className="absolute inset-0 bg-black opacity-50"></div>
    <img src="banner_3.png" className="w-full" />
    <h1 data-aos="zoom-in" className="absolute inset-0 text-white font-sourceSans font-bold text-center flex justify-center items-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-snug">LUNCH AND DINNER</h1>
    <h2 data-aos="zoom-in" className="absolute top-14 md:top-36 lg:top-40 inset-0 text-[#FE3E01] font-sourceSans font-semibold text-center flex justify-center items-center text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-relaxed mt-5">FOR BUSINESS MEETING</h2>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide4" className="carousel-item relative w-full">
    <div className="absolute inset-0 bg-black opacity-70"></div>
    <img src="/banner_4.png" className="w-full" />
    <h1 data-aos="zoom-in" className="absolute inset-0 text-[#FE3E01] font-sourceSans font-bold text-center flex justify-center items-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-snug">WE TAKE CARE YOUR</h1>
    <h2 data-aos="zoom-in" className="absolute top-14 md:top-36 lg:top-40 inset-0 text-white font-sourceSans font-semibold text-center flex justify-center items-center text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-relaxed mt-5">BUSINESS DEALS</h2>
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
