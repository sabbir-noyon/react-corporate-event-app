import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDescription from "./CardDescription";

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
        </div>
    );
};

export default EachCard;