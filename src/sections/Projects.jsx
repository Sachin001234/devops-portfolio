import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'

const projects = [
    {
        number: '01',
        category: 'DEVOPS CI/CD PIPELINE',
        title: 'Jerney',
        description:
            'A blog platform used as the application base for implementing and practicing a complete DevOps CI/CD workflow. The focus of the project was automation, code quality, artifact management, containerization, and cloud image delivery.',
        architecture:
            'Git → Jenkins → Maven Build → SonarQube → Nexus → Docker → AWS ECR',
        work: [
            'Configured a Jenkins-based CI/CD pipeline',
            'Integrated Maven for application builds',
            'Integrated SonarQube for code quality analysis',
            'Worked with Nexus for artifact management',
            'Containerized the application using Docker',
            'Built and tagged Docker images',
            'Configured AWS ECR for container image storage',
            'Connected Git-based source control with the CI/CD workflow',
        ],
        skills: [
            'Jenkins',
            'Docker',
            'SonarQube',
            'Nexus',
            'AWS ECR',
            'Git',
            'Maven',
            'CI/CD',
        ],
        featured: false,
    },

    {
        number: '02',
        category: 'MICROSERVICES & KUBERNETES',
        title: 'Microservices Application',
        description:
            'A containerized microservices application created to understand service separation, container orchestration, Kubernetes networking, service discovery, and deployment of multiple independent services.',
        architecture:
            'User Service + Product Service + Order Service → PostgreSQL',
        work: [
            'Worked with separate User, Product, and Order services',
            'Created Dockerfiles for individual services',
            'Built Docker images for the microservices',
            'Pushed container images to AWS ECR',
            'Created Kubernetes Deployments and Services',
            'Deployed the application using Minikube',
            'Configured PostgreSQL for persistent application data',
            'Worked with Kubernetes service discovery and internal networking',
            'Created Kubernetes YAML manifests for deployment',
            'Tested the individual service APIs',
        ],
        skills: [
            'Docker',
            'Kubernetes',
            'Minikube',
            'AWS ECR',
            'FastAPI',
            'PostgreSQL',
            'Kubernetes YAML',
            'Microservices',
        ],
        featured: false,
    },

    {
        number: '03',
        category: 'INFRASTRUCTURE AUTOMATION',
        title: 'Cloud-Native Voting App',
        description:
            'A multi-service voting application used as a practical environment for learning infrastructure provisioning, server configuration, containerization, Kubernetes deployment, monitoring, and automation.',
        architecture:
            'Vote App → Redis → Worker → PostgreSQL → Result App',
        work: [
            'Containerized the multi-service voting application',
            'Created and managed Docker Compose services',
            'Worked with Linux-based environments',
            'Provisioned infrastructure using Terraform',
            'Configured servers using Ansible',
            'Created Kubernetes deployment resources',
            'Worked with Kubernetes networking',
            'Worked with persistent storage concepts',
            'Added monitoring and observability components',
            'Created Python automation scripts',
            'Worked with configuration and security practices',
        ],
        skills: [
            'Docker',
            'Docker Compose',
            'Terraform',
            'Ansible',
            'Kubernetes',
            'Linux',
            'Python',
            'Redis',
            'PostgreSQL',
        ],
        featured: false,
    },

    {
        number: '04',
        category: 'GITOPS CI/CD PLATFORM',
        title: 'vLLM DevOps Platform',
        description:
            'A complete DevOps platform built around vLLM inference, combining automated CI/CD, Docker, Kubernetes, Helm, Kustomize, Argo CD, monitoring, secrets management, and GitOps-based deployment workflows.',
        architecture:
            'GitHub → GitHub Actions → Docker → GitOps Repository → Argo CD → Kubernetes → vLLM',
        work: [
            'Created separate platform and GitOps repositories',
            'Built GitHub Actions CI/CD workflows',
            'Automated testing and Docker image builds',
            'Implemented container image tagging and publishing',
            'Created Kubernetes deployment resources',
            'Used Helm for application deployment',
            'Used Kustomize for environment configuration',
            'Created development and production overlays',
            'Implemented GitOps deployment using Argo CD',
            'Configured Prometheus and Grafana monitoring',
            'Worked with alerting and Slack notifications',
            'Implemented secrets management',
            'Worked with rollback and self-healing concepts',
            'Built a React frontend for interacting with the inference platform',
            'Worked with Kubernetes networking and Ingress',
        ],
        skills: [
            'GitHub',
            'GitHub Actions',
            'Docker',
            'Kubernetes',
            'Helm',
            'Kustomize',
            'Argo CD',
            'GitOps',
            'Prometheus',
            'Grafana',
        ],
        featured: true,
    },
]

function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">

                <motion.div
                    className="projects-heading"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-label">MY PROJECTS</span>

                    <h2>
                        Things I've
                        <span> Built & Automated</span>
                    </h2>

                    <p>
                        Practical DevOps projects covering CI/CD, containers,
                        Kubernetes, cloud infrastructure, Infrastructure as Code,
                        GitOps, automation, and observability.
                    </p>
                </motion.div>

                <div className="projects-list">

                    {projects.map((project, index) => (
                        <Reveal
                            key={project.title}
                            delay={index * 0.2}
                        >
                            <motion.article
                                className={`project-card ${project.featured ? 'project-featured' : ''
                                    }`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -6 }}
                            >

                                <div className="project-number">
                                    {project.number}
                                </div>

                                <div className="project-content">

                                    <div className="project-header">
                                        <div>
                                            <span className="project-subtitle">
                                                {project.category}
                                            </span>

                                            <h3>{project.title}</h3>
                                        </div>

                                        {project.featured && (
                                            <span className="featured-badge">
                                                FEATURED
                                            </span>
                                        )}
                                    </div>

                                    <p className="project-description">
                                        {project.description}
                                    </p>

                                    <div className="project-architecture">
                                        <span>ARCHITECTURE</span>

                                        <p>{project.architecture}</p>
                                    </div>

                                    <div className="project-work">
                                        <span>DEVOPS WORK</span>

                                        <ul>
                                            {project.work.map((item) => (
                                                <li key={item}>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="project-bottom">

                                        <div className="project-skills">
                                            {project.skills.map((skill) => (
                                                <span key={skill}>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="project-links">
                                            <a
                                                href="#"
                                                onClick={(event) =>
                                                    event.preventDefault()
                                                }
                                            >
                                                GitHub →
                                            </a>
                                        </div>

                                    </div>

                                </div>

                                <div className="project-glow"></div>

                            </motion.article>
                             </Reveal>
          ))}

                        </div>
      </div>
        </section>
    )
}

export default Projects