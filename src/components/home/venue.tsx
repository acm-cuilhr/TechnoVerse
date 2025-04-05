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
            <div className="absolute inset-0 bg-[rgba(13,20,41,0.8)]"></div>
            <div className="flex justify-center items-center h-full">
              <div className="relative z-10 px-8 py-16 text-center">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                  COMSATS University Islamabad, Lahore Campus
                </h3>
                <p className="text-white">
                  Located in the heart of the city, COMSATS University
                  Islamabad, Lahore Campus is the perfect venue for the event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
