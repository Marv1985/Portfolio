import { useParams } from 'react-router-dom';
import { projectsData } from './projectsData';
import './ProjectTemplate.css'
import ReactIcon from '../../assets/reactIcon.svg?component'
import JavascriptIcon from '../../assets/javascriptIcon.svg?component'
import PhpIcon from '../../assets/phpIcon.svg?component'
import WordpressIcon from '../../assets/wordpressIcon.svg?component'
import GitIcon from '../../assets/gitIcon.svg?component'
import HtmlIcon from '../../assets/htmlIcon.svg?component'
import CssIcon from '../../assets/cssIcon.svg?component'
import Gsap from '../../assets/gsap.svg?component'
import Right_arrow_500 from '../../assets/right_arrow_500.svg?component'

const ProjectTemplate = () => {
  const { projectId } = useParams(); // Get the dynamic segment from the URL (gets the last URL part and checks for it in the projectsData object)
  const project = projectsData[projectId]; // Fetch data for the current project

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

  if (!project) {
    return <div className='not_found'>Project not found</div>;
  }

  // Get tech id's
  const selectedTech = project.techIds || [];

  return (
    <div className="individual_project_parent">
      {/* Project GIF */}
      <div className="image_and_link">
        <a href={project.url} target="_blank" className="project_and_tech go_to_site">
          <div className="overlay">
            <div className="overlay_title">
              <p>Visit {project.title}</p>
              <Right_arrow_500 />
            </div>
          </div>
          <div className="main_title_and_link">
            <h1>{project.title}</h1>
            <p>VISIT SITE</p>
          </div>
          
          <img src={project.image} alt={project.title} />
        </a>
        <a className='repo_ink' href={project.repo} target="_blank">GITHUB REPO <Right_arrow_500 /></a>
      </div>
      
      <div className="about_project">
        {/* Tech icons */}
        <div className="tech_used">
          <h3 className='tech_title'>{project.tech_title}</h3>
          <div className="tech_icons_container">
            {Object.entries(obj) // Convert the 'obj' object into an array of key-value pairs
              .filter(([key]) => selectedTech.includes(Number(key))) // Filter the entries to only keep those whose keys are in the 'selectedTech' array
              // 'selectedTech' is an array of tech IDs to be displayed
              .map(([key, { svg: SvgComponent, text }]) => ( // Map over the filtered entries and destructure each entry
                  <div key={key} className="icon_container"> 
                      <SvgComponent />
                      <p>{text}</p> 
                  </div>
              ))}
          </div>
        </div>
        {/* Project details */}
        <div className="project_details">
          <h3 className='project_details_title'>{project.details_title}</h3>
          <div className="project_content">
            <p>{project.p_1}</p>
            <ul>
              <li>
                <span>{project.t_1}</span>
                <div dangerouslySetInnerHTML={{ __html: project.t_1_p }} />
              </li>
              <li>
                <span>{project.t_2}</span>
                <div dangerouslySetInnerHTML={{ __html: project.t_2_p }} />
              </li>
              <li>
                <span>{project.t_3}</span>
                <div dangerouslySetInnerHTML={{ __html: project.t_3_p }} />
              </li>
              {(project.t_4 || project.t_4_p) && (
                <li>
                  {project.t_4 && <span>{project.t_4}</span>}
                  <div dangerouslySetInnerHTML={{ __html: project.t_4_p }} />
                </li>
              )}
            </ul>
            <p>{project.p_2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;
