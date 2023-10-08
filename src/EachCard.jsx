import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDescription from "./CardDescription";
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
        <div>
            {/* <CardDescription newData={newData} ></CardDescription> */}
            <h1>hi i am each card+{newData.title}</h1>
            <div>
            <button type="submit" className=" text-left bg-[#853dd6] text-white text-lg font-medium max-w-fit  rounded-lg px-4 py-2 mt-3 mb-7 ml-3"><Link to={`/`}>Go Home</Link></button>
            </div>
        </div>
    );
};

export default EachCard;