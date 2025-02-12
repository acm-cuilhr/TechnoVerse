import React, { useState } from "react";
import background from "./assets/10.jpg";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import SponsorsSection from "./components/SponsorsSection";
import "./index.css";

const App: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [isVisible, setIsVisible] = useState<boolean>(false);

	return (
		<div className="min-h-screen bg-[#0f0a1e] text-white relative overflow-x-hidden">
			{/* Background Image with Gradient Overlay */}
			<div
				className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-1000"
				style={{
					backgroundImage: `url(${background})`,
					transform: isVisible ? "scale(1)" : "scale(1.1)",
				}}>
				<div className="absolute inset-0 bg-gradient-to-br from-[#0f0a1e]/90 via-[#1f0f3e]/80 to-[#2d0f4e]/70" />
			</div>

			{/* Header */}
			<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

			{/* Content Container */}
			<div className="relative min-h-screen">
				{/* Hero Section */}
				<HeroSection isVisible={isVisible} />

				{/* Introduction Section */}
				<IntroSection />

				{/* Sponsors Section */}
				<SponsorsSection />

				{/* Contact Section */}
				<ContactForm setIsVisible={setIsVisible} isMenuOpen={isMenuOpen} />

				{/* Footer */}
				<Footer />
			</div>
		</div>
	);
};
export default App;
