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
    <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-center px-4 py-12 pt-24 overflow-hidden">
      <Image
        src={src}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background z-[1]" />

      {/* Decorative grid dots */}
      <div className="absolute inset-0 z-[2] pointer-events-none opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="heroGrid"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="0.8" className="fill-secondary/40" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      {/* Corner accent lines */}
      <svg
        className="absolute top-8 left-8 w-16 h-16 text-secondary/30 z-[3]"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M2 20 L2 2 L20 2" />
      </svg>
      <svg
        className="absolute bottom-8 right-8 w-16 h-16 text-secondary/30 z-[3]"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M44 62 L62 62 L62 44" />
      </svg>

      <div className="relative z-10">
        {subtitle && (
          <p className="text-lg text-secondary font-semibold mb-2">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground leading-tight drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          {description}
        </p>
        {/* Decorative underline */}
        <div className="mt-6 mx-auto w-24 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent" />
      </div>
    </div>
  );
}
