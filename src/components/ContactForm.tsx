import { Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useEffect, useState } from "react";

interface FormData {
	name: string;
	email: string;
	message: string;
}

interface FormErrors {
	name?: string;
	email?: string;
	message?: string;
}

type ContactFormProps = {
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
	isMenuOpen: boolean;
};

export default function ContactForm({
	setIsVisible,
	isMenuOpen,
}: ContactFormProps) {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

	useEffect(() => {
		setIsVisible(true);
		document.body.classList.toggle("menu-open", isMenuOpen);

		return () => {
			document.body.classList.remove("menu-open");
		};
	}, [isMenuOpen, setIsVisible]);

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Email is invalid";
		}

		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (validateForm()) {
			setIsSubmitting(true);

			await new Promise((resolve) => setTimeout(resolve, 1000));

			setIsSubmitting(false);
			setSubmitSuccess(true);
			setFormData({ name: "", email: "", message: "" });

			setTimeout(() => setSubmitSuccess(false), 3000);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		// Clear error when user starts typing
		if (errors[name as keyof FormErrors]) {
			setErrors((prev) => ({
				...prev,
				[name]: undefined,
			}));
		}
	};

	return (
		<section className="py-20 md:py-32 bg-[#0f0a1e] relative overflow-hidden animate-slide-up">
			{/* Background Gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#0f0a1e] via-[#1a0f2e] to-[#0f0a1e] opacity-50"></div>

			{/* Content */}
			<div className="container mx-auto px-4 md:px-6 relative">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-transparent bg-clip-text">
						Contact Us
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-[#9b4bff] to-[#e553ff] mx-auto rounded-full"></div>
					<p className="text-gray-300 mt-4 font-bold">
						Get in touch with us for any queries or information
					</p>
				</div>

				<div className="max-w-3xl mx-auto space-y-12">
					{/* Contact Form */}
					<div className="bg-[#1a0f2e]/50 rounded-2xl backdrop-blur-sm border border-[#6b3b9e]/20 p-6 md:p-8">
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-200 mb-1">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className={`w-full px-4 py-3 bg-[#2a1f3e]/50 border ${
										errors.name ? "border-red-500" : "border-[#6b3b9e]/30"
									} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b4bff]/50 text-white placeholder-gray-400`}
									placeholder="Your name"
								/>
								{errors.name && (
									<p className="mt-1 text-sm text-red-500">{errors.name}</p>
								)}
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-200 mb-1">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className={`w-full px-4 py-3 bg-[#2a1f3e]/50 border ${
										errors.email ? "border-red-500" : "border-[#6b3b9e]/30"
									} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b4bff]/50 text-white placeholder-gray-400`}
									placeholder="your.email@example.com"
								/>
								{errors.email && (
									<p className="mt-1 text-sm text-red-500">{errors.email}</p>
								)}
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-200 mb-1">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									rows={4}
									className={`w-full px-4 py-3 bg-[#2a1f3e]/50 border ${
										errors.message ? "border-red-500" : "border-[#6b3b9e]/30"
									} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b4bff]/50 text-white placeholder-gray-400`}
									placeholder="Your message"
								/>
								{errors.message && (
									<p className="mt-1 text-sm text-red-500">{errors.message}</p>
								)}
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
								{isSubmitting ? (
									<span>Sending...</span>
								) : (
									<>
										<Send size={20} />
										<span>Send Message</span>
									</>
								)}
							</button>

							{submitSuccess && (
								<p className="text-green-400 text-center mt-4">
									Message sent successfully!
								</p>
							)}
						</form>
					</div>

					{/* Contact Information */}
					<div className="grid md:grid-cols-3 gap-6 font-bold">
						<div className="bg-[#1a0f2e]/50 rounded-2xl backdrop-blur-sm border border-[#6b3b9e]/20 p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
							<div className="bg-[#9b4bff]/10 p-4 rounded-lg mb-4">
								<MapPin className="w-8 h-8 text-[#9b4bff]" />
							</div>
							<h3 className="text-lg font-bold text-gray-200 mb-2">Address</h3>
							<p className="text-gray-400">
								COMSATS University Islamabad,
								<br />
								Lahore Campus
							</p>
						</div>

						<div className="bg-[#1a0f2e]/50 rounded-2xl backdrop-blur-sm border border-[#6b3b9e]/20 p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
							<div className="bg-[#9b4bff]/10 p-4 rounded-lg mb-4">
								<Phone className="w-8 h-8 text-[#9b4bff]" />
							</div>
							<h3 className="text-lg font-bold text-gray-200 mb-2">Phone</h3>
							<p className="text-gray-400">+92 318 4318539</p>
						</div>

						<div className="bg-[#1a0f2e]/50 rounded-2xl backdrop-blur-sm border border-[#6b3b9e]/20 p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
							<div className="bg-[#9b4bff]/10 p-4 rounded-lg mb-4">
								<Mail className="w-8 h-8 text-[#9b4bff]" />
							</div>
							<h3 className="text-lg font-bold text-gray-200 mb-2">Email</h3>
							<p className="text-gray-400">syedasfar27@gmail.com</p>
						</div>
					</div>

					{/* Map */}
					<div className="bg-[#1a0f2e]/50 rounded-2xl backdrop-blur-sm border border-[#6b3b9e]/20 p-2 h-[300px] overflow-hidden">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5440946014247!2d74.21373547553707!3d31.402153574055843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901146729b42f%3A0x88bf611b0852a5d8!2sCOMSATS%20University%20Islamabad%2C%20Lahore%20Campus!5e0!3m2!1sen!2s!4v1709932447473!5m2!1sen!2s"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="rounded-xl"></iframe>
					</div>
				</div>
			</div>

			{/* Animated Background Elements */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<div className="absolute top-20 left-10 w-64 h-64 bg-[#9b4bff] rounded-full filter blur-[128px] opacity-20 animate-float"></div>
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e553ff] rounded-full filter blur-[128px] opacity-20 animate-float-delayed"></div>
			</div>
		</section>
	);
}
