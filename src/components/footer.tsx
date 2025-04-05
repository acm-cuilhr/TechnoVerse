'use client';

import Image from 'next/image';
import { ArrowUp, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-navy text-white text-sm relative">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="TechnoVerse"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-white text-xl">
                Techno<span className="text-turquoise">Verse</span>
              </span>
            </div>
            <p className="mt-3 mb-4">
              Become a sponsor and get your logo on our website and promotional
              material.
            </p>
            <a
              href="https://tally.so/r/3J6J9C"
              className="register-btn inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Become a Sponsor
            </a>
          </div>

          <div>
            <h4 className="text-base font-bold text-white uppercase mb-4">
              Contact Us
            </h4>
            <p className="mb-4">
              COMSATS University Islamabad,
              <br />
              Lahore Campus
              <br />
              <strong>Registration Lead:</strong> Syed Asfar Ahmad Bukhari
              <br />
              <strong>Phone:</strong>{' '}
              <a href="tel:+923184318539" className="hover:text-turquoise">
                +92 318 4318539
              </a>
              <br />
              <strong>Email:</strong>{' '}
              <a
                href="mailto:syedasfar27@gmail.com"
                className="hover:text-turquoise"
              >
                syedasfar27@gmail.com
              </a>
              <br />
            </p>

            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/technoverse_cuilahore/"
                className="bg-[#222636] text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-turquoise transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/technoverse-cui-lahore/"
                className="bg-[#222636] text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-turquoise transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          &copy; Copyright <strong>TechnoVerse</strong>. All Rights Reserved
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed right-6 bottom-6 bg-turquoise text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all z-10"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
}
