import TsParticles from "./TsParticles";
import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MobileVersionMenu = ({menuRef, animateButton}) => {
  const MobileMenuContainer = useRef(null);

    useGSAP(() => {

      let tl = gsap.timeline({
        defaults: {
          delay: .3
        }
      });

      tl.fromTo('li',{opacity:0, y: "60%"}, {opacity:1, duration:.5, y:0, stagger: .2})

    }, { scope: MobileMenuContainer })
  
      return (
        <div ref={menuRef} className="mobileMenuBackground">
            <div className="centerMenu max_width">
              <TsParticles/>
                <ul ref={MobileMenuContainer}>
                  <li>
                      <Link onClick={animateButton} to="/">ABOUT</Link>
                  </li>
                  <li>
                      <Link onClick={animateButton} to="/projects">PROJECTS</Link>
                  </li>
                  <li>
                      <Link onClick={animateButton} to="/contact">CONTACT</Link>
                  </li>
                </ul>
            </div>
        </div>
      );
  }
  

export default MobileVersionMenu