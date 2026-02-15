export default function Venue() {
  return (
    <section id="venue" className="">
      <div className="container-fluid" data-aos="fade-up">
        <div className="section-header">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary flex justify-center items-center gap-2">
            Event Venue
          </h2>
          <p>Event venue location info and gallery</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="venue-map h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13621.655901056978!2d74.2126341!3d31.4027185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ffd0bc7c5f71%3A0x879e9b82857bcd94!2sCOMSATS%20University!5e0!3m2!1sen!2s!4v1713702866927!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>

          <div className="venue-info bg-[url('/assets/images/2.jpg')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-background/90"></div>
            <div className="flex justify-center items-center h-full">
              <div className="relative z-10 px-8 py-16 text-center">
                {/* Decorative corner accents */}
                <svg
                  className="absolute top-6 left-6 w-8 h-8 text-secondary/40"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2 12 L2 2 L12 2" />
                </svg>
                <svg
                  className="absolute bottom-6 right-6 w-8 h-8 text-secondary/40"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 30 L30 30 L30 20" />
                </svg>

                {/* Location pin SVG */}
                <div className="mx-auto mb-4 w-12 h-12">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    className="w-full h-full"
                  >
                    <path
                      d="M24 4C16.268 4 10 10.268 10 18c0 10.5 14 26 14 26s14-15.5 14-26c0-7.732-6.268-14-14-14z"
                      fill="currentColor"
                      className="text-secondary/80"
                    />
                    <circle cx="24" cy="18" r="6" fill="white" opacity="0.9" />
                    <circle
                      cx="24"
                      cy="18"
                      r="3"
                      fill="currentColor"
                      className="text-secondary"
                    />
                  </svg>
                </div>

                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                  COMSATS University Lahore
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Located in the heart of Lahore, COMSATS University Lahore is
                  the perfect venue for TechnoVerse 5.0 — two days of
                  innovation, competition, and collaboration.
                </p>
                <p className="mt-4 text-secondary/90 text-sm font-medium tracking-wide uppercase">
                  Defence Road, Off Raiwind Road, Lahore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
