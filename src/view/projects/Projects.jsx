import './Projects.css';
import { FaMobileAlt } from "react-icons/fa";

export function Projects() {
    const projectList = [
      { name: 'Expense Tracker App', description: 'Developed a Flutter app for personal finance management, utilizing Provider for state management.', link: '#' , tools : ['Flutter', 'ExpressJS', 'MongoDB']},
      { name: 'Todo Note App', description: 'Description of project 2', link: '#',tools : ['Flutter', 'Node', 'ExpressJs', 'MongoDB'] },
      { name: 'Project 3', description: 'Description of project 3', link: '#',tools : ['React', 'Node', 'Express', 'MongoDB'] },
    ];
  
    return (
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          {projectList.map((project, index) => (
            <div key={index} className="project-item">
              <FaMobileAlt className='icon' />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className='tools'>
                <p>Tools:</p>
               <div className="tools-body">
               {project.tools.map((tool, index) => (
                  <span key={index} style={{}} className='tool-items'>{tool}</span>
                ))}
               </div>
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  }