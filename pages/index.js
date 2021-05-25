import { VscGithubAlt } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import Banner from "../components/Banner/Banner";
import Loader from "../components/Loader/Loader";
import Nav from "../components/Nav/Nav";

export default function Home() {
	const [isLoading, setisLoading] = useState(true);

	return (
		<AnimateSharedLayout type="crossfade">
			<AnimatePresence>
				{isLoading ? (
					<motion.div key="loading">
						<Loader key="loading" setLoading={setisLoading} />
					</motion.div>
				) : (
					<>
						<Nav />
						<Banner />
						<footer className="footer has-text-centered has-text-grey">
							<div className="buttons is-centered">
								<a
									href="https://github.com/dhruvindsd-dev"
									target="noreferrer"
									className="button is-light">
									<span className="icon is-large">
										<VscGithubAlt />
									</span>
								</a>
								<a
									href="https://www.linkedin.com/in/dhruvin-deshpande"
									target="noreferrer"
									className="button is-light">
									<span className="icon is-large">
										<FaLinkedin />
									</span>
								</a>
							</div>
							<p>Created By Dhruvin</p>
							<p>Contact me </p>
							<a href="mailto:dhruvinddev@gmail.com">dhruvinddev@gmail.com</a>
						</footer>{" "}
					</>
				)}
			</AnimatePresence>
		</AnimateSharedLayout>
	);
}
