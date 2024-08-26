'use client';

import React, { useState } from 'react';

const ImageViewer = ({ images }: { images: string[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);

  if (images.length === 0) {
    return <div>No images available</div>;
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (startX !== null) {
      const diffX = e.clientX - startX;
      if (Math.abs(diffX) > 5) {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + (diffX > 0 ? 1 : -1) + images.length) % images.length
        );
        setStartX(e.clientX);
      }
    }
  };

  const handleMouseUp = () => {
    setStartX(null);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ cursor: 'grab', userSelect: 'none' }}
    >
      <img src={images[currentImageIndex]} alt="Product view" />
    </div>
  );
};

const Page = () => {
  const images = [
    '/images/model/2024-08-24_17-15-44.png',
    '/images/model/2024-08-24_17-23-50.png',
    '/images/model/2024-08-24_17-17-52.png',
    '/images/model/2024-08-24_17-11-55.png',
    '/images/model/2024-08-24_17-26-39.png',
    '/images/model/2024-08-24_17-10-09.png',
    '/images/model/2024-08-24_17-16-55.png',
    '/images/model/2024-08-24_17-24-35.png',
    '/images/model/2024-08-24_17-09-12.png',
    '/images/model/2024-08-24_17-18-56.png',
    '/images/model/2024-08-24_17-11-01.png',
    '/images/model/2024-08-24_17-07-59.png',
    '/images/model/2024-08-24_17-14-25.png',
    '/images/model/2024-08-24_17-01-16.png',
    '/images/model/2024-08-24_17-04-33.png',
    '/images/model/2024-08-24_17-12-43.png',
    '/images/model/2024-08-24_17-05-59.png',
    '/images/model/2024-08-24_17-25-29.png'
  ];

  return (
    <div>
      <h1 className='text-black'>360-Degree Product Viewer</h1>
      <ImageViewer images={images} />
    </div>
  );
};

export default Page;
