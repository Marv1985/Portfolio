import { useState, useEffect } from 'react';
import { projectsData } from '../projectTemplate/projectsData';
import { Link, useLocation } from 'react-router-dom';
import useFloatingHover from '../../floatingHoverAnimation/useFloatingHover';
import MobileMenu from './MobileMenu';

const SideMenu = () => {
    const { hoverDiv, hoverDivContainer, floatingSelectorShow, floatingSelectorHide, floatingSelectorMoveIn } = useFloatingHover();
    const location = useLocation();

    // Get screen width to conditionally change sidemenu to mobile version
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Initialize state with the first link as 'true' and all others as 'false'
    const [selectedLinks, setSelectedLinks] = useState(() => {
        const initialLinks = Object.keys(projectsData).reduce((acc, key) => {
            acc[key] = false; // Set all to false initially
            return acc;
        }, {});

        // Set 'portfolio' to true by default
        initialLinks['portfolio'] = true;
        return initialLinks;
    });

    const handleSelect = (key) => {
        setSelectedLinks((prev) => {
            // On click, creates a new object where all keys are false 
            const updatedLinks = Object.keys(prev).reduce((acc, curr) => {
                acc[curr] = false; // Set each link's state to false (e.g., acc['project1'] = false)
                return acc; // After iterating over all keys, acc = { portfolio: false, project1: false, project2: false, etc... };
            }, {});
    
            updatedLinks[key] = true; // Set the clicked link to true
            return updatedLinks; // Return object to state
        });
    };

    // Update selected link state when the URL changes
    useEffect(() => {
        const currentPath = location.pathname;
        const pathKey = currentPath.startsWith('/projects/') 
            ? currentPath.replace('/projects/', '') 
            : 'portfolio'; // Default to 'portfolio'

        // The same function as the click function but this updates the state with the extracted url pathKey
        setSelectedLinks((prev) => {
            const updatedLinks = Object.keys(prev).reduce((acc, curr) => {
                acc[curr] = curr === pathKey; // True for the matching key, false otherwise
                return acc;
            }, {});
            return updatedLinks;
        });
    }, [location.pathname]);
    

    return (
        windowWidth > 800 ? (
            <div className="left_side">
                <div className="projects_menu">
                    <h2>LATEST <br/> PROJECTS</h2>
                    <div className="ul_container">
                        <ul ref={hoverDivContainer} onMouseEnter={floatingSelectorShow} onMouseLeave={floatingSelectorHide}>
                            <div ref={hoverDiv} className="hover_div"></div>

                            <li>
                                <Link onClick={() => handleSelect('portfolio')} onMouseEnter={floatingSelectorMoveIn} to={'/projects'} className={selectedLinks['portfolio'] ? 'selected' : ''}>
                                    My Portfolio
                                </Link>
                            </li>

                            {Object.keys(projectsData).map((key) => (
                                <li key={key}>
                                    <Link onClick={() => handleSelect(key)} onMouseEnter={floatingSelectorMoveIn} to={`/projects/${key}`} className={selectedLinks[key] ? 'selected' : ''}>
                                        {projectsData[key].title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        ) : (
            <MobileMenu handleSelect={handleSelect} selectedLinks={selectedLinks} projectsData={projectsData}/>
        )
    );
};

export default SideMenu;
