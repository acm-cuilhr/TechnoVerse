import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-[#0a0b1e] relative">
			{/* Main Footer */}
			<div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
				{/* Logo and Description */}
				<div className="space-y-4 font-bold">
					<div className="flex items-center space-x-3">
						<img src="/logo.svg" alt="TechnoVerse Logo" className="h-10 w-10" />
						<span className="text-xl font-bold bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-transparent bg-clip-text">
							TechnoVerse
						</span>
					</div>
					<p className="text-gray-400 text-sm">
						Become a sponsor and get your logo on our website and promotional
						material.
					</p>
					<button className="bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 transform">
						Become a Sponsor
					</button>
				</div>

				{/* Contact Information */}
				<div className="space-y-4">
					<h3 className="text-lg font-bold text-white">CONTACT US</h3>
					<div className="space-y-2 text-gray-400 text-sm font-bold">
						<p>COMSATS University Islamabad,</p>
						<p>Lahore Campus</p>
						<p>
							<span className="text-gray-300">Registration Lead:</span> Syed
							Asfar Ahmad Bukhari
						</p>
						<p>
							<span className="text-gray-300">Phone:</span> +92 318 4318539
						</p>
						<p>
							<span className="text-gray-300">Email:</span>{" "}
							syedasfar27@gmail.com
						</p>
					</div>
					<div className="flex space-x-4 pt-2">
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-[#1a0f2e] p-2 rounded-full hover:bg-[#9b4bff]/20 transition-colors duration-300">
							<Instagram className="w-5 h-5 text-[#9b4bff]" />
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-[#1a0f2e] p-2 rounded-full hover:bg-[#9b4bff]/20 transition-colors duration-300">
							<Linkedin className="w-5 h-5 text-[#9b4bff]" />
						</a>
					</div>
				</div>

				{/* Quick Links */}
				<div className="space-y-4">
					<h3 className="text-lg font-bold text-white">QUICK LINKS</h3>
					<ul className="space-y-2 text-gray-400 font-bold">
						<li>
							<a
								href="#"
								className="hover:text-[#9b4bff] transition-colors duration-300">
								Home
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-[#9b4bff] transition-colors duration-300">
								About
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-[#9b4bff] transition-colors duration-300">
								Schedule
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-[#9b4bff] transition-colors duration-300">
								Competitions
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-[#9b4bff] transition-colors duration-300">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
