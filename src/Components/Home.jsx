import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Cards from "./Cards";



const Home = () => {

    const dataForCards = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Cards key={dataForCards.id} dataForCards={dataForCards}></Cards>
        </div>
    );
};

export default Home;