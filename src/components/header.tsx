'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // Determine active section based on scroll position
      const sections = [
        'home',
        'about',
        'schedule',
        'competitions',
        'gallery',
        'sponsors',
        'contact',
      ];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header
      className={cn(
        'h-[90px] fixed left-0 top-0 right-0 transition-all duration-500 z-50 flex items-center bg-navy',
        scrolled && 'bg-primary/95 h-[70px]'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div id="logo" className="mr-auto">
          <Link href="/" className="scrollto">
            <Image
              src="/assets/images/logo.png"
              alt="TechnoVerse Logo"
              width={150}
              height={40}
              className="max-h-24"
            />
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-2">
            <li>
              <a
                className={cn('nav-link', activeSection === 'home' && 'active')}
                href="#hero"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={cn(
                  'nav-link',
                  activeSection === 'about' && 'active'
                )}
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className={cn(
                  'nav-link',
                  activeSection === 'schedule' && 'active'
                )}
                href="#schedule"
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                className={cn(
                  'nav-link',
                  activeSection === 'competitions' && 'active'
                )}
                href="#competitions"
              >
                Competitions
              </a>
            </li>
            <li>
              <a
                className={cn(
                  'nav-link',
                  activeSection === 'gallery' && 'active'
                )}
                href="#gallery"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                className={cn(
                  'nav-link',
                  activeSection === 'sponsors' && 'active'
                )}
                href="#sponsors"
              >
                Sponsors
              </a>
            </li>
            <li>
              <a
                className={cn(
                  'nav-link',
                  activeSection === 'contact' && 'active'
                )}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <button className="md:hidden text-white" onClick={toggleMobileNav}>
          {mobileNavOpen ? (
            <X className="text-white text-2xl" />
          ) : (
            <Menu className="text-white text-2xl" />
          )}
        </button>

        {mobileNavOpen && (
          <div className="md:hidden fixed inset-0 bg-navy/95 z-50">
            <div className="absolute top-[70px] left-4 right-4 bottom-4 overflow-y-auto">
              <ul className="p-4">
                <li className="py-2">
                  <a
                    className="block px-5 py-2 text-white hover:text-turquoise"
                    href="#hero"
                    onClick={toggleMobileNav}
                  >
                    Home
                  </a>
                </li>
                <li className="py-2">
                  <a
                    className="block px-5 py-2 text-white hover:text-turquoise"
                    href="#about"
                    onClick={toggleMobileNav}
                  >
                    About
                  </a>
                </li>
                <li className="py-2">
                  <a
                    className="block px-5 py-2 text-white hover:text-turquoise"
                    href="#schedule"
                    onClick={toggleMobileNav}
                  >
                    Schedule
                  </a>
                </li>
                <li className="py-2">
                  <a
                    className="block px-5 py-2 text-white hover:text-turquoise"
                    href="#competitions"
                    onClick={toggleMobileNav}
                  >
                    Competitions
                  </a>
                </li>
                <li className="py-2">
                  <a
                    className="block px-5 py-2 text-white hover:text-turquoise"
                    href="#gallery"
                    onClick={toggleMobileNav}
                  >
                    Gallery
                  </a>
                </li>
                <li className="py-2">
                  <a
                    className="block px-5 py-2 text-white hover:text-turquoise"
                    href="#sponsors"
                    onClick={toggleMobileNav}
                  >
                    Sponsors
                  </a>
                </li>
                <li className="py-2">
                  <a
                    className="block px-5 py-2 text-white hover:text-turquoise"
                    href="#contact"
                    onClick={toggleMobileNav}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}

        <a
          className="register-btn hidden md:inline-block"
          href="https://tally.so/r/3jBJ9E"
        >
          Register Now
        </a>
      </div>
    </header>
  );
}
