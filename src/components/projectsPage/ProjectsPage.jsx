import './ProjectsPage.css'
import { Outlet } from 'react-router-dom'
import SideMenu from './SideMenu';

const ProjectsPage = () => {
    return(
        <div className="projects_parent">
                <SideMenu />
            <div className="right_side">
                <Outlet />
            </div>
        </div>
    )
}

export default ProjectsPage