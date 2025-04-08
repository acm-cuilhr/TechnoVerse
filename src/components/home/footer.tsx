// src/components/layout/footer.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const TECHNOVERSE_INSTAGRAM_URL =
  'https://www.instagram.com/technoverse_cuilahore/';
const TECHNOVERSE_LINKEDIN_URL =
  'https://www.linkedin.com/company/technoverse-cui-lahore/';
const ACM_INSTAGRAM_URL = 'https://instagram.com/acm.cuilhr';
const ACM_LINKEDIN_URL = 'https://linkedin.com/company/acmcuilhr';
const CONTACT_EMAIL = 'acmchapter@cuilahore.edu.pk';
const SPONSOR_FORM_URL = process.env.NEXT_PUBLIC_SPONSOR_FORM_URL || '#';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-primary text-primary-foreground/90 relative border-t border-border/20">
      <div className="container mx-auto pb-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-8">
          <div>
            <div className="flex items-center">
              <Image
                src="/assets/images/logo.png"
                alt="TechnoVerse Logo"
                width={180}
                height={20}
                className="mb-2"
              />
              {/* <span className="text-xl font-semibold text-primary-foreground">
                Techno<span className="text-secondary">Verse</span>
              </span> */}
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6">
              Empowering the next generation of innovators through technology,
              collaboration, and competition. Organized by ACM CUI Lahore.
            </p>

            <Button
              variant="secondary"
              size="sm"
              asChild
              className="text-white"
            >
              <a
                href={SPONSOR_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Sponsor
              </a>
            </Button>
          </div>

          <div>
            <h4 className="text-base font-semibold text-primary-foreground uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin size={16} className="mt-1 shrink-0 text-secondary" />
                <span>
                  COMSATS University Islamabad, Lahore Campus, Defence Road, Off
                  Raiwind Road, Lahore.
                </span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors">
                <Mail size={16} className="shrink-0 text-secondary" />
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
            </ul>
          </div>
          {/* Column 3: Follow Us */}
          <div>
            <h4 className="text-base font-semibold text-primary-foreground uppercase tracking-wider mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4">
              {/* TechnoVerse Socials */}
              <div>
                <p className="text-xs text-secondary font-medium mb-2">
                  TechnoVerse:
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={TECHNOVERSE_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TechnoVerse Instagram"
                    title="TechnoVerse Instagram"
                    className="bg-primary-foreground/10 text-primary-foreground hover:bg-secondary hover:text-secondary-foreground w-9 h-9 rounded-md flex items-center justify-center transition-colors"
                  >
                    {' '}
                    <Instagram size={18} />{' '}
                  </Link>
                  <Link
                    href={TECHNOVERSE_LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TechnoVerse LinkedIn"
                    title="TechnoVerse LinkedIn"
                    className="bg-primary-foreground/10 text-primary-foreground hover:bg-secondary hover:text-secondary-foreground w-9 h-9 rounded-md flex items-center justify-center transition-colors"
                  >
                    {' '}
                    <Linkedin size={18} />{' '}
                  </Link>
                </div>
              </div>
              {/* ACM Chapter Socials */}
              <div>
                <p className="text-xs text-secondary font-medium mb-2">
                  ACM CUI LHR:
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={ACM_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ACM CUI Lahore Instagram"
                    title="ACM CUI Lahore Instagram"
                    className="bg-primary-foreground/10 text-primary-foreground hover:bg-secondary hover:text-secondary-foreground w-9 h-9 rounded-md flex items-center justify-center transition-colors"
                  >
                    {' '}
                    <Instagram size={18} />{' '}
                  </Link>
                  <Link
                    href={ACM_LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ACM CUI Lahore LinkedIn"
                    title="ACM CUI Lahore LinkedIn"
                    className="bg-primary-foreground/10 text-primary-foreground hover:bg-secondary hover:text-secondary-foreground w-9 h-9 rounded-md flex items-center justify-center transition-colors"
                  >
                    {' '}
                    <Linkedin size={18} />{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Separator and Copyright (below the grid) */}
        <Separator className="my-8 bg-primary-foreground/10" />
        <div className="text-center text-xs text-primary-foreground/60">
          © {currentYear} <strong>TechnoVerse - ACM CUI Lahore</strong>. All
          Rights Reserved.
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        variant="secondary"
        size="icon"
        onClick={scrollToTop}
        className="fixed right-5 bottom-5 h-11 w-11 rounded-full shadow-lg z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </Button>
    </footer>
  );
}
