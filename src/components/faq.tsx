// src/components/home/faq.tsx (Example file path)
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// FAQ data remains the same
interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What is TechnoVerse 5.0?',
    answer:
      'TechnoVerse 5.0 is the fifth edition of our tech fest, featuring 13 competitions (8 tech, 5 non-tech) supported by a 750K prize pool, alongside industry-led workshops, interactive sessions, and walk-in interviews. The venue is split into food & commercial stalls plus software house showcases.',
  },
  {
    question: 'Is it possible to register for social nights individually?',
    answer:
      'No, social night access is typically included with full event registration or specific competition passes. Please check the registration details.',
  },
  {
    question:
      'Are students from other universities permitted to join TechnoVerse 5.0?',
    answer:
      'Absolutely! TechnoVerse 5.0 welcomes students from all over Pakistan to participate in competitions and attend talks/workshops.',
  },
  {
    question: 'Can off-campus students volunteer for TechnoVerse 5.0?',
    answer:
      'Volunteering opportunities are generally reserved for CUI Lahore students to manage coordination effectively. However, all students are encouraged to participate!',
  },
  {
    question: 'Can participants sign up for multiple competitions?',
    answer:
      'Yes, you can participate in multiple modules. You may need to register and pay the fee separately for each, depending on the specific competition rules.',
  },
  {
    question: 'Do all modules have identical registration fees?',
    answer:
      'Registration fees may vary between different competitions based on resource requirements. Please refer to the specific details for each module on the Competitions page or guide.',
  },
  {
    question: 'What are the closing highlights?',
    answer:
      'Day 1 features a Social Night, and Day 2 concludes with a Dinner and Awards Ceremony.',
  },
  {
    question: 'Are walk-in interviews available for students?',
    answer:
      'Yes! A key addition this year is walk-in interviews, allowing participants to submit resumes, interact with HR teams, and explore internship or job openings on the spot.',
  },
];

export default function FAQ() {
  return (
    // Use theme background
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header using theme styles */}
        <div className="text-center mb-12 md:mb-16 section-header">
          <h2> Frequently Asked Questions</h2>
          <p>
            Have questions? We&rsquo;ve got answers to some common queries
            below.
          </p>
        </div>

        {/* Accordion using Shadcn component, centered */}
        <div className="w-full max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left font-medium text-base sm:text-lg py-4 hover:no-underline text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base pb-4 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
