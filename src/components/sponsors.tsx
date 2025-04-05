import Image from 'next/image';

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-16 px-4 bg-lightgray">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="section-header">
          <h2>Sponsors</h2>
        </div>

        <h3 className="text-2xl font-bold text-navy text-center mb-8">
          Platinum Sponsors
        </h3>
        <div className="bg-white rounded-lg p-8 mb-12">
          <div className="flex justify-center">
            <Image
              src="/assets/images/sponsors/forestudio.png"
              alt="Forestudio"
              width={300}
              height={150}
              className="max-h-20 w-auto transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-navy text-center mt-12 mb-8">
          Gold Sponsors
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-8">
            <div className="flex justify-center">
              <Image
                src="/assets/images/sponsors/notion.png"
                alt="Notion"
                width={300}
                height={150}
                className="max-h-20 w-auto transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg p-8">
            <div className="flex justify-center">
              <Image
                src="/assets/images/sponsors/w3pak.png"
                alt="W3PAK"
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
