import { useParams } from 'react-router-dom';
import { projectsData } from './projectsData';
import './ProjectTemplate.css'

const ProjectTemplate = () => {
  const { projectId } = useParams(); // Get the dynamic segment from the URL (gets the last url part and checks for it in the projectsData object )
  const project = projectsData[projectId]; // Fetch data for the current project

  if (!project) {
    return <div>Project not found</div>; 
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
    </div>
  );
};

export default ProjectTemplate;
