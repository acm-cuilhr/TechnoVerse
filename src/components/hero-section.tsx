import Image from 'next/image';

export default function HeroSection({
  src,
  title,
  description,
  subtitle,
}: {
  src: string;
  title: string;
  description?: string;
  subtitle?: string;
}) {
  return (
    <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center px-4 py-12 pt-24">
      <Image
        src={src}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      />
      <div className="relative z-10">
        {subtitle && (
          <p className="text-lg text-secondary font-semibold mb-2">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}
