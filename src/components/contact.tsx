import { Mail, Phone, User } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-lightgray">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Get in touch with us for any queries or information</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <User size={40} className="text-turquoise" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-navy">
              Registration Lead
            </h3>
            <p className="text-gray-600">Syed Asfar Ahmad Bukhari</p>
          </div>

          <div className="bg-white p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Phone size={40} className="text-turquoise" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-navy">
              Phone Number
            </h3>
            <p className="text-gray-600">
              <a href="tel:+923184318539" className="hover:text-turquoise">
                +92 318 4318539
              </a>
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Mail size={40} className="text-turquoise" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-navy">Email</h3>
            <p className="text-gray-600">
              <a
                href="mailto:syedasfar27@gmail.com"
                className="hover:text-turquoise"
              >
                syedasfar27@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
