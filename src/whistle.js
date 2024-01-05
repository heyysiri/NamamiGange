import React, { useEffect, useRef } from 'react';
import gsap, { SteppedEase } from 'gsap';
import "./whistle.css";

const WhistleAnimation = () => {
  const characterRef = useRef(null);
  const fps = 24;
  const totalFrames = 20;
  const dur = (1 / fps) * (totalFrames - 1);
  const spriteWidth = 12800;

  useEffect(() => {
    const animation = gsap.to(characterRef.current, {
      duration: dur,
      repeat: -1,
      backgroundPosition: `-${spriteWidth}px`,
      ease: SteppedEase.config(totalFrames),
    });

    
    return () => animation.kill();
  }, [dur, spriteWidth]);

  return (
    <div ref={characterRef} className="character">
      {/* Your sprite content goes here */}
    </div>
  );
};

export default WhistleAnimation;
