import { useRef } from "react"
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"

const ReactKnowledge = () => {
    const grid = useRef(null)

    // GSAP animation call
    useGSAP(() => {
        let tl = gsap.timeline({ defaults: {
            ease: "power1.out"
        }})

        tl.fromTo('h3', {autoAlpha: 0, y: "10px"}, {autoAlpha:1, duration: .8, y: 0, delay: 4})
        tl.fromTo('.grid_items', {autoAlpha: 0}, {autoAlpha: 1, duration: 1, delay: 4.5}, 0)

    }, { scope: grid });

    return (
        <div ref={grid} className="react_knowledge_grid">
            <h3>React Knowledge:</h3>
            <div className="grid_items">
                <div className="item">
                    <h4>React Router:</h4>
                    <p>
                    Proficient in using React Router for
                    navigation and dynamic page routing.
                    </p>
                </div>
                <div className="item">
                    <h4>API Integration:</h4>
                    <p>
                    Skilled in fetching data from REST APIs
                    and dynamically populating components.
                    </p>
                </div>
                <div className="item">
                    <h4>State Management:</h4>
                    <p>
                    Experienced with the useContext API for
                    managing global state.
                    </p>
                </div>
                <div className="item">
                    <h4>Lifecycle Methods & Animations:</h4>
                    <p>
                    In-depth understanding of React's
                    mounting and unmounting lifecycle,
                    leveraging GSAP and useEffect to create
                    animations for component transitions.
                    </p>
                </div>
                <div className="item">
                    <h4>Performance Optimisation:</h4>
                    <p>
                    Implement strategies to prevent
                    unnecessary re-renders using React.memo,
                    React.lazy, and other optimization
                    techniques such as useCallback.
                    </p>
                </div>
                <div className="item">
                    <h4>Refs Management:</h4>
                    <p>
                    Knowledgeable in managing DOM
                    elements using refs and implementing
                    callback refs for advanced control.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ReactKnowledge