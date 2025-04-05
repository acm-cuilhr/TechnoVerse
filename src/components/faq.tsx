'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Is it possible to register for social nights individually?',
    answer: 'No, you cannot.',
  },
  {
    question: "Are students from off-campus permitted to join TechnoVerse'24?",
    answer: 'Yes, they are welcome.',
  },
  {
    question: "Can off-campus students volunteer for TechnoVerse'24?",
    answer: 'No, volunteering is permitted, but they can participate.',
  },
  {
    question: 'Can participants sign up for multiple modules?',
    answer:
      'Yes, by registering separately for each module and paying the respective registration fee.',
  },
  {
    question: 'Do all modules have identical registration fees?',
    answer: 'Yes, with the exception of the Reels Competition.',
  },
  {
    question: 'What is included in the social nights?',
    answer: 'Qawali Night on Day-1 and an Exclusive Dinner on Day-2.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="section-header">
          <h2>F.A.Q</h2>
        </div>

        <div
          className="flex justify-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="w-full max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-lg py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
