import { motion } from "framer-motion";
import React, { useState } from "react";

function Nav() {
	const [IsMenuOpen, setIsMenuOpen] = useState(false);
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
				<div onClick={setIsMenuOpen.bind(this, !IsMenuOpen)} className={`navbar-burger ${IsMenuOpen ? 'is-active' : ''}`}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<motion.div className="navbar-menu is-active">
				<div className="navbar-start">
					<div className="navbar-item">
						<button className="button is-fullwidth is-light">Design</button>
					</div>
					<div className="navbar-item">
						<button className="button is-fullwidth is-light">Development</button>
					</div>
					<div className="navbar-item">
						<button className="button is-fullwidth is-light">Branding</button>
					</div>
					<div className="navbar-item">
						<button className="button is-fullwidth is-light">Why work with us?</button>
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
