import { Menu, X } from "lucide-react";
import React from "react";

type Props = {
	isMenuOpen: boolean;
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ isMenuOpen, setIsMenuOpen }: Props) {
	return (
		<header className="fixed w-full top-0 z-50 backdrop-blur-sm border-b border-[#6b3b9e]/20">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16 md:h-20">
					<div className="flex items-center space-x-1">
						<img
							src="/logo.svg"
							alt="TechnoVerse Logo"
							className="h-8 w-8 md:h-10 md:w-10"
						/>
						<span className="text-lg md:text-base font-bold bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-transparent bg-clip-text">
							TechnoVerse
						</span>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-2 lg:space-x-8">
						<a
							href="#"
							className="hover:text-[#9b4bff] transition-colors text-sm lg:text-base">
							Home
						</a>
						<a
							href="#"
							className="hover:text-[#9b4bff] transition-colors text-sm lg:text-base">
							About
						</a>
						<a
							href="#"
							className="hover:text-[#9b4bff] transition-colors text-sm lg:text-base">
							Events
						</a>
						<a
							href="#"
							className="hover:text-[#9b4bff] transition-colors text-sm lg:text-base">
							Schedule
						</a>
						<a
							href="#"
							className="hover:text-[#9b4bff] transition-colors text-sm lg:text-base">
							Competitions
						</a>
						<a
							href="#"
							className="hover:text-[#9b4bff] transition-colors text-sm lg:text-base">
							Gallery
						</a>
						<a
							href="#"
							className="hover:text-[#9b4bff] transition-colors text-sm lg:text-base">
							Sponsors
						</a>
						<a
							href="#"
							className="hover:text-[#9b4bff] transition-colors text-sm lg:text-base">
							Contact
						</a>
						<button className="bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-white px-4 py-2 rounded-full text-sm lg:text-base font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-[#9b4bff]/20">
							Register Now
						</button>
					</nav>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden text-white p-2"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu">
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			<div
				className={`md:hidden fixed inset-0 top-16 bg-[#0f0a1e]/80 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
					isMenuOpen ? "translate-x-0" : "translate-x-full"
				}`}>
				<div className="px-4 py-6 space-y-4 bg-[#0f0a1e]/100">
					<a
						href="#"
						className="block text-lg hover:text-[#9b4bff] transition-colors">
						Home
					</a>
					<a
						href="#"
						className="block text-lg hover:text-[#9b4bff] transition-colors">
						About
					</a>
					<a
						href="#"
						className="block text-lg hover:text-[#9b4bff] transition-colors">
						Events
					</a>
					<a
						href="#"
						className="block text-lg hover:text-[#9b4bff] transition-colors">
						Schedule
					</a>
					<a
						href="#"
						className="block text-lg hover:text-[#9b4bff] transition-colors">
						Competitions
					</a>
					<a
						href="#"
						className="block text-lg hover:text-[#9b4bff] transition-colors">
						Gallery
					</a>
					<a
						href="#"
						className="block text-lg hover:text-[#9b4bff] transition-colors">
						Sponsors
					</a>
					<a
						href="#"
						className="block text-lg hover:text-[#9b4bff] transition-colors">
						Contact
					</a>
					<button className="w-full bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-white px-6 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-[#9b4bff]/20 mt-6">
						Register Now
					</button>
				</div>
			</div>
		</header>
	);
}
