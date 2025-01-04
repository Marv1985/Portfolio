import './ProjectsPage.css'
import { Outlet } from 'react-router-dom'
import SideMenu from './SideMenu';
import { useState, useEffect } from 'react';

const ProjectsPage = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

    return(
        <div className="projects_parent">
            {windowWidth > 800 && <SideMenu />}
            <div className="right_side">
                <Outlet />
            </div>
        </div>
    )
}

export default ProjectsPage