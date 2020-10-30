import React from 'react';
import Image from 'next/image';

interface MyImageProps {
  src: string;
  alt?: string;
  width: number;
  height: number;
}

const MyImage: React.FC<MyImageProps> = ({ src, alt, width, height, ...props }) => {
  if (process.env.NODE_ENV !== 'development') {
    return <Image width={width} height={height} src={src} alt={alt} {...props} />;
  }

  return <img src={src} alt={alt} {...props} />;
};

export default MyImage;
