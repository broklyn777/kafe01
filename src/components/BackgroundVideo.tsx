// components/BackgroundVideo.tsx
import React from 'react';

interface BackgroundVideoProps {
  videoSrc: string;
  children: React.ReactNode;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ videoSrc, children }) => {
  return (
    <section className="relative h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
      ></video>
      <div className="bg-black opacity-50 absolute inset-0"></div>
      <div className="container mx-auto px-4 h-full flex items-center justify-center">{children}</div>
    </section>
  );
};

export default BackgroundVideo;
