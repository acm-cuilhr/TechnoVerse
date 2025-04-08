// src/components/layout/header.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { navItems } from '@/config/nav-items';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string | null>(null);
  const pathname = usePathname();

  // Scroll effect logic
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Scroll spy only for hash links when on homepage
      if (pathname === '/') {
        let currentHash: string | null = null;
        // Loop through navItems to find active hash link based on scroll position
        // Iterate backwards so the section lower down gets priority if multiple are in view
        for (const item of [...navItems].reverse()) {
          if (item.type === 'hash') {
            const sectionId = item.href.substring(2); // remove '/#'
            const element = document.getElementById(sectionId);
            // Adjust offset as needed (-150 means section activates 150px before its top reaches viewport top)
            const offset = isScrolled ? 80 : 100; // Smaller offset when header is smaller
            if (element && window.scrollY >= element.offsetTop - offset) {
              currentHash = sectionId;
              break; // Found the active section
            }
          }
        }
        setActiveHash(currentHash);
      } else {
        // Clear hash state if not on homepage
        setActiveHash(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run on mount to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, scrolled]); // Re-run effect if pathname or scrolled state changes (for offset calculation)

  // Function to render navigation links (UPDATED ACTIVE STATE LOGIC)
  const renderNavLinks = (isMobile = false) => {
    return navItems.map((item) => {
      // --- MODIFIED ACTIVE STATE LOGIC ---
      let isActivePage = false;
      // Check if it's a page link and the path matches
      if (item.type === 'page') {
        if (item.href === '/') {
          // Home link is active ONLY if it's the current page AND no hash section is active
          isActivePage = pathname === item.href && activeHash === null;
        } else {
          // Other page links are active if the pathname matches exactly
          isActivePage = pathname === item.href;
          // Optional: Handle nested routes (e.g., /blog/*) if needed
          // isActivePage = pathname.startsWith(item.href);
        }
      }

      // Check if it's a hash link and the activeHash matches (only on home page)
      const isActiveHash =
        item.type === 'hash' &&
        pathname === '/' &&
        activeHash === item.href.substring(2); // remove '/#'

      // Combine flags: a link is active if it's the active page OR the active hash section
      const isActive = isActivePage || isActiveHash;
      // --- END OF MODIFIED LOGIC ---

      const linkContent = (
        <span
          className={cn(
            // Base styles
            'relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 block md:inline-block text-primary-foreground/80 hover:text-primary-foreground', // Ensure block/inline-block for relative positioning
            // Mobile specific
            isMobile && 'w-full text-lg py-3 px-1 text-left',
            // Underline Pseudo-element base styles
            "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]",
            'after:w-full after:bg-secondary after:origin-left',
            'after:transition-transform after:duration-300 after:ease-out',

            // Conditional styles
            isActive
              ? 'text-secondary after:scale-x-100' // Active styles (color + underline visible)
              : cn(
                  'after:scale-x-0 hover:after:scale-x-100' // Underline hidden, appears on hover
                )
          )}
        >
          {item.label}
        </span>
      );

      const Wrapper = isMobile ? SheetClose : React.Fragment;
      const wrapperProps = isMobile ? { asChild: true } : {};

      // Choose Link or <a> based on type
      if (item.type === 'page') {
        return (
          <Wrapper key={item.href} {...wrapperProps}>
            <Link href={item.href} passHref>
              {linkContent}
            </Link>
          </Wrapper>
        );
      } else {
        // Hash link for scrolling on the current page (or home page if elsewhere)
        // Decide if it should close mobile nav
        const clickHandler = isMobile
          ? () => setMobileNavOpen(false)
          : undefined;
        return (
          // Use <a> for hash links to trigger scrolling
          <Link key={item.href} href={item.href} onClick={clickHandler}>
            {linkContent}
          </Link>
        );
      }
    });
  };

  // --- Header JSX ---
  return (
    <header
      className={cn(
        'fixed left-0 top-0 right-0 transition-all duration-300 z-50 flex items-center h-[70px] bg-background/95 backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div id="logo">
          <Link href="/" className="scrollto" aria-label="TechnoVerse Home">
            <Image
              src="/assets/images/logo-2.png"
              alt="TechnoVerse Logo"
              width={45}
              height={36}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {renderNavLinks(false)}
          <div className="ml-4">
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="text-white"
            >
              <a
                href={process.env.NEXT_PUBLIC_REGISTRATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                <Menu
                  className={cn(
                    'h-6 w-6',
                    scrolled ? 'text-foreground' : 'text-primary-foreground'
                  )}
                />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[340px] bg-background p-6 pt-12"
            >
              {/* Mobile Menu Content... */}
              <div className="mb-8">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="scrollto inline-block"
                    aria-label="TechnoVerse Home"
                  >
                    <Image
                      src="/assets/images/logo-2.png"
                      alt="TechnoVerse Logo"
                      width={40}
                      height={32}
                    />
                  </Link>
                </SheetClose>
              </div>
              <nav>
                <ul className="flex flex-col space-y-1">
                  {' '}
                  {/* Reduced space */}
                  {renderNavLinks(true)}
                </ul>
              </nav>
              <div className="mt-8 pt-6 border-t border-border">
                <SheetClose asChild>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={process.env.NEXT_PUBLIC_REGISTRATION_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Register Now
                    </a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
