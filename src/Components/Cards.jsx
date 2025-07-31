import SingleCard from "./SingleCard";

// eslint-disable-next-line react/prop-types
const Cards = ({ dataForCards }) => {
	return (
		<div className="cards-wrapper mt-[-20px] md:mt-0 lg:mt-0 md:pt-10 lg:pt-20 lg:pb-20">
			<div className="cards-container px-4 md:px-2 lg:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{
					// eslint-disable-next-line react/prop-types
					dataForCards?.map((eachCard) => (
						<SingleCard key={eachCard.id} eachCard={eachCard}></SingleCard>
					))
				}
			</div>
		</div>
	);
};

export default Cards;
