export default function HeroSection({ isVisible }: { isVisible: boolean }) {
	return (
		<div className="min-h-screen flex items-center">
			<div
				className={`relative container mx-auto px-4 md:px-6 transform transition-all duration-1000 ${
					isVisible
						? "translate-x-0 opacity-100"
						: "-translate-x-full opacity-0"
				}`}>
				<div className="max-w-4xl">
					<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight animate-fade-in">
						<span className="text-white">TECHNO</span>
						<span className="bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-transparent bg-clip-text">
							VERSE
						</span>
					</h1>

					<h2 className="text-xl sm:text-2xl md:text-3xl mb-6 leading-relaxed animate-slide-up font-bold">
						<span className="text-white">EMPOWER, </span>
						<span className="bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-transparent bg-clip-text">
							INNOVATIVE,{" "}
						</span>
						<span className="text-white">CONNECT</span>
					</h2>

					<p className="text-lg sm:text-xl md:text-2xl mb-4 leading-relaxed max-w-2xl animate-fade-in text-gray-300 font-bold">
						18-19 May, COMSATS University Islamabad, Lahore Campus
					</p>

					<p className="text-[#9b4bff] text-base sm:text-lg italic mb-8 animate-pulse font-bold">
						Event has started!
					</p>

					<button className="bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-white px-6 sm:px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 transform shadow-lg shadow-[#9b4bff]/20">
						Register Now
					</button>
				</div>
			</div>
		</div>
	);
}
