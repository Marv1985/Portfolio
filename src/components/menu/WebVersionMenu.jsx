import gsap from 'gsap';
import { Link } from 'react-router-dom'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import useFloatingHover from '../../floatingHoverAnimation/useFloatingHover';
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const WebVersionMenu = ({menuContainer}) => {

    const { hoverDiv, hoverDivContainer, floatingSelectorShow, floatingSelectorHide, floatingSelectorMoveIn } = useFloatingHover();
  
    /*------------------------*\
        GASP SCROLL MOVE MENU
    \*------------------------*/
    
    useGSAP(() => {
        let mm = gsap.matchMedia();
    
            // Define the timeline
           let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: hoverDivContainer.current,
                    start: '70px 50px',
                    end: 'top -110%',
                    toggleActions: 'play reverse play reverse',
                    invalidateOnRefresh: true,
                    toggleClass: { targets: ".menu_container a", className: "is_active" },
                },
                defaults: { ease: "power1.inOut", duration: 0.5 },
                onUpdate: function () {
                    if (tl.progress() > 0 && tl.progress() < 1) {
                        hoverDivContainer.current.style.pointerEvents = 'none';
                    } else {
                        hoverDivContainer.current.style.pointerEvents = 'auto';
                    }
                }
            }, menuContainer);
    
            // Tweens
            tl.to(hoverDiv.current, { display: "none" }, 0);
            tl.to('.liTags', { marginTop: "0" }, 0);
            tl.to('.menu_container ul', {
                backgroundColor: "rgb(10 34 56)",
                color: "white",
            }, 0.3);
            tl.to('.menu_container ul', {
                gap: "0",
                padding: "5px",
                borderRadius: "36px",
                height: "fit-content"
            }, 0);
            tl.to('.menu_container ul a', { fontSize: "14px" }, 0);
    
        // Handle resize events
        const handleResize = () => {
            ScrollTrigger.refresh();
        };
        window.addEventListener('resize', handleResize);
    
        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, { scope: menuContainer.current });

    return (
        <ul ref={hoverDivContainer} onMouseEnter={floatingSelectorShow} onMouseLeave={floatingSelectorHide}>
            <div ref={hoverDiv} className="hover_div"></div>
            <li className='liTags'>
                <Link to="/" onMouseEnter={floatingSelectorMoveIn}>ABOUT</Link>
            </li>
            <li className='liTags'>
                <Link to="/projects" onMouseEnter={floatingSelectorMoveIn}>PROJECTS</Link>
            </li>
            <li className='liTags'>
                <Link to="/contact" onMouseEnter={floatingSelectorMoveIn}>CONTACT</Link>
            </li>
        </ul>
    )
}

export default WebVersionMenu