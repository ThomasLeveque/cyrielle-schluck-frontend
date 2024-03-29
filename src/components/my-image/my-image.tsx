import React from 'react';
import Image from 'next/image';

interface MyImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
  priority?: boolean;
}

const MyImage: React.FC<MyImageProps> = ({ src, alt, width, height, layout, priority = false, ...props }) =>
  process.env.NODE_ENV !== 'development' ? (
    <div className="img">
      <Image width={width} height={height} src={src} layout={layout} alt={alt} priority={priority} placeholder="blur" {...props} />
    </div>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="img" src={src} alt={alt} {...props} />
  );

export default MyImage;
