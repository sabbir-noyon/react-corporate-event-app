import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import { Link } from "react-router-dom";

const EachCard = () => {

    
    const [newData, setNewData] = useState({});

    const {id}=  useParams();
    console.log(id, typeof(id));
    const loadedData = useLoaderData();
    console.log(loadedData);
    

    useEffect(()=>{

    
        const findLoadedData = loadedData?.find(xyz => xyz.id == id);
        setNewData(findLoadedData);
            
      },[]);
    
return (
        <div className="lg:pt-7 lg:pb-14 lg:px-10">
            
            
            <img className="rounded-xl lg:w-[1400px] lg:h-[700px] my-0 mx-auto" src={newData.img_url}></img>
            <h1 className="font-poppins text-center md:text-center lg:text-center lg:mt-8 mt-6 text-[30px] lg:text-[40px] font-bold text-[#853dd6]">{newData.title}</h1>
            <p className="font-poppins text-center font-medium lg:px-10 lg:mt-6 mt-4 text-[18px] text-[#853dd6] ">{newData.description_long}</p>
            <div className="text-center mt-3 lg:mt-8"> 
            <button type="submit" className=" text-left bg-[#853dd6] hover:bg-[#6920bc] text-white text-lg font-medium max-w-fit  rounded-lg px-4 py-2 mt-3 mb-7 ml-3"><Link to={`/`}>Back Home</Link></button>
            </div>
        </div>
    );
};

export default EachCard;