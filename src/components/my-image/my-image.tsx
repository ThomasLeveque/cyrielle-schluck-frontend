import React from 'react';
import Image from 'next/image';

interface MyImageProps {
  src: string;
  alt?: string;
}

const MyImage: React.FC<MyImageProps> = ({ src, alt, ...props }) => {
  if (process.env.NODE_ENV !== 'development') {
    return <Image unsized src={src} alt={alt} {...props} />;
  }

  return <img src={src} alt={alt} {...props} />;
};

export default MyImage;
