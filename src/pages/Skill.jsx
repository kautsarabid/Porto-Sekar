import Title from "../components/Title";
import Canva from "../assets/icon/canva.png";
import Capcut from "../assets/icon/capcut.png";
import MsExcel from "../assets/icon/ms-excel.webp";
import MsWord from "../assets/icon/ms-word.png";
import MsPpt from "../assets/icon/ppt.png";
import Majoo from "../assets/icon/majoo.png";
import Ncbi from "../assets/icon/ncbi.png";
import Spss from "../assets/icon/spss.webp";
import TiktokShop from "../assets/icon/ttshop.png";
import Card from "../components/Card";

export default function Skill({ names }) {
	const items = [
		{
			image: Canva,
			title: "Canva",
		},
		{
			image: Capcut,
			title: "Capcut",
		},
		{
			image: Majoo,
			title: "Majoo",
		},
		{
			image: Ncbi,
			title: "NCBI",
		},
		{
			image: Spss,
			title: "SPSS",
		},
		{
			image: TiktokShop,
			title: "Tiktok Shop",
		},
		{
			image: MsExcel,
			title: "Microsoft Excel",
		},
		{
			image: MsWord,
			title: "Microsoft Word",
		},
		{
			image: MsPpt,
			title: "Microsoft Powerpoint",
		},
	];

	return (
		<>
			<section className="bg-primary" id="skill">
				<Title names={names} title={"Skill"} classCSS={"stroke-text-odd"} />

				<h2 className="font-excalibur text-3xl tracking-widest px-4 text-tertiary">
					Software SKill
				</h2>
				<div className="grid grid-cols-3 gap-2 p-4 lg:grid-cols-4">
					{items.map((item, index) => (
						<Card
							items={items}
							onClick={() => handleItemClick(item)}
							key={index}
							index={index}
						>
							<Card.ImageSkill
								src={item.image}
								alt={item.title}
								// classCss={"scale-75"}
							/>

							<Card.Body title={item.title} />
						</Card>
					))}
				</div>
			</section>
		</>
	);
}
