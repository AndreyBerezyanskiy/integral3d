'use client';

import React, { useState, useEffect } from 'react';

const ImageViewer = ({ images }: { images: string[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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
          const newIndex = prevIndex + (diffX > 0 ? -1 : 1); // зміна напрямку при свайпі

          let result = 0;
          if (newIndex >= images.length) {
            result = 0;
          } else if (newIndex < 0) {
            result = images.length - 1;
          } else {
            result = newIndex;
          }
          setIsAnimating(true); // Починаємо анімацію
          return result;
        });
        setStartX(e.clientX);
      }
    }
  };

  const handleMouseUp = () => {
    setStartX(null);
    setIsDragging(false);
  };

  const handleNext = () => {
    setIsAnimating(true); // Починаємо анімацію
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setIsAnimating(true); // Починаємо анімацію
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Завершення анімації після того, як зображення змінене
  // useEffect(() => {
  //   if (isAnimating) {
  //     setTimeout(() => setIsAnimating(false), 300); // Очікуємо на анімацію 300ms
  //   }
  // }, [currentImageIndex, isAnimating]);

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
        style={{
          cursor: 'grab',
          transition: isAnimating ? 'transform 0.3s ease-in-out' : 'none', // додаємо анімацію
        }}
      >
        <img
          src={images[currentImageIndex]}
          alt="Product view"
          draggable={false}
          className={`w-screen max-h-screen ${isAnimating ? 'animate-slide' : ''}`} // Додаємо клас для анімації
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
  const images = Array.from({ length: 55 }, (_, i) => `/building/1 (${i + 1}).webp`);

  return (
    <div>
      <h1 className='text-black'>360-Degree Product Viewer</h1>
      <ImageViewer images={images} />
    </div>
  );
};

export default Page;
