import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'

const certifications = [
    {
        title: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        status: 'Coming Soon',
        description:
            'Foundational AWS certification focused on cloud concepts, core AWS services, security, pricing, and cloud architecture.',
        icon: '☁️',
    },
    {
        title: 'DevOps Certification',
        issuer: 'Certification Details',
        status: 'Coming Soon',
        description:
            'DevOps certification details will be added here once the certification is completed.',
        icon: '⚙️',
    },
    {
        title: 'Additional Certification',
        issuer: 'To Be Added',
        status: 'Coming Soon',
        description:
            'Future certifications, courses, or professional credentials will be added here.',
        icon: '🏆',
    },
]

function Certifications() {
    return (
        <section id="certifications" className="certifications-section">
            <div className="section-container">

                <motion.div
                    className="section-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-label">CERTIFICATIONS</span>

                    <h2>
                        Learning & <span>Credentials</span>
                    </h2>

                    <p>
                        Professional certifications and credentials that support my
                        journey in cloud and DevOps engineering.
                    </p>
                </motion.div>

                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <Reveal
                            key={cert.title}
                            delay={index * 0.12}
                        >
                            <motion.div className="certification-card">

                                <div className="certification-icon">
                                    {cert.icon}
                                </div>

                                <div className="certification-content">
                                    <span className="certification-status">
                                        {cert.status}
                                    </span>

                                    <h3>{cert.title}</h3>

                                    <p className="certification-issuer">
                                        {cert.issuer}
                                    </p>

                                    <p className="certification-description">
                                        {cert.description}
                                    </p>
                                </div>

                            </motion.div>
                        </Reveal>
                    ))}
                </div>

                <motion.div
                    className="resume-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div>
                        <span className="section-label">RESUME</span>

                        <h3>
                            Want to know more about my journey?
                        </h3>

                        <p>
                            My detailed resume covering my education, technical skills,
                            projects, and experience will be available here.
                        </p>
                    </div>

                    <a
                        href="/resume.pdf"
                        className="resume-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Resume
                        <span>↓</span>
                    </a>
                </motion.div>

            </div>
        </section>
    )
}

export default Certifications

