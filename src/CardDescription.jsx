const CardDescription = ({ newData }) => {
  const { id, img_url, title, description_short, description_long } = newData || {};

  return (
    <>
      {/* Image Section */}
      <div className="relative w-full max-w-[1400px] mx-auto">
        <img
          className="w-full h-56 sm:h-72 md:h-96 lg:h-[700px] object-cover"
          src={
            id === '1'
              ? '../../health-rec.png'
              : id === '2'
              ? '../../Rectangle 4288.png'
              : id === '3'
              ? '../../cloth-rec.png'
              : id === '4'
              ? '../../food-rec.png'
              : ''
          }
          alt={id}
        />

        {/* Overlay Button */}
        <div className="absolute bottom-4 left-4 sm:left-8 md:left-12 lg:left-24 bg-black bg-opacity-50 p-2 rounded">
          <button
            className="bg-[#FF444A] hover:bg-[#d0290c] text-white text-sm sm:text-base md:text-lg font-medium px-4 py-2 rounded"
            type="button"
          >
            Donate ${title}
          </button>
        </div>
      </div>

      {/* Description Section */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 2xl:px-64 py-6 sm:py-8 md:py-12 lg:py-16 max-w-[1400px] mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0B0B0B] text-center md:text-left">
          {title}
        </h1>

        <p className="mt-3 text-sm sm:text-base md:text-lg text-[#0B0B0B] leading-relaxed">
          {description_long}
        </p>
      </div>
    </>
  );
};

export default CardDescription;
