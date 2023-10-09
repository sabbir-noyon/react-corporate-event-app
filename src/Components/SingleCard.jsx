
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const SingleCard = ({eachCard}) => {

    const {id, img_url,title,description_short, description_long} = eachCard || {}


    return (
        
        
        <Link to={`/dataForCards/${id}`}>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="card  lg:h-[560px]  rounded-md shadow-2xl" style={{}}>
                <div>
                    <img className=" w-[100vw] h-40 lg:h-80 rounded-xl" src={img_url}></img>
                </div>
            
                <div className="px-2 py-4 rounded-md h-44 md:h-48 lg:h-40 " style={{}}>
                    
                    <h2 className="ml-3 text-xl text-center font-semibold font-poppins text-[#853dd6]" style={{}}>{title}</h2>
                    <hr className="mt-3 w-3/4 mx-auto border border-[#853dd6]"></hr>
                    <h1 className="mt-4 px-6 text-center font-poppins text-lg text-[#853dd6]">{description_short}</h1>
               
                </div>
                <div className="my-0 mx-auto">
                <button type="submit" className=" text-left bg-[#853dd6] hover:bg-[#6a17c9] text-white text-lg font-medium max-w-fit  rounded-lg px-4 py-2 mt-3 mb-7 ml-3"><Link to={`/dataForCards/${id}`}>Service Details</Link></button>
                </div>
            </div>
        </Link>
        
    );
};

export default SingleCard;