export default function IntroSection() {
	return (
		<section className="py-16 md:py-20 bg-[#0f0a1e]/80 backdrop-blur-sm border-t border-[#6b3b9e]/20 animate-fade-in">
			<div className="container mx-auto px-4 md:px-6">
				<div className="max-w-3xl mx-auto ease-in-out">
					<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-transparent bg-clip-text">
						Welcome to TechnoVerse
					</h2>
					<p className="text-base md:text-lg text-gray-300 leading-relaxed text-center">
						TechnoVerse is more than just an event - it's a celebration of
						innovation, technology, and creative thinking. Join us for two days
						of exciting competitions, workshops, and networking opportunities
						that will push the boundaries of what's possible in the tech world.
					</p>
				</div>
			</div>
		</section>
	);
}
