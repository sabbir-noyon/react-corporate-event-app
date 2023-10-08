

// eslint-disable-next-line react/prop-types
const CardDescription = ({newData}) => {

    const {id,img_url,title,description_short, description_long} = newData || {}
    return (
        <>
        
            <div className="relative">
                {/* The image */}
                <img className="lg:w-[1400px] lg:h-[700px] my-0 mx-auto" src={newData.id === '1'? '../../health-rec.png': newData.id === '2'? '../../Rectangle 4288.png': newData.id === '3'? '../../cloth-rec.png': newData.id === '4'? '../../food-rec.png': '' } alt={newData.id} />

                {/* The overlay */}
                <div className=" absolute bottom-0 left-[260px] lg:w-[1400px] lg:h-[130px] bg-opacity-50 bg-black">
                    {/* Inside the overlay */}
                    <button onClick={{}} className="  hover:bg-[#d0290c] lg:mt-[37px] ml-[] lg:ml-[37px] rounded-[4px] lg:w-[179px] lg:h-[56px] bg-[#FF444A] text-[16px] md:text-[20px] lg:text-[20px] font-medium md:font-semibold  lg:font-semibold px-4 py-2 lg:px-4 lg:py-2 text-white" type="submit" style={{}} >Donate ${newData.title}</button>
                </div>
                
            </div>

            <div className="lg:px-64 lg:pb-20 pb-10 lg:pt-0">
                <h1 className=" text-center md:text-left lg:text-left lg:mt-14 mt-6 text-[30px] lg:text-[40px] font-bold text-[#0B0B0B]">{newData.title}</h1>
                <p className="lg:mt-6 mt-4 text-[18px] text-[#0B0B0B] font-normal">{newData.description_long}</p>

            </div>

        </>

        
    );
};

export default CardDescription;