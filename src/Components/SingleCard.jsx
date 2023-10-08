
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const SingleCard = ({eachCard}) => {

    const {id, img_url,title,descripton_short, description_long} = eachCard || {}


    return (
        <Link to={`/dataForCards/${id}`}>
            <div className="card rounded-md " style={{}}>
                <div>
                    <img className="w-screen" src={img_url}></img>
                </div>
            
                <div className="px-2 py-4 rounded-md " style={{}}>
                    <button className=" text-left bg-slate-400 max-w-fit public/Health_Image_1.png public/Health_Image_2.png rounded-md px-3 py-1 my-2 ml-3 mt-2" style={{}}>{id}</button>
                    <h2 className="ml-3 text-xl font-semibold" style={{}}>{title}</h2>
               
                </div>
            </div>
        </Link>
    );
};

export default SingleCard;