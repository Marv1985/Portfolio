import './ProjectTemplate.css'
import ReactIcon from '../../assets/reactIcon.svg?component'
import JavascriptIcon from '../../assets/javascriptIcon.svg?component'
import HtmlIcon from '../../assets/htmlIcon.svg?component'
import CssIcon from '../../assets/cssIcon.svg?component'
import Gsap from '../../assets/gsap.svg?component'

const DefaultProject = () => {

    const obj = {
          1: { svg: ReactIcon, text: 'REACT' },
          2: { svg: JavascriptIcon, text: 'JAVASCRIPT' },
          3: { svg: Gsap, text: 'GSAP' },
          4: { svg: CssIcon, text: 'CSS3' },
          5: { svg: HtmlIcon, text: 'HTML5' },
      };

    return (
        <div className="individual_project_parent">
          <div className="project_and_tech">
            <h1><span>this</span><span>.</span><span>Portfolio</span></h1>
            <img src="projectGifs/portfolio.gif" alt="" />
          </div>
          <div className="about_project">
            <div className="tech_used">
              <h3>TECH USED</h3>
              <div className="tech_icons_container">
                {Object.entries(obj).map(([key, { svg: SvgComponent, text }]) => (
                        <div key={key} className="icon_container">
                            <SvgComponent />
                            <p>{text}</p>
                        </div>
                    ))}
              </div>
            </div>
            
          </div>
        </div>
      )
};

export default DefaultProject;
  