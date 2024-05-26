import Title from "../components/Title";
import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Kkp from "../assets/kkp.jpg";

import { useState } from "react";
import Modal from "../components/Modal";

export default function Project({ names }) {
	const [showModal, setShowModal] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);

	const handleItemClick = (item) => {
		setSelectedItem(item);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setSelectedItem(null);
	};

	const items = [
		{
			image: Image1,
			title: "Design Poster",
			desc: "Membuat Poster Pencarian Pasien Koas Kedokteran Gigi",
		},
		{
			image: Kkp,
			title: "Intern di Puslabfor POLDA Sumut",
			desc: "Mempelajari teknik-teknik forensik",
			fulldesc:
				"Mempelajari teknik-teknik forensik: saya mempelajari beberapa teknik forensik seperti analisis sidik jari, pemeriksaan DNA, pemeriksaan toksikologi, bercak darah dan sperma.Berkontribusi dalam penyelidikan kriminal: saya berperan dalam membantu menyelesaikan kasus kriminal, seperti membantu mengidentifikasi pelaku sesuai dengan bukti yang diserahkan secara ilmiah.Mengembangkan kemampuan problem-solving dan analisis: selama melakukan kegiatan magang di pusat laboratorium forensik membantu saya mengasah kemampuan memecahkan masalah dan menganalisis informasi secara kritis.Meningkatkan keterampilan komunikasi dan teamwork: saya mendapatkan pengalaman dalam bekerja sama dengan tim forensik dan berkomunikasi dengan penegak hukum.Menemukan passion di bidang forensik: saya memiliki ketertarikan di bidang forensik dan keinginan untuk belajar lebih mengenai ilmu forensik.",
		},
		{
			image: Image1,
			title: "Project 3",
			desc: "lorem",
		},
	];
	return (
		<>
			<section>
				<Title names={names} title={"Project"} />

				<div className="grid grid-cols-2 gap-2 p-4">
					{items.map((item, index) => (
						<div
							className="flex flex-col items-start  border h-full w-full rounded-md overflow-hidden cursor-pointer"
							key={index}
							onClick={() => handleItemClick(item)}
						>
							<div className="w-full overflow-hidden border h-[150px]">
								<img
									src={item.image}
									alt={`foto ${item.title}`}
									className="object-cover object-top w-full h-full "
								/>
							</div>
							{/* <div
								className="w-full h-full bg-top"
								style={{
									backgroundImage: `url(${item.image})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							></div> */}

							<div className="p-2">
								<h2 className="font-bold">{item.title}</h2>
								<p className="text-sm">{item.desc}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{selectedItem && (
				<Modal
					show={showModal}
					onClose={handleCloseModal}
					title={selectedItem.title}
					desc={selectedItem.desc}
					fulldesc={selectedItem.fulldesc}
					image={selectedItem.image}
				/>
			)}
		</>
	);
}
