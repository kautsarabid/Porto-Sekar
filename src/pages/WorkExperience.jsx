import Title from "../components/Title";
import { useState } from "react";

import Trilogi from "../assets/work-experience/trilogi.png";
import Kanisa from "../assets/work-experience/kanisa.jpg";
import Karyanata from "../assets/work-experience/karyanata.jpg";
import Kkp from "../assets/kkp.jpg";
import Modal from "../components/Modal";

export default function WorkExperience({ names }) {
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
			image: Trilogi,
			title: "Data Entry at Trilogi.Id",
			desc: "Memiliki pengalaman dalam berbagai jenis proyek FnB data entry",
			fulldesc: `Saya adalah seorang data entry yang berpengalaman dengan keahlian dalam memasukkan data dengan cepat dan akurat. Saya memiliki pengalaman dalam berbagai jenis proyek FnB data entry, termasuk:
      <ul className="text-indent">
        <li>Memasukkan data pelanggan</li>
        <li>Memproses pesanan</li>
        <li>Mengekstrak data dari dokumen maupun website</li>
      </ul> Saya mahir menggunakan berbagai perangkat lunak data entry, termasuk Microsoft Excel, Google Sheets, dan Majoo. Saya adalah pekerja yang teliti dan berorientasi pada detail, dengan kemampuan untuk bekerja secara mandiri dan sebagai bagian dari tim. Saya berkomitmen untuk memberikan hasil berkualitas tinggi tepat waktu.`,
		},
		{
			image: Kkp,
			title: "Intern at Puslabfor POLDA Sumut",
			desc: "Mempelajari teknik-teknik forensik",
			fulldesc:
				"Mempelajari teknik-teknik forensik: saya mempelajari beberapa teknik forensik seperti analisis sidik jari, pemeriksaan DNA, pemeriksaan toksikologi, bercak darah dan sperma.Berkontribusi dalam penyelidikan kriminal: saya berperan dalam membantu menyelesaikan kasus kriminal, seperti membantu mengidentifikasi pelaku sesuai dengan bukti yang diserahkan secara ilmiah.Mengembangkan kemampuan problem-solving dan analisis: selama melakukan kegiatan magang di pusat laboratorium forensik membantu saya mengasah kemampuan memecahkan masalah dan menganalisis informasi secara kritis.Meningkatkan keterampilan komunikasi dan teamwork: saya mendapatkan pengalaman dalam bekerja sama dengan tim forensik dan berkomunikasi dengan penegak hukum.Menemukan passion di bidang forensik: saya memiliki ketertarikan di bidang forensik dan keinginan untuk belajar lebih mengenai ilmu forensik.",
		},
		{
			image: Karyanata,
			title: "cashier and admin at Caryanata Cake and Dessert",
			desc: "Mengelola dan memperbarui inventaris toko, termasuk memesan produk baru, menerima pengiriman, dan melacak penjualan.",
			fulldesc:
				"Mampu menangani transaksi penjualan dengan cepat dan akurat, termasuk menerima pembayaran, memberikan kembalian, dan memproses kartu kredit. Memiliki pengetahuan yang baik tentang produk toko dan dapat memberikan rekomendasi kepada pelanggan. Mampu bekerja secara mandiri dan sebagai bagian dari tim.Memiliki kemampuan komunikasi yang baik dan dapat membangun hubungan yang positif dengan pelanggan.",
		},
		{
			image: Kanisa,
			title: "staff sales and marketing at Laluna.co",
			desc: "mengatur tata letak toko yang menarik dan efisien, serta memajang produk dengan cara yang menarik perhatian pelanggan.",
			fulldesc:
				"Saya memiliki pengalaman dalam menyiapkan dan menata toko aksesoris di berbagai event, termasuk festival, dan pameran. Saya mampu mengatur tata letak toko yang menarik dan efisien, serta memajang produk dengan cara yang menarik perhatian pelanggan. Saya senang membantu pelanggan dalam memilih dan membeli aksesoris. Saya memiliki pengetahuan yang luas tentang produk yang tersedia dan dapat memberikan saran yang sesuai dengan kebutuhan dan anggaran pelanggan.Saya adalah pemain tim yang handal dan mampu bekerja sama dengan baik dengan staf lain untuk memastikan kelancaran event. Saya berkomunikasi dengan jelas, membantu menyelesaikan tugas, dan menciptakan suasana yang positif. Saya memiliki kemampuan untuk bekerja secara mandiri dan sebagai bagian dari tim. Saya mampu belajar dengan cepat dan beradaptasi dengan situasi baru.",
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
									className="object-cover object-center w-full h-full "
								/>
							</div>

							<div className="p-2">
								<h2 className="font-bold capitalize">{item.title}</h2>
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
