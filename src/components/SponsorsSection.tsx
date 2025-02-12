export default function SponsorsSection() {
	return (
		<section
			className="py-20 md:py-32 bg-[#0f0a1e] relative overflow-hidden animate-slide-up"
			id="sponsor">
			<div className="absolute inset-0 bg-gradient-to-b from-[#0f0a1e] via-[#1a0f2e] to-[#0f0a1e] opacity-50"></div>

			<div className="container mx-auto px-4 md:px-6 relative">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-transparent bg-clip-text">
						Our Sponsors
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-[#9b4bff] to-[#e553ff] mx-auto rounded-full"></div>
				</div>

				{/* Sponsors Grid */}
				<div className="grid gap-16">
					{/* Platinum Sponsors */}
					<div className="space-y-8">
						<h3 className="text-2xl text-center text-gray-200 font-bold">
							Platinum Sponsors
						</h3>
						<div className="bg-[#1a0f2e]/50 rounded-2xl p-8 backdrop-blur-sm border border-[#6b3b9e]/20 transform hover:scale-105 transition-all duration-300 cursor-pointer group">
							<div className="flex justify-center items-center h-32">
								<img
									src="/images/sponsors/forestudio.png"
									alt="Platinum Sponsor"
									className="max-h-80 w-180 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
								/>
							</div>
						</div>
					</div>

					{/* Gold Sponsors */}
					<div className="space-y-8">
						<h3 className="text-2xl font-bold text-center text-gray-200">
							Gold Sponsors
						</h3>
						<div className="grid md:grid-cols-2 gap-8">
							<div className="bg-[#1a0f2e]/50 rounded-2xl p-8 backdrop-blur-sm border border-[#6b3b9e]/20 transform hover:scale-105 transition-all duration-300 cursor-pointer group">
								<div className="flex justify-center items-center h-24">
									<img
										src="/images/sponsors/notion_white.png"
										alt="Gold Sponsor"
										className="max-h-100 w-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
									/>
								</div>
							</div>
							<div className="bg-[#1a0f2e]/50 rounded-2xl p-8 backdrop-blur-sm border border-[#6b3b9e]/20 transform hover:scale-105 transition-all duration-300 cursor-pointer group">
								<div className="flex justify-center items-center h-24">
									<img
										src="/images/sponsors/w3pak.png"
										alt="Gold Sponsor"
										className="max-h-100 w-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Organizers Section */}
					<div>
						<div className="text-center mb-8">
							<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-transparent bg-clip-text">
								Collaborators
							</h2>
							<div className="w-20 h-1 bg-gradient-to-r from-[#9b4bff] to-[#e553ff] mx-auto rounded-full"></div>
						</div>

						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-[#1a0f2e]/50 rounded-2xl p-8 backdrop-blur-sm border border-[#6b3b9e]/20 transform hover:scale-105 transition-all duration-300 cursor-pointer group">
								<div className="flex justify-center items-center h-30">
									<img
										src="/images/collaborators/gdsc-logo.png"
										alt="Gold Sponsor"
										className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 w-50 h-55"
									/>
								</div>
							</div>
							<div className="bg-[#1a0f2e]/50 rounded-2xl p-8 backdrop-blur-sm border border-[#6b3b9e]/20 transform hover:scale-105 transition-all duration-300 cursor-pointer group">
								<div className="flex justify-center items-center h-30">
									<img
										src="/images/collaborators/ieee-logo.png"
										alt="Gold Sponsor"
										className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 h-50 w-50"
									/>
								</div>
							</div>
							<div className="bg-[#1a0f2e]/50 rounded-2xl p-8 backdrop-blur-sm border border-[#6b3b9e]/20 transform hover:scale-105 transition-all duration-300 cursor-pointer group">
								<div className="flex justify-center items-center h-30">
									<img
										src="/images/collaborators/ieee-logo.png"
										alt="Gold Sponsor"
										className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 h-90 w-100"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-16 text-center">
					<p className="text-gray-300 mb-6 font-bold">
						Want to become a sponsor?
					</p>
					<button className="bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-white px-8 py-3 rounded-full text-lg font-bold hover:opacity-90 transition-all duration-300 hover:scale-105 transform shadow-lg shadow-[#9b4bff]/20">
						Become a Sponsor
					</button>
				</div>
			</div>

			{/* Background effects */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<div className="absolute top-20 left-10 w-64 h-64 bg-[#9b4bff] rounded-full filter blur-[128px] opacity-20 animate-float"></div>
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e553ff] rounded-full filter blur-[128px] opacity-20 animate-float-delayed"></div>
			</div>
		</section>
	);
}
