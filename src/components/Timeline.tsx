import { useState } from 'react';
import './Timeline.css';

export default function Timeline() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            year: "2024-2025",
            title: "DoodleEarth",
            organization: "Personal Project",
            description: "A location-based art commission platform where users can discover and commission local artists. Built with React, Next.js, TypeScript, and Supabase for real-time database management.",
            tech: ["React", "Next.js", "TypeScript", "Supabase"]
        },
        {
            year: "2024-2025",
            title: "Co-op Scout",
            organization: "Personal Project",
            description: "A co-op job search aggregator tool that scrapes Northeastern's NUWorks to help students find opportunities. Features Python web scraping with Selenium and automated job matching.",
            tech: ["Python", "Supabase", "Web Scraping", "React", "TypeScript"]
        },
        {
            year: "2023-2024",
            title: "Child Therapist Training Database",
            organization: "Northeastern University",
            description: "Award-winning database system that won Northeastern's Khoury Undergraduate Excellence Award. Features AI-generated patient personas using OpenAI API to help train child therapists in realistic scenarios.",
            tech: ["React", "Flask", "MySQL", "OpenAI API"]
        },
        {
            year: "2023-2024",
            title: "Research Assistant",
            organization: "The Mills Institute",
            description: "Research project exploring quantum computing applications in machine learning. Implemented quantum machine learning processes using Pennylane frameworks.",
            tech: ["Qiskit", "Pennylane", "Python", "Quantum Computing"]
        }
    ];

    const classes = [
        {
            year: "2024-2025",
            title: "Linear Algebra",
            code: "MATH 2331"
        },
        {
            year: "2024-2025",
            title: "Object-Oriented Design",
            code: "CS 3500"
        },
        {
            year: "2024-2025",
            title: "Algorithms",
            code: "CS 5800"
        },
        {
            year: "2023-2024",
            title: "Discrete Structures",
            code: "CS 1800"
        },
        {
            year: "2023-2024",
            title: "Introduction to Databases",
            code: "CS 3200"
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section className="timeline-section">
            <div className="timeline-two-column">
                {/* Projects Column */}
                <div className="timeline-column">
                    <h2 className="timeline-main-title">Projects</h2>

                    <div className="projects-list">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="project-entry"
                                onClick={() => openModal(project)}
                            >
                                <div className="project-year">{project.year}</div>
                                <div className="project-details">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-organization">{project.organization}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Classes Column */}
                <div className="timeline-column">
                    <h2 className="timeline-main-title">Classes</h2>

                    <div className="classes-list">
                        {classes.map((course, index) => (
                            <div key={index} className="class-entry">
                                <div className="class-year">{course.year}</div>
                                <div className="class-details">
                                    <h3 className="class-title">{course.title}</h3>
                                    <p className="class-code">{course.code}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <div className="project-modal-overlay" onClick={closeModal}>
                    <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="project-modal-close" onClick={closeModal}>&times;</button>
                        <h3 className="project-modal-title">{selectedProject.title}</h3>
                        <p className="project-modal-organization">{selectedProject.organization}</p>
                        <p className="project-modal-description">{selectedProject.description}</p>
                        <div className="project-tech-stack">
                            <h4 className="tech-stack-title">Technologies:</h4>
                            <div className="tech-tags">
                                {selectedProject.tech.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}