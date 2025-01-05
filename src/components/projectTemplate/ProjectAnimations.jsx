import { useRef, useEffect } from "react";
import gsap from "gsap";

const ProjectAnimations = ({ projectId }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      // Stop any existing animations & reset animations when projectId changes
      gsap.killTweensOf(ref.current);  

      let tl = gsap.timeline({ defaults: { ease: "power1.in" } });

      if (window.innerWidth > 1300) {
        tl.fromTo('.individual_project_parent .image_and_link', 
          { opacity: 0, y: "50px" }, 
          { opacity: 1, y: 0, duration: 0.4 }
        );
        tl.fromTo('.individual_project_parent .tech_used', 
          { opacity: 0, x: "25px" }, 
          { opacity: 1, x: 0, duration: 0.3 },
          0.2
        );
        tl.fromTo('.individual_project_parent .project_details', 
          { opacity: 0 }, 
          { opacity: 1, duration: 0.5 },
          0.4
        );
      } else {
        tl.fromTo('.individual_project_parent .image_and_link', 
          { opacity: 0, y: "30px" }, 
          { opacity: 1, y: 0, duration: 0.3 }
        );
        tl.fromTo('.individual_project_parent .tech_used', 
          { opacity: 0, x: "15px" }, 
          { opacity: 1, x: 0, duration: 0.3 },
          0.15
        );
        tl.fromTo('.individual_project_parent .project_details', 
          { opacity: 0 }, 
          { opacity: 1, duration: 0.5 },
        );
      }
    
      return () => {
        gsap.killTweensOf(ref.current);
      };
    }
  }, [projectId]); 

  return ref; 
};

export default ProjectAnimations;
