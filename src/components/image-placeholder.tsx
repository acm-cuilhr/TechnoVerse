import Image from 'next/image';

type ImagePlaceholderProps = {
  src: string;
  alt: string;
  className?: string;
};

export const ImagePlaceholder = ({
  src,
  alt,
  className,
}: ImagePlaceholderProps) => (
  <div className={`bg-muted/50 rounded-lg overflow-hidden ${className}`}>
    <Image
      src={src}
      alt={alt}
      width={600}
      height={400}
      className="w-full h-full object-cover"
    />
  </div>
);
