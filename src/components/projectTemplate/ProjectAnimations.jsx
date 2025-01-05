import { useRef, useEffect } from "react";
import gsap from "gsap"; // Make sure GSAP is imported

const ProjectAnimations = ({ projectId }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      // Reset animations whenever the projectId changes
      gsap.killTweensOf(ref.current);  // Stop any existing animations (because ref is not unique, this refreshes the animation when projectId changes)
      
      // Apply animations (as per your existing logic)
      if (window.innerWidth > 1300) {
        gsap.fromTo('.right_side li', { opacity: 0 }, { opacity: 1, duration: 1 });
      } else {
        gsap.fromTo('.right_side li', { opacity: 0 }, { opacity: 0.6, duration: 3 });
      }
    }
  }, [projectId]); // Only trigger the effect when the projectId changes

  return ref; // Return the ref to be used by the component
};

export default ProjectAnimations;
