import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Cards from "./Cards";
import OurServices from "./OurServices";
import Specification from "./Specification";
import OurPortfolio from "./OurPortfolio";
import Footer from "./Footer";

const Home = () => {
	const dataForCards = useLoaderData();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="">
			<Banner></Banner>
			<OurServices></OurServices>
			<Cards key={dataForCards.id} dataForCards={dataForCards}></Cards>
			<Specification></Specification>
			<OurPortfolio></OurPortfolio>
		</div>
	);
};

export default Home;
