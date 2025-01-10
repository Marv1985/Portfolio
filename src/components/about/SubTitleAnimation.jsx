import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { SteppedEase, TextPlugin } from "gsap/all";

gsap.registerPlugin(SteppedEase, TextPlugin);

const SubTitleAnimation = () => {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Text animation
    tl.to(textRef.current, {
      text: {
        value: "Here is my tech stack:",
      },
      duration: 2,
      delay: 1.5,
      ease: "none",
      onComplete: () => {
        gsap.set(cursorRef.current, { display: "none", delay: 1.5 });
        setTimeout(() => {
          gsap.killTweensOf(cursorRef.current);
        }, 1500);
      }
    });

    // Cursor animation
    tl.fromTo(
        cursorRef.current,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 0.5,
          delay: 1.3,
          repeat: -1, 
          ease: SteppedEase.config(1)
        },
        0
      );
      
      
  });

  return (
    <h2>
        <span ref={textRef}></span>
        <span ref={cursorRef}>|</span>
    </h2>
  );
};

export default SubTitleAnimation;
