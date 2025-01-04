import ReactIcon from '../../assets/reactIcon.svg?component'
import JavascriptIcon from '../../assets/javascriptIcon.svg?component'
import PhpIcon from '../../assets/phpIcon.svg?component'
import WordpressIcon from '../../assets/wordpressIcon.svg?component'
import GitIcon from '../../assets/gitIcon.svg?component'
import HtmlIcon from '../../assets/htmlIcon.svg?component'
import CssIcon from '../../assets/cssIcon.svg?component'
import Gsap from '../../assets/gsap.svg?component'
import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import TechStackSwiper from './TechStackSwiper'


const TechStackAnimation = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const icons = useRef(null);

    // Object for tech svg's and text values
    const obj = {
        1: { svg: ReactIcon, text: 'REACT' },
        2: { svg: JavascriptIcon, text: 'JAVASCRIPT' },
        3: { svg: PhpIcon, text: 'PHP' },
        4: { svg: WordpressIcon, text: 'WORDPRESS' },
        5: { svg: Gsap, text: 'GSAP' },
        6: { svg: GitIcon, text: 'GIT' },
        7: { svg: CssIcon, text: 'CSS3' },
        8: { svg: HtmlIcon, text: 'HTML5' },
    };

    // Show/hide elements at 800px
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // GSAP animation call
    useGSAP(() => {
        if (windowWidth > 600) {
            let tl = gsap.timeline({ defaults: { ease: "bounce.out", duration: 1, stagger: .3, delay: 3.5, x: "100%" } });
            tl.fromTo('.icon_container', { autoAlpha: 0 }, { autoAlpha: 1, x: 0 });
        } else {
            let tl = gsap.timeline({ defaults: { ease: "power1.out", duration: 1, stagger: .3, delay: 2.7, x: "100%" } });
            tl.fromTo('.icon_container', { autoAlpha: 0 }, { autoAlpha: 1, x: 0 });
        }
    }, { scope: icons });

    return (
        <>
            {windowWidth > 600 ? (
                <div ref={icons} className="tech_stack_animation">
                    {Object.entries(obj).map(([key, { svg: SvgComponent, text }]) => (
                        <div key={key} className="icon_container">
                            <SvgComponent />
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <TechStackSwiper obj={obj} icons={icons} />
            )}
        </>
    );
}

export default TechStackAnimation;
