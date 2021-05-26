import { motion } from "framer-motion";
import React from "react";
import Styles from "./index.module.scss";

const banner_variants = {
	animate: {
		transition: { delayChildren: 0.2, staggerChildren: 0.1 },
	},
};
const letterAni = {
	initial: { opacity: 0, y: 400 },
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 0.8,
		},
	},
};
function Banner() {
	return (
		<div>
			<motion.div
				variants={banner_variants}
				initial="initial"
				animate="animate">
				<div className={Styles.top__padding}>
					<div className="is-flex">
						<p className={Styles.text}>
							<AnimatedLetters title="Design" />
						</p>
						<motion.div
							initial={{ opacity: 0, y: 80 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								ease: "easeInOut",
								duration: 1,
								delay: 0.4,
							}}
							className={`is-flex-grow-1 is-hidden-mobile ${Styles.row__message}`}>
							<p className="is-size-4-desktop is-size-5-touch">
								Helpings new startups make a professional brand.
							</p>
						</motion.div>
					</div>
				</div>
				<div className="">
					<p className={`${Styles.text} ${Styles.small__text} has-text-centered`}>
						<AnimatedLetters title="Development" />
					</p>
				</div>
				<div >
					<p className={`${Styles.text} has-text-centered`}>
						<AnimatedLetters title="Branding" />
					</p>
				</div>
			</motion.div>
			<figure className="main__image final">
				<motion.div
					initial={{ scale: 0, opacity: 0, translateY: "-50%" }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
					className={Styles.scroll__down}>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 2, duration: 1, ease: "easeOut" }}>
						<span>scroll</span>
						<br />
						<span>down</span>
					</motion.div>
				</motion.div>
				<motion.img
					layoutId="mainImg"
					transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
					src="/images/main-image.webp"
					alt=""
				/>
			</figure>
		</div>
	);
}

export default Banner;

const AnimatedLetters = ({ title }) => (
	<motion.div variants={banner_variants} initial="initial" animate="animate">
		{[...title].map((letter) => (
			<motion.span variants={letterAni} className={Styles.row__letter}>
				{letter}
			</motion.span>
		))}
	</motion.div>
);
