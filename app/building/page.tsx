"use client";

import React, { useState, useEffect, useRef } from "react";

export default function BuildingWithSmoothAnimation() {
  const [frame, setFrame] = useState(1);
  const keyFrames = [1, 55, 99, 159, 201];
  const totalFrames = 201;
  const animationRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const imagesCache = useRef([]);

  useEffect(() => {
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `/building/1 (${i}).webp`;
      imagesCache.current[i] = img;
    }
  }, []);

  const playFramesToKeyFrame = (targetFrame) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const animate = () => {
      setFrame((prevFrame) => {
        const direction = targetFrame > prevFrame ? 1 : -1;
        const nextFrame = prevFrame + direction;

        if (nextFrame === targetFrame) {
          cancelAnimationFrame(animationRef.current);
          isAnimatingRef.current = false;
          return nextFrame;
        }

        return nextFrame;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleNext = () => {
    const currentIndex = keyFrames.indexOf(frame);
    const nextIndex = (currentIndex + 1) % keyFrames.length;
    const nextFrame = keyFrames[nextIndex];
    playFramesToKeyFrame(nextFrame);
  };

  const handlePrev = () => {
    const currentIndex = keyFrames.indexOf(frame);
    const prevIndex = (currentIndex - 1 + keyFrames.length) % keyFrames.length;
    const prevFrame = keyFrames[prevIndex];
    playFramesToKeyFrame(prevFrame);
  };

  return (
    <div className="mt-20 flex flex-col items-center">
      <div className="relative w-full max-w-7xl overflow-hidden">
        <img
          src={imagesCache.current[frame]?.src || `/building/1 (${frame}).webp`}
          alt={`Frame ${frame}`}
          className="w-full h-auto rounded-lg shadow-lg transition-opacity duration-75 ease-in-out"
        />
      </div>

      <div className="flex space-x-4 mt-4">
        <button
          onClick={handlePrev}
          disabled={isAnimatingRef.current}
          className={`px-4 py-2 text-white font-bold rounded ${
            isAnimatingRef.current
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-500 hover:bg-gray-600"
          }`}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={isAnimatingRef.current}
          className={`px-4 py-2 text-white font-bold rounded ${
            isAnimatingRef.current
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-500 hover:bg-gray-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
