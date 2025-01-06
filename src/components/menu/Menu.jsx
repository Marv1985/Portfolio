import './Menu.css'
import DarkModeButton from './DarkModeButton'
import { useRef } from 'react';
import { useState, useEffect } from 'react';
import WebVersionMenu from './WebVersionMenu';
import MobileVersionMenu from './MobileVersionMenu';
import HamburgerButton from './HamburgerButton';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SideMenu from '../projectsPage/SideMenu';
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const Menu = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const menuContainer = useRef(null);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const button = useRef(null);
    const menuRef = useRef(null);

    // Check Url to conditionally show/hide the sidemenu for projects page
    const currentPath = location.pathname;
    const pathKey = currentPath.startsWith('/projects') || currentPath.includes('/projects');

    // Show/hide elements at 800px
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        // Hide mobile menu on resize
        const mobileSize = () => {
            if(window.innerWidth > 800) {
                setShowMobileMenu(false)
                document.body.classList.remove('no-scroll');
            }
        }

        window.addEventListener("resize", handleResize);
        window.addEventListener("resize", mobileSize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("resize", mobileSize);
        };
    }, []);

    // Hamburger button and mobile menu unmount
    const { contextSafe } = useGSAP();
    // Hamburger button and mobile menu unmount
    const animateButton = contextSafe(() => {
        if (showMobileMenu && button.current) {
            // Close the menu
            gsap.to(button.current, {rotate: 0, gap: "2px", duration: .2, ease: "power1.out"})
            document.body.classList.remove('no-scroll'); // Enable scrolling on the body

            gsap.to(menuRef.current, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                setShowMobileMenu(false); // Set the menu visibility to false
            },
            });

        } else {
          // Open the menu
          setShowMobileMenu(true); // Set the menu visibility to true
          document.body.classList.add('no-scroll'); // Disable scrolling on the body
        }
    });
    
    
    // Mobile menu animation
    useGSAP(() => {
        if(showMobileMenu && menuRef.current){

            let buttonTl = gsap.timeline()
            
            buttonTl.fromTo(button.current, 
                { rotate: 0, gap: "2px" }, 
                { rotate: 45, gap: "4px", duration: 0.2, ease: "power1.out" } 
            );
            buttonTl.fromTo(
                menuRef.current,
                { opacity: 0, backgroundColor: "rgba(255, 255, 255, 0)", ease: "power1.out"},
                { opacity: 1, backgroundColor: "rgba(255, 255, 255, 0.5)", duration: 0.25, ease: "power2.in" }, 0);
        } 
    }, [showMobileMenu])
     

    return (
        <>
            <div className="menu_container">
                <div ref={menuContainer} className="max_width">
                    <DarkModeButton />
                    {windowWidth > 800 ? (
                        <WebVersionMenu menuContainer={menuContainer} />
                    ):(
                        <HamburgerButton animateButton={animateButton} button={button} />
                    )}
                </div>
            </div>
            {showMobileMenu && <MobileVersionMenu menuRef={menuRef} animateButton={animateButton}/>}
            {windowWidth < 800 && pathKey && <SideMenu/>}
        </>
    )
}

export default Menu