import React, { useEffect, useRef } from 'react';
import useSound from 'use-sound';
import boop from '../../sounds/sword.mp3';
import gsap from 'gsap';

const Workshops = () => {
  const [Sound] = useSound(boop);
  const sword_sound = useRef(null);

  useEffect(() => {
    const t2 = gsap.timeline();
    
    t2.from(sword_sound.current, {
      x: -500,
      duration: 1,
      ease: 'power2.out',
      onStart: () => {
        Sound(); 
      },
    });
  }, [Sound]);

  return (
    <div className='flex justify-center items-center'>
      <h1 ref={sword_sound} className='text-4xl'>Welcome</h1>
    </div>
  );
}

export default Workshops;
