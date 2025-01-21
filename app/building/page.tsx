'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link from next/link
import { Apartment_1 } from '../components/Apartment_1';
import { Apartment_2 } from '../components/Apartment_2';
import { Apartment_3 } from '../components/Apartment_3';
import { Apartment_4 } from '../components/Apartment_4';

const Image360Viewer = () => {
  const TOTAL_IMAGES = 200;
  const keyFrames = [1, 55, 99, 159];
  const imagePaths = Array.from({ length: TOTAL_IMAGES }, (_, i) =>
  keyFrames.map((frame) => frame - 1).includes(i)
    ? `/building/1 (${i + 1}).svg`
    : `/building/1 (${i + 1}).webp`
);

  const keyFrameComponents: { [key: number]: JSX.Element } = {
    1: <Apartment_1 />,
    55: <Apartment_2 />,
    99: <Apartment_3 />,
    159: <Apartment_4 />,
  };

  const [currentFrame, setCurrentFrame] = useState(1);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isAnimating, setIsAnimating] = useState(false); // Track animation status

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
    setIsAnimating(true); // Start animation
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
          setIsAnimating(false); // End animation
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

  const handleButtonClick = (direction: 'forward' | 'backward') => {
    if (isAnimating) return; // Prevent action during animation
    const nextKeyFrame = getNextKeyFrame(currentFrame, direction);
    animateToKeyFrame(nextKeyFrame);
  };


  return (
    <div className="relative w-full h-screen">
      <div className="w-full h-full">
        {images.length > 0 &&
          (keyFrames.includes(currentFrame) ? (
            keyFrameComponents[currentFrame]
          ) : (
            <img
              src={images[currentFrame - 1]?.src}
              alt={`Frame ${currentFrame}`}
              className="w-full h-full object-cover"
            />
          ))}
      </div>

      <button
        onClick={() => handleButtonClick('forward')}
        className="absolute z-20 top-1/2 -translate-y-1/2 left-6 px-6 w-16 h-16 bg-gray-500 text-white font-bold rounded-full shadow-md hover:bg-red-500 transition-colors duration-150"
        disabled={isAnimating} // Disable during animation
      >
        &larr;
      </button>
      <button
        onClick={() => handleButtonClick('backward')}
        className="absolute z-20 top-1/2 -translate-y-1/2 right-6 px-6 w-16 h-16 bg-gray-500 text-white font-bold rounded-full shadow-md hover:bg-red-500 transition-colors duration-150"
        disabled={isAnimating} // Disable during animation
      >
        &rarr;
      </button>
    </div>
  );
};

export default Image360Viewer;
