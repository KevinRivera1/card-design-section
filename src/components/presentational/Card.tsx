import IconCar from "../../assets/car";

interface CardInfoProps {
	title: string;
	description: string;
	btn_text: string;
	bgClass?: string;
	btnClass?: string;
}
export const Card = ({ title, description, btn_text, bgClass, btnClass }: CardInfoProps) => {
	return (
		<article className={`p-10 flex items-start justify-around gap-10 flex-col text-white ${bgClass}`}>
			<figure className="flex items-center aspect-square">
				<IconCar className="size-6" />
			</figure>
			<h2 className="text-4xl font-bold">{title}</h2>
			<a href="d" className="description text-balance text-left text-xl">
				{description}
			</a>
			<button type="submit" className={`rounded-full px-8 py-2 bg-white font-medium ${btnClass}`}>
				{btn_text}
			</button>
		</article>
	);
};
