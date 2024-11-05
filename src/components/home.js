import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import useSound from 'use-sound';
import boop from '../sounds/sword.mp3';
import EventDisplay from "./child-components/postDisplay";
import Timer from "./child-components/timer"

const Home = () => {
  const navigate = useNavigate();
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const [Sound] = useSound(boop);
  const sword_sound = useRef(null);



  useEffect(() => {
    const t2 = gsap.timeline();
    
    t2.from(sword_sound.current, {
      onStart: () => {
        Sound(); 
      },
    });
  }, [Sound]);

  useEffect(() => {
    const text = "Explore , Register , Workout";
    const chars = text.split("");
    textRef.current.innerHTML = "";

    chars.forEach((char, i) => {
      const span = document.createElement("span");
      span.innerHTML = char;
      textRef.current.appendChild(span);
    });

    const tl = gsap.timeline();
    tl.from(imgRef.current, {x: 500,opacity: 0,duration: 2,ease: "power2.out",});
    const textTimeline = gsap.timeline({repeat: -1,yoyo: true,});
    textTimeline.fromTo(
      textRef.current.children,
      { opacity: 0, x: -20 },{ opacity: 1,x: 0,duration: 0.5,stagger: 0.1,ease: "power2.out", }
    )
    .to(textRef.current.children, {opacity: 0,x: 20,duration: 0.5,stagger: 0.1,ease: "power2.in",delay: 2,});
    tl.from(input1Ref.current, {x: 0, opacity:0, duration:0.5, ease: "power2.out",scale:0.5,})
    tl.from(input2Ref.current, {x: 0, opacity:0, duration:0.5, ease: "power2.out",scale:0.5,})
    tl.from(input3Ref.current, {x: 0, opacity:0, duration:0.5, ease: "power2.out",scale:0.5,})

    return () => {
      tl.kill();
      textTimeline.kill();
    };
  }, []);

  return (
    <div className="w-full h-full pb-10 bg-black overflow-hidden">
      <div className="flex w-full md:flex-row flex-col md:justify-around">
        <div className="flex justify-center text-center flex-col p-5">
        <h1 ref={sword_sound} className="text-4xl md:text-7xl px-20 font-bebas text-custom-red"> FITCHECK </h1> <p ref={textRef} className="text-white font-serif text-xl">Track Your Fitness Journey</p> <p className="text-gray-500 font-flower pt-3"> Discover new fitness challenges and activities around you </p> <p className="text-gray-500 font-flower"> Stay Active, Stay Motivated, Achieve Your Fitness Goals! 💪🏃‍♂️</p>         
        </div>
        <Timer ref={imgRef} />
      </div>
      <div className="flex justify-center md:justify-end md:me-20 flex-col md:flex-row px-10 gap-5 py-5">
        <button ref={input3Ref} className="btn" onClick={() => navigate("addEvents")}>
          Add Post
        </button>
      </div>

      <EventDisplay/>
    </div>
  );
};

export default Home;
