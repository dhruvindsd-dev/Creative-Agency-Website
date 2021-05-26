import { motion } from "framer-motion";
import React, { useState } from "react";

function Nav() {
	let initialVal;
	if (typeof window !== "undefined") initialVal = window.innerWidth > 1023;
	const [IsMenuOpen, setIsMenuOpen] = useState(initialVal);
	return (
		<motion.nav
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
			className="navbar is-spaced is-light">
			<div className="navbar-brand mr-6">
				<div className="navbar-item">
					<p className="title">Sleks</p>
				</div>
				<div
					onClick={setIsMenuOpen.bind(this, !IsMenuOpen)}
					className={`navbar-burger ${IsMenuOpen ? "is-active" : ""}`}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<motion.div
				initial={{ height: "0" }}
				animate={{
					height: IsMenuOpen ? "auto" : "0",
					boxShadow: "#c5c5c54a 0px 8px 10px",
				}}
				transition={{
					ease: [0.6, 0.01, -0.05, 0.95],
					duration: 0.8,
				}}
				className="navbar-menu is-active">
				<div className="navbar-start">
					<div className="navbar-item">
						<button className="button is-fullwidth is-light">Design</button>
					</div>
					<div className="navbar-item">
						<button className="button is-fullwidth is-light">
							Development
						</button>
					</div>
					<div className="navbar-item">
						<button className="button is-fullwidth is-light">Branding</button>
					</div>
					<div className="navbar-item">
						<button className="button is-fullwidth is-light">
							Why work with us?
						</button>
					</div>
				</div>
				<div className="navbar-end">
					<div className="navbar-item">
						<button className="button is-fullwidth is-black is-outlined has-text-weight-medium">
							Lets work together
						</button>
					</div>
				</div>
			</motion.div>
		</motion.nav>
	);
}

export default Nav;
