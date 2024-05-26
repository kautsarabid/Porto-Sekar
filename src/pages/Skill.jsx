import Title from "../components/Title";
import Canva from "../assets/icon/canva.jpg";
import Capcut from "../assets/icon/capcut.jpg";
import Gsheets from "../assets/icon/google-sheets.jpg";
import Majoo from "../assets/icon/majoo.jpg";
import Ncbi from "../assets/icon/ncbi.jpg";
import Spss from "../assets/icon/spss.jpg";
import TiktokShop from "../assets/icon/tiktok-shop.jpg";

export default function Skill({ names }) {
	const items = [
		{
			image: Canva,
			title: "Canva",
			desc: "Membuat Poster Pencarian Pasien Koas Kedokteran Gigi",
		},
		{
			image: Capcut,
			title: "Capcut",
			desc: "lorem",
		},
		{
			image: Gsheets,
			title: "Google Sheets",
			desc: "lorem",
		},
		{
			image: Majoo,
			title: "Majoo",
			desc: "lorem",
		},
		{
			image: Ncbi,
			title: "NCBI",
			desc: "lorem",
		},
		{
			image: Spss,
			title: "SPSS",
			desc: "lorem",
		},
		{
			image: TiktokShop,
			title: "Tiktok Shop",
			desc: "lorem",
		},
	];
	return (
		<>
			<section>
				<Title names={names} title={"Skill"} />

				<h2 className="font-excalibur text-2xl tracking-widest px-2">
					Software SKill
				</h2>
				<div className="grid grid-cols-3 gap-2 p-4">
					{items.map((item, index) => (
						<div
							className="flex flex-col items-start justify-center border h-[150px] w-full rounded-md"
							key={index}
						>
							<div
								className="w-full h-full bg-cover bg-center scale-75"
								style={{
									backgroundImage: `url(${item.image})`,
								}}
							></div>

							<div className="p-2">
								<h2>{item.title}</h2>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
