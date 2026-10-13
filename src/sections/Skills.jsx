import Reveal from '../components/Reveal'
import { motion } from 'framer-motion'

const skillCategories = [
    {
        title: 'Cloud & AWS',
        icon: '☁',
        skills: [
            'AWS',
            'EC2',
            'ECR',
            'VPC',
            'IAM',
            'CloudWatch',
        ],
    },
    {
        title: 'Containers & Orchestration',
        icon: '◈',
        skills: [
            'Docker',
            'Docker Compose',
            'Kubernetes',
            'Helm',
            'Kustomize',
        ],
    },
    {
        title: 'CI/CD & Automation',
        icon: '⚙',
        skills: [
            'Jenkins',
            'GitHub Actions',
            'GitLab',
            'CI/CD',
            'SonarQube',
            'Nexus',
        ],
    },
    {
        title: 'Infrastructure as Code',
        icon: '⌘',
        skills: [
            'Terraform',
            'Ansible',
        ],
    },
    {
        title: 'GitOps',
        icon: '↻',
        skills: [
            'Argo CD',
            'GitOps',
            'Kubernetes Deployments',
            'Rollback',
            'Self-Healing',
        ],
    },
    {
        title: 'Monitoring & Observability',
        icon: '◉',
        skills: [
            'Prometheus',
            'Grafana',
            'Alerting',
            'Slack Notifications',
        ],
    },
    {
        title: 'Systems & Scripting',
        icon: '$_',
        skills: [
            'Linux',
            'Bash',
            'Python',
            'YAML',
        ],
    },
    {
        title: 'Version Control',
        icon: '⑂',
        skills: [
            'Git',
            'GitHub',
        ],
    },
]

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">

                <motion.div
                    className="skills-heading"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-label">MY SKILLS</span>

                    <h2>
                        Tools I Use to
                        <span> Build & Automate</span>
                    </h2>

                    <p>
                        A DevOps-focused toolkit covering cloud infrastructure,
                        containers, CI/CD, Infrastructure as Code, GitOps,
                        monitoring, and automation.
                    </p>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <Reveal
                            key={category.title}
                            delay={index * 0.1}
                        >
                            <motion.div
                                className="skill-card"
                                whileHover={{ y: -8 }}
                            >
                                <div className="skill-card-top">
                                    <div className="skill-icon">
                                        {category.icon}
                                    </div>

                                    <h3>{category.title}</h3>
                                </div>

                                <div className="skill-list">
                                    {category.skills.map((skill) => (
                                        <span key={skill}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Skills