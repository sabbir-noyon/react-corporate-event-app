import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Cards from "./Cards";
import OurServices from "./OurServices";



const Home = () => {

    const dataForCards = useLoaderData();

    return (
        <div className="">
            <Banner></Banner>
            <OurServices></OurServices>
            <Cards key={dataForCards.id} dataForCards={dataForCards}></Cards>
        </div>
    );
};

export default Home;