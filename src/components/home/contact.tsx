// src/components/home/contact-section.tsx
'use client';

import Link from 'next/link';
import { contactLeadsData } from '@/data/contacts'; // Adjust import path
import { Mail, Phone } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// !!! REPLACE WITH YOUR ACTUAL TALLY FORM EMBED URL !!!
const TALLY_FORM_URL =
  'https://tally.so/embed/nGbGDZ?alignLeft=1&hideTitle=1&transparentBackground=1';

export default function ContactSection() {
  return (
    // Adjusted padding and maybe use bg-muted/30 for contrast if needed
    <section id="contact" className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        {/* Section Header - Remains the same */}
        <div className="text-center mb-12 md:mb-16 section-header">
          <h2>Get In Touch</h2>
          <p>Have questions or need more information? Reach out to us!</p>
        </div>
        {/* Section 1: Specific Contacts */}
        <div className="mb-16">
          {' '}
          {/* Add margin below this section */}
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
            Specific Contacts
          </h3>
          {/* Grid for contact cards - centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {contactLeadsData.map((lead) => (
              <Card
                key={lead.id}
                className="bg-card border border-border shadow-sm h-full" // Ensure cards can grow if needed
              >
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <lead.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-card-foreground">
                      {lead.position}
                    </CardTitle>
                    <p className="text-base text-muted-foreground">
                      {lead.name}
                    </p>
                  </div>
                </CardHeader>
                {(lead.email || lead.phone) && (
                  <CardContent className="pt-0">
                    <Separator className="mb-4 bg-border/50" />
                    <div className="space-y-2 text-sm">
                      {lead.email && (
                        <div className="flex items-start gap-2 text-muted-foreground">
                          {' '}
                          {/* items-start for long emails */}
                          <Mail className="h-4 w-4 mt-0.5 shrink-0" />{' '}
                          {/* Align icon top */}
                          <Link
                            href={`mailto:${lead.email}`}
                            className="hover:text-primary hover:underline break-words" // Use break-words
                          >
                            {lead.email}
                          </Link>
                        </div>
                      )}
                      {lead.phone && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4 shrink-0" />
                          <Link
                            href={`tel:${lead.phone.replace(/\s/g, '')}`}
                            className="hover:text-primary hover:underline"
                          >
                            {lead.phone}
                          </Link>
                        </div>
                      )}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
        <Separator className="bg-border/50 max-w-lg mx-auto" />{' '}
        {/* Optional separator */}
        {/* Section 2: General Inquiries (Tally Form) */}
        <div className="mt-16">
          {' '}
          {/* Add margin above this section */}
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
            General Inquiries
          </h3>
          {/* Centered card for the form */}
          <Card className="overflow-hidden border border-border shadow-sm max-w-4xl mx-auto">
            <CardContent className="h-[276px]">
              {' '}
              {/* Slightly reduced default height */}
              <iframe
                src={TALLY_FORM_URL}
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="TechnoVerse 4.0 Contact Form"
                className="block"
              >
                Loading...
              </iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
