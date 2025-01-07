'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link from next/link
import { Apartment_1 } from '../components/Apartment_1';

const Image360Viewer = () => {
  const TOTAL_IMAGES = 200;
  const keyFrames = [1, 55, 99, 159];
  const imagePaths = Array.from(
    { length: TOTAL_IMAGES },
    (_, i) => {
      if (i !== 0) {
        return `/building/1 (${i + 1}).webp`
      } else {
        return `/images/BUILDING_preview_3.svg`
      }
    }
  );

  const [currentFrame, setCurrentFrame] = useState(1);
const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [tooltip, setTooltip] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        imagePaths.map((path) => {
          const img = new Image();
          img.src = path;
          return new Promise<HTMLImageElement>((resolve) => {
            img.onload = () => resolve(img);
          });
        })
      );
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  const getNextKeyFrame = (current: number, direction: 'forward' | 'backward'): number => {
  const currentIndex = keyFrames.findIndex((frame) => frame === current);

  if (direction === 'forward') {
    return keyFrames[(currentIndex + 1) % keyFrames.length];
  } else {
    return keyFrames[(currentIndex - 1 + keyFrames.length) % keyFrames.length];
  }
};


  const animateToKeyFrame = (targetFrame: number) => {
    const forwardDistance =
      targetFrame > currentFrame
        ? targetFrame - currentFrame
        : TOTAL_IMAGES - currentFrame + targetFrame;
    const backwardDistance =
      currentFrame > targetFrame
        ? currentFrame - targetFrame
        : currentFrame + TOTAL_IMAGES - targetFrame;

    const step = forwardDistance <= backwardDistance ? 1 : -1;

    const interval = setInterval(() => {
      setCurrentFrame((prev) => {
        if (prev === targetFrame) {
          clearInterval(interval);
          return prev;
        }

        if (step === 1 && prev === TOTAL_IMAGES) {
          return 1;
        } else if (step === -1 && prev === 1) {
          return TOTAL_IMAGES;
        }

        return prev + step;
      });
    }, 30);
  };

  const handleButtonClick = (direction: "forward" | "backward") => {
    const nextKeyFrame = getNextKeyFrame(currentFrame, direction);
    animateToKeyFrame(nextKeyFrame);
  };

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  // Handle mouse enter zone
  // const handleMouseEnter = (zoneInfo) => {
  //   setTooltip(zoneInfo);
  // };

  // Handle mouse leave zone
  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <div
      className="relative w-full h-screen"
      onMouseMove={handleMouseMove}
    >
      <div className="w-full h-full">
        {images.length > 0 && (
        currentFrame === 1 ? (
          <Apartment_1 />
        ) : (
          <img
            src={images[currentFrame - 1]?.src}
            alt={`Frame ${currentFrame}`}
            className="w-full h-full object-cover"
          />
        )
      )}
      </div>

      {/* Add clickable zones wrapped in Link */}
      {/* <Link href="/apartment">
        <svg
  className="absolute"
  style={{
    top: 0,
    left: 0,
  }}
>
  <path
    d="M303.92 172.45 303.92 183.05 307.4 185.01 307.4 190.05 315.88 194.72 321.52 192.94 326.44 195.69 326.99 195.69 332.93 198.83 346.96 193.74 347.39 193.87 366.64 186.28 366.64 180.81 358.75 183.73 354 181.1 353.92 180.26 347.77 182.63 347.22 182.63 333.31 187.76 326.78 184.28 326.31 184.07 303.92 172.45"
    fill="rgba(0, 255, 0, 0.3)" // Прозора заливка
    stroke="green" // Контур (для зручності тестування)
    strokeWidth="2"
    cursor="pointer"
    onMouseEnter={() =>
      handleMouseEnter({
        title: 'Apartment 1',
        description: 'This is a 1-bedroom apartment.',
        price: '$500,000',
        image: '/images/2¦Т.jpg',
      })
    }
    onMouseLeave={handleMouseLeave}
  />
</svg>
      </Link> */}

      {/* Tooltip for showing zone info */}
      {/* {tooltip && (
        <div
          className="absolute bg-gray-100 text-black p-4 shadow-md"
          style={{
            left: `${cursorPosition.x + 50}px`,
            top: `${cursorPosition.y - 30}px`,
          }}
        >
          <div className="flex flex-col gap-4 items-center space-x-4">
            <img
              src="/images/2¦Т.jpg"
              alt="Apartment"
              className="w-48 h-48 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-xl font-bold">{tooltip.title}</h3>
              <p>{tooltip.description}</p>
              <p className="font-semibold">{tooltip.price}</p>
            </div>
          </div>
        </div>
      )} */}

        <button
          onClick={() => handleButtonClick('backward')}
          className="absolute z-20 top-1/2 -translate-y-1/2 left-6 px-6 w-16 h-16 bg-gray-500 text-white font-bold rounded-full shadow-md hover:bg-red-500 transition-colors duration-150"
        >
          &larr;
        </button>
        <button
          onClick={() => handleButtonClick('forward')}
          className="absolute z-20 top-1/2 -translate-y-1/2 right-6 px-6 w-16 h-16 bg-gray-500 text-white font-bold rounded-full shadow-md hover:bg-red-500 transition-colors duration-150"
        >
          &rarr;
        </button>
    </div>
  );
};

export default Image360Viewer;
