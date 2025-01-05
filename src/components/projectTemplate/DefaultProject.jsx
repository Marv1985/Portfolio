import './ProjectTemplate.css'
import { useParams } from 'react-router-dom';
import ReactIcon from '../../assets/reactIcon.svg?component'
import JavascriptIcon from '../../assets/javascriptIcon.svg?component'
import HtmlIcon from '../../assets/htmlIcon.svg?component'
import CssIcon from '../../assets/cssIcon.svg?component'
import Gsap from '../../assets/gsap.svg?component'
import Right_arrow_500 from '../../assets/right_arrow_500.svg?component'
import ProjectAnimations from './ProjectAnimations';

const DefaultProject = () => {
  const { projectId } = useParams();
  const ref = ProjectAnimations({ projectId });

    const obj = {
          1: { svg: ReactIcon, text: 'REACT' },
          2: { svg: JavascriptIcon, text: 'JAVASCRIPT' },
          3: { svg: Gsap, text: 'GSAP' },
          4: { svg: CssIcon, text: 'CSS3' },
          5: { svg: HtmlIcon, text: 'HTML5' },
      };

    return (
        <div ref={ref} className="individual_project_parent">
          {/* Project GIF */}
          <div className="image_and_link">
            <div className="project_and_tech">
              <h1>My Portfolio</h1>
              <img src="projectImgs/portfolio.png" alt="portfolio" />
            </div>
            <a className='repo_ink' href="https://github.com/Marv1985/portfolio" target="_blank">GITHUB REPO <Right_arrow_500 /></a>
          </div>
            <div className="about_project">
              {/* Tech icons */}
              <div className="tech_used">
                <h3 className='tech_title'>TECH USED</h3>
                <div className="tech_icons_container">
                  {Object.entries(obj).map(([key, { svg: SvgComponent, text }]) => (
                          <div key={key} className="icon_container">
                              <SvgComponent />
                              <p>{text}</p>
                          </div>
                      ))}
                </div>
              </div>
              
            {/* Project details */}
            <div className="project_details">
              <h3 className='project_details_title'>Under the Hood</h3>
              <div className="project_content">
                    <p>Creating this portfolio was a rewarding challenge that allowed me to showcase both my technical skills and creativity. Here's what went into building it:</p>
                    <ul>
                      <li>
                        <span>Technologies Used: </span>
                        The portfolio was built using React for its dynamic and component-based architecture, GSAP for powerful and smooth animations, along with JavaScript (ES6+), HTML, and CSS for the structure, logic, and styling.
                      </li>
                      <li>
                        <span>Animations with GSAP: </span>
                        I used GSAP extensively to create engaging animations, ensuring a seamless and polished user experience. From subtle hover effects to complex page transitions, GSAP was instrumental in bringing the site to life.
                      </li>
                      <li>
                        <span>Code Quality and Optimization: </span>
                        Special attention was given to maintaining clean, modular code and following best practices. I prioritized efficient state management and leveraged React’s component lifecycle to ensure proper cleanup of GSAP animations when components unmounted, preventing memory leaks and maintaining performance.
                      </li>
                      <li>
                        <span>Responsive Design: </span>
                        The site is fully responsive, providing an optimal viewing experience across devices. This was achieved by combining modern CSS techniques and thoughtful layout planning.
                      </li>
                    </ul>
                    <p>This project reflects my ability to combine technical expertise with a strong eye for design and performance optimization, all while ensuring a smooth and intuitive user experience.</p>
              </div>
            </div>
          </div>
        </div>
      )
};

export default DefaultProject;
  