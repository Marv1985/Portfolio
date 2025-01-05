import './About.css'
import TechStackAnimation from './TechStackAnimation'
import SubTitleAnimation from './SubTitleAnimation'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const About = () => {

    const introText = useRef(null)

    useGSAP(() => {

        gsap.fromTo('h1', {autoAlpha: 0, y: "30px"}, {autoAlpha: 1, y: 0, duration: .8, delay: .3, ease: "power1.out"})
        gsap.fromTo('p', {autoAlpha: 0, x: "20px"}, {autoAlpha: 1, x: 0, duration: .8, delay: 0.9, ease: "power1.out"})

    }, { scope: introText })

    return (
        <div className="max_width aboutContainer">
            <div className="content">
                <div ref={introText} className="title_and_intro">
                    <h1>Hi, I'm Marv!</h1>
                    <p>I'm a frontend web developer with hands-on experience building dynamic, user-friendly websites from scratch, leveraging WordPress as a CMS. Passionate about crafting intuitive designs and efficient code, I specialize in turning ideas into fully functional, responsive web solutions.</p>
                </div>
                <div className="tech_stack">
                    <SubTitleAnimation />
                    <TechStackAnimation />
                </div>
            </div>
        </div>
    )
}

export default About