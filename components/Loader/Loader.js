import { motion } from "framer-motion";
import React from "react";
import Styles from "./index.module.scss";

const parent = {
	animate: {
		transition: { staggerChildren: 0.3 },
	},
};

const img_variants = {
	initial: {
		opacity: 0,
		y: -200,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1.6,
		},
	},
	exit: {
		opacity: 0,
		y: -200,
		transition: {
			ease: "easeInOut",
			duration: 0.8,
		},
	},
};
// no exit property
const main_img_variants = {
	initial: {
		opacity: 0,
		y: -200,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1.6,
		},
	},
};
function Loader({ setLoading }) {
	return (
		<motion.div
			variants={parent}
			onAnimationComplete={setLoading.bind(this, false)}
			initial="initial"
			animate="animate"
			exit="exit"
			className={Styles.loader}>
			<Image name="image1" style={Styles.image1} />
			<motion.figure variants={main_img_variants} className="main__image">
				<motion.img layoutId="mainImg" src="/images/main-image.webp" alt="" />
			</motion.figure>
			<Image name="image2" style={Styles.image2} />
			<Image name="image3" style={Styles.image3} />
			<Image name="image4" style={Styles.image4} />
		</motion.div>
	);
}
const Image = ({ name, style }) => (
	<motion.figure
		variants={img_variants}
		className={`${Styles.image__container} ${style}`}>
		<img src={`/images/${name}.webp`} alt="" />
	</motion.figure>
);
export default Loader;
