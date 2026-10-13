import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">ABOUT ME</span>

          <h2>
            Building Reliable
            <span> Digital Infrastructure</span>
          </h2>
        </motion.div>

        <div className="about-content">

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p>
              I'm Sachin Pandey, a BCA graduate specializing in
              DevOps and cloud technologies. I enjoy building,
              automating, and deploying reliable infrastructure
              using modern DevOps practices.
            </p>

            <p>
              My focus is on CI/CD automation, containerization,
              Kubernetes, cloud infrastructure, Infrastructure as
              Code, monitoring, and GitOps workflows.
            </p>

            <p>
              I learn by building real-world projects and
              continuously improving my understanding of
              scalable and automated systems.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="about-card-glow"></div>

            <div className="about-card-content">
              <span>BCA</span>
              <strong>Graduate</strong>

              <div className="about-divider"></div>

              <span>DevOps</span>
              <strong>Specialized</strong>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About