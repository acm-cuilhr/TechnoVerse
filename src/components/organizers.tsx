import Image from 'next/image';

export default function Organizers() {
  return (
    <section id="organizers" className="section-with-bg py-16">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="section-header">
          <h2>Organizers</h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-0 supporters-wrap clearfix"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="col-span-1">
            <div className="supporter-logo">
              <Image
                src="/assets/images/organizers/gdsc-logo.png"
                alt="GDSC"
                width={300}
                height={150}
                className="max-h-20 w-auto transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>

          <div className="col-span-1">
            <div className="supporter-logo">
              <Image
                src="/assets/images/organizers/acm-logo.png"
                alt="ACM"
                width={300}
                height={150}
                className="max-h-20 w-auto transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>

          <div className="col-span-1">
            <div className="supporter-logo">
              <Image
                src="/assets/images/organizers/ieee-logo.png"
                alt="IEEE"
                width={300}
                height={150}
                className="max-h-20 w-auto transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
