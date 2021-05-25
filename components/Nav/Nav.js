import { motion } from "framer-motion";
import React from "react";

function Nav() {
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
				<div className="navbar-burger">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className="navbar-menu">
				<div className="navbar-start">
					<div className="navbar-item">
						<button className="button is-light">Design</button>
					</div>
					<div className="navbar-item">
						<button className="button is-light">Development</button>
					</div>
					<div className="navbar-item">
						<button className="button is-light">Branding</button>
					</div>
					<div className="navbar-item">
						<button className="button is-light">Why work with us?</button>
					</div>
				</div>
				<div className="navbar-end">
					<div className="navbar-item">
						<button className="button is-black is-outlined has-text-weight-medium">
							Lets work together
						</button>
					</div>
				</div>
			</div>
		</motion.nav>
	);
}

export default Nav;
