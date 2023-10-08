import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDescription from "./CardDescription";

const EachCard = () => {

    const [newData, setNewData] = useState({});

   const {id}=  useParams();
   

 

   const loadedData = useLoaderData();

   useEffect(()=>{

    
    const findLoadedData = loadedData?.find(xyz => xyz.id === id) 

   
    setNewData(findLoadedData);
        
  },[]);


    return (
        <div>
            <CardDescription newData={newData} ></CardDescription>
        </div>
    );
};

export default EachCard;