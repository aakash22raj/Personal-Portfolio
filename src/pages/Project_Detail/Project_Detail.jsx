import { useParams } from 'react-router-dom';
import './Project_Detail.css';
import { Data } from '../../Components/MyProjects/Data';
import Projects from '../../Components/MyProjects/Projects';
import { LuSend } from "react-icons/lu";
import { useState } from 'react';



const Project_Detail = () => {
    const { id } = useParams();
    const project = Data.find((item) => item.id === parseInt(id));
    const [selectedImage, setSelectedImage] = useState(project.image[0]);


    if (!project) {
        return <h2 className="text-center text-red-500">Project not found</h2>;
    }

    return (
        <section className="project-detail section container">
            <div className="project-detail__grid">
                <div className="project-detail__images">
                    <img src={selectedImage} alt={project.title} className="project-detail__main-img" />
                    <div className="project-detail__thumbs">
                        {project.image.map((imgSrc, index) => (
                            <img 
                                key={index}
                                src={imgSrc} 
                                alt={`Thumbnail ${index + 1}`}
                                className={`project-detail__thumb ${
                                  selectedImage === imgSrc ? 'active-thumb' : ''
                                }`}
                                onClick={() => setSelectedImage(imgSrc)}
                            />
                        ))}
                    </div>
                </div>
                
                <div className="project-detail__content">
                    <h2 className="section__title project-title">{project.title}</h2>
                    <p className="project-detail__description">{project.description}</p>

                    {project.technology && (
                        <div className="project-detail__stack">
                            <h3 className="tech__title">Tech Stack:</h3>
                            <ul className="tech__list">
                                {project.technology.map((tech, index) => (
                                    <li key={index} className="tech__item">{tech}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="project-detail__buttons">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="button project-button">
                            Live 
                            <i><LuSend /></i>
                        </a>
                        <a href={project.codelink} target="_blank" rel="noopener noreferrer" className="button project-button">
                            Code
                            <i><LuSend /></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* <div>
                <Projects />
            </div> */}
        </section>
    );
};

export default Project_Detail;
