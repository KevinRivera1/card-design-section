import { Card } from "../presentational/Card";

const cardData = [
	{
		title: "SEDANS",
		description:
			"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
		btn_text: "Learn More",
		bgStyle: "bg-orange-400",
		btnClass: "text-orange-400",
	},
	{
		title: "SUVS",
		description:
			"Take on SUV for in spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures",
		btn_text: "Learn More",
		bgStyle: "bg-[#016972]",
		btnClass: "text-[#016972]",
	},
	{
		title: "LUXURY",
		description:
			"Cruise in the best car brands without the bloated prices. enjoy the enhanced comfort of a luxury rental and arrive in style.",
		btn_text: "Learn More",
		bgStyle: "bg-[#00403f]",
		btnClass: "text-[#00403f]",
	},
];

export const ContainerLayoutCard = () => {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-3  min-h-[90vh]">
			{cardData.map((item, index) => (
				<Card
					key={index}
					title={item.title}
					description={item.description}
					btn_text={item.btn_text}
					bgClass={item.bgStyle}
					btnClass={item.btnClass}
				/>
			))}
		</section>
	);
};
