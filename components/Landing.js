/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
const Landing = () => {
	return (
		<div
			style={{ height: "90vh", backgroundColor: "#0249a5", opacity: "0.5" }}
			className="block flex-col content-evenly justify-evenly align-middle"
		>
			<Image
				src={"/landing.jpeg"}
				alt="landing"
				fill
				quality={100}
				sizes="100vw 100vh"
				style={{
					objectFit: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					zIndex: "-1",
					backgroundColor: "#0249A5",
				}}
			/>
			<div
				// style={{ height: "10vh" }}
				className=" flex flex-col .text-center justify-center align-middle text-center mt-4 "
			>
				<h3 className=".font-extrabold text-5xl text-white">Al-Madrasatu al-Hidayah</h3>
			</div>
			<div height="110vh" style={{ height: "50vh" }} className="flex flex-col justify-end pb-9 align-middle text-center ">
				<h3 className="text-white font-bold text-4xl">"Igniting Hearts with Quranic Light"</h3>
				<h4 className="text-white font-normal text-2xl">Nurturing Muslim Children at the "al-Madrasatu al-Hidayah Quranic School"</h4>
			</div>
		</div>
	);
};
export default Landing;
