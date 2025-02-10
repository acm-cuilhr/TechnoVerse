import React, { useEffect, useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, Send, Instagram, Linkedin } from 'lucide-react';
import './index.css';
import background from './assets/10.jpg';
import logo from './assets/logo (1).png';
import platinumSpon from './assets/sponsors/forestudio.png';
import sponser from './assets/sponsors/Notion_white.png';
import sponser2 from './assets/sponsors/w3pak.png';
import org1 from './assets/organisers/acm-logo.png.png'
import org2 from './assets/organisers/ieee-logo.png'
import org3 from './assets/organisers/gdsc-logo.png'
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

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.classList.toggle('menu-open', isMenuOpen);
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      
      setTimeout(() => setSubmitSuccess(false), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0a1e] text-white relative overflow-x-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-1000"
        style={{
          backgroundImage: `url(${background})`,
          transform: isVisible ? 'scale(1)' : 'scale(1.1)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0a1e]/90 via-[#1f0f3e]/80 to-[#2d0f4e]/70 backdrop-blur-[2px]"></div>
      </div>

      {/* Header */}
      <header className="fixed w-full top-0 z-50 backdrop-blur-sm border-b border-[#6b3b9e]/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center space-x-1">
              <img src={logo} alt="TechnoVerse Logo" className="h-8 w-8 md:h-10 md:w-10" />
              <span className="text-lg md:text-base font-bold bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-transparent bg-clip-text">TechnoVerse</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-8">
              <a href="#" className="hover:text-[#9b4bff] transition-colors text-sm lg:text-base">Home</a>
              <a href="#" className="hover:text-[#9b4bff] transition-colors text-sm lg:text-base">About</a>
              <a href="#" className="hover:text-[#9b4bff] transition-colors text-sm lg:text-base">Events</a>
              <a href="#" className="hover:text-[#9b4bff] transition-colors text-sm lg:text-base">Schedule</a>
              <a href="#" className="hover:text-[#9b4bff] transition-colors text-sm lg:text-base">Competitions</a>
              <a href="#" className="hover:text-[#9b4bff] transition-colors text-sm lg:text-base">Gallery</a>
              <a href="#" className="hover:text-[#9b4bff] transition-colors text-sm lg:text-base">Sponsors</a>
              <a href="#" className="hover:text-[#9b4bff] transition-colors text-sm lg:text-base">Contact</a>
              <button className="bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-white px-4 py-2 rounded-full text-sm lg:text-base font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-[#9b4bff]/20">
                Register Now
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden fixed inset-0 top-16 bg-[#0f0a1e]/80 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="px-4 py-6 space-y-4 bg-[#0f0a1e]/100">
            <a href="#" className="block text-lg hover:text-[#9b4bff] transition-colors">Home</a>
            <a href="#" className="block text-lg hover:text-[#9b4bff] transition-colors">About</a>
            <a href="#" className="block text-lg hover:text-[#9b4bff] transition-colors">Events</a>
            <a href="#" className="block text-lg hover:text-[#9b4bff] transition-colors">Schedule</a>
            <a href="#" className="block text-lg hover:text-[#9b4bff] transition-colors">Competitions</a>
            <a href="#" className="block text-lg hover:text-[#9b4bff] transition-colors">Gallery</a>
            <a href="#" className="block text-lg hover:text-[#9b4bff] transition-colors">Sponsors</a>
            <a href="#" className="block text-lg hover:text-[#9b4bff] transition-colors">Contact</a>
            <button className="w-full bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-white px-6 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-[#9b4bff]/20 mt-6">
              Register Now
            </button>
          </div>
        </div>
      </header>

      {/* Content Container */}
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center">
          <div className={`relative container mx-auto px-4 md:px-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <div className="max-w-4xl">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight animate-fade-in">
                <span className="text-white">TECHNO</span>
                <span className="bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-transparent bg-clip-text">VERSE</span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 leading-relaxed animate-slide-up font-bold">
                <span className="text-white">EMPOWER, </span>
                <span className="bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-transparent bg-clip-text">INNOVATIVE, </span>
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

        {/* Introduction Section */}
        <section className="py-16 md:py-20 bg-[#0f0a1e]/80 backdrop-blur-sm border-t border-[#6b3b9e]/20 animate-fade-in">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto ease-in-out">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-transparent bg-clip-text">
                Welcome to TechnoVerse
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center">
                TechnoVerse is more than just an event - it's a celebration of innovation, 
                technology, and creative thinking. Join us for two days of exciting competitions, 
                workshops, and networking opportunities that will push the boundaries of what's 
                possible in the tech world.
              </p>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-20 md:py-32 bg-[#0f0a1e] relative overflow-hidden animate-slide-up" id="sponsor">
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
              <h3 className="text-2xl text-center text-gray-200 font-bold">Platinum Sponsors</h3>
              <div className="bg-[#1a0f2e]/50 rounded-2xl p-8 backdrop-blur-sm border border-[#6b3b9e]/20 transform hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="flex justify-center items-center h-32">
                  <img
                    src={platinumSpon}
                    alt="Platinum Sponsor"
                    className="max-h-80 w-180 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Gold Sponsors */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center text-gray-200">Gold Sponsors</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#1a0f2e]/50 rounded-2xl p-8 backdrop-blur-sm border border-[#6b3b9e]/20 transform hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="flex justify-center items-center h-24">
                    <img
                      src={sponser}
                      alt="Gold Sponsor"
                      className="max-h-100 w-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
                <div className="bg-[#1a0f2e]/50 rounded-2xl p-8 backdrop-blur-sm border border-[#6b3b9e]/20 transform hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="flex justify-center items-center h-24">
                    <img
                      src={sponser2}
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
                  Organizers
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#9b4bff] to-[#e553ff] mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1a0f2e]/50 rounded-2xl p-8 backdrop-blur-sm border border-[#6b3b9e]/20 transform hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="flex justify-center items-center h-30">
                    <img
                      src={org1}
                      alt="Gold Sponsor"
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 w-50 h-55"
                    />
                  </div>
                </div>
                <div className="bg-[#1a0f2e]/50 rounded-2xl p-8 backdrop-blur-sm border border-[#6b3b9e]/20 transform hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="flex justify-center items-center h-30">
                    <img
                      src={org2}
                      alt="Gold Sponsor"
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 h-50 w-50"
                    />
                  </div>
                </div>
                <div className="bg-[#1a0f2e]/50 rounded-2xl p-8 backdrop-blur-sm border border-[#6b3b9e]/20 transform hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="flex justify-center items-center h-30">
                    <img
                      src={org3}
                      alt="Gold Sponsor"
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 h-90 w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-300 mb-6 font-bold">Want to become a sponsor?</p>
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
        {/* Contact Section */}
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
              <p className="text-gray-300 mt-4 font-bold">Get in touch with us for any queries or information</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-12">
              {/* Contact Form */}
              <div className="bg-[#1a0f2e]/50 rounded-2xl backdrop-blur-sm border border-[#6b3b9e]/20 p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-[#2a1f3e]/50 border ${errors.name ? 'border-red-500' : 'border-[#6b3b9e]/30'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b4bff]/50 text-white placeholder-gray-400`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-[#2a1f3e]/50 border ${errors.email ? 'border-red-500' : 'border-[#6b3b9e]/30'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b4bff]/50 text-white placeholder-gray-400`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-3 bg-[#2a1f3e]/50 border ${errors.message ? 'border-red-500' : 'border-[#6b3b9e]/30'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b4bff]/50 text-white placeholder-gray-400`}
                      placeholder="Your message"
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
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
                    <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
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
                  <p className="text-gray-400">COMSATS University Islamabad,<br />Lahore Campus</p>
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
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#9b4bff] rounded-full filter blur-[128px] opacity-20 animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e553ff] rounded-full filter blur-[128px] opacity-20 animate-float-delayed"></div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0a0b1e] relative">
          {/* Main Footer */}
          <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4 font-bold">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="TechnoVerse Logo" className="h-10 w-10" />
                <span className="text-xl font-bold bg-gradient-to-r from-[#9b4bff] to-[#e553ff] text-transparent bg-clip-text">
                  TechnoVerse
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Become a sponsor and get your logo on our website and promotional material.
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
                <p><span className="text-gray-300">Registration Lead:</span> Syed Asfar Ahmad Bukhari</p>
                <p><span className="text-gray-300">Phone:</span> +92 318 4318539</p>
                <p><span className="text-gray-300">Email:</span> syedasfar27@gmail.com</p>
              </div>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a0f2e] p-2 rounded-full hover:bg-[#9b4bff]/20 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5 text-[#9b4bff]" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a0f2e] p-2 rounded-full hover:bg-[#9b4bff]/20 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 text-[#9b4bff]" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">QUICK LINKS</h3>
              <ul className="space-y-2 text-gray-400 font-bold">
                <li>
                  <a href="#" className="hover:text-[#9b4bff] transition-colors duration-300">Home</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#9b4bff] transition-colors duration-300">About</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#9b4bff] transition-colors duration-300">Schedule</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#9b4bff] transition-colors duration-300">Competitions</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#9b4bff] transition-colors duration-300">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          </footer>
          </div>
          </div>

)}
export default App;