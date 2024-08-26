'use client';

import React, { useState } from 'react';

const ImageViewer = ({ images }: { images: string[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  if (images.length === 0) {
    return <div>No images available</div>;
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0) {
      setStartX(e.clientX);
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && startX !== null) {
      const diffX = e.clientX - startX;
      const threshold = 30;

      if (Math.abs(diffX) > threshold) {
        setCurrentImageIndex((prevIndex) => {
          const newIndex = prevIndex + (diffX > 0 ? 1 : -1);

          let result = 0;
          if (newIndex >= images.length) {
            result = 0;
          } else if (newIndex < 0) {
            result = images.length - 1;
          } else {
            result = newIndex;
          }
          console.log(result);
          return result;
        }
        );
        setStartX(e.clientX);
      }
    }
  };

  const handleMouseUp = () => {
    setStartX(null);
    setIsDragging(false);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
      }}
    >
      <button
        onClick={handlePrevious}
        className='absolute left-1 w-10 h-10 bg-black text-white p-2 rounded-full cursor-pointer z-20 opacity-50'
      >
        &#9664;
      </button>

      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ cursor: 'grab' }}
      >
        <img
          src={images[currentImageIndex]}
          alt="Product view"
          draggable={false}
          className='w-screen max-h-screen'
        />
      </div>

      <button
        onClick={handleNext}
        className='absolute right-1 w-10 h-10 bg-black text-white p-2 rounded-full cursor-pointer z-20 opacity-50'
      >
        &#9654;
      </button>
    </div>
  );
};

const Page = () => {
  const images = [
    '/images/model/2024-08-24_17-01-16.png',
    '/images/model/2024-08-24_17-04-33.png',
    '/images/model/2024-08-24_17-05-59.png',
    '/images/model/2024-08-24_17-07-59.png',
    '/images/model/2024-08-24_17-09-12.png',
    '/images/model/2024-08-24_17-10-09.png',
    '/images/model/2024-08-24_17-11-01.png',
    '/images/model/2024-08-24_17-11-55.png',
    '/images/model/2024-08-24_17-12-43.png',
    '/images/model/2024-08-24_17-14-25.png',
    '/images/model/2024-08-24_17-15-44.png',
    '/images/model/2024-08-24_17-16-55.png',
    '/images/model/2024-08-24_17-17-52.png',
    '/images/model/2024-08-24_17-18-56.png',
    '/images/model/2024-08-24_17-23-50.png',
    '/images/model/2024-08-24_17-25-29.png',
    '/images/model/2024-08-24_17-24-35.png',
    '/images/model/2024-08-24_17-26-39.png'
  ];

  return (
    <div>
      <h1 className='text-black'>360-Degree Product Viewer</h1>
      <ImageViewer images={images} />
    </div>
  );
};

export default Page;
