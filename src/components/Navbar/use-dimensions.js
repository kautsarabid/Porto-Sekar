import { useEffect, useRef } from "react";

// Implementasi sederhana - dalam praktiknya kita akan ingin menempelkan
// listener pada jendela atau resize. Juga gunakan state/layoutEffect daripada ref/effect
// jika ini penting untuk diketahui pada render awal klien.
// Lebih aman untuk mengembalikan null untuk state yang belum diukur.
const useDimensions = (ref) => {
	const dimensions = useRef({ width: 0, height: 0 });

	useEffect(() => {
		dimensions.current.width = ref.current.offsetWidth;
		dimensions.current.height = ref.current.offsetHeight;
	}, []);

	return dimensions.current;
};

export default useDimensions;
