import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="footer-main">

          <div className="footer-brand">
            <a href="#" className="footer-logo">
              SP
            </a>

            <p>
              BCA Graduate <span>•</span> DevOps Specialized
            </p>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com/Sachin001234"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sachin-pandey-0bb651351/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:sachinpandey6724@example.com">
              Email
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Sachin Pandey. All rights reserved.
          </p>

          <p>
            Built with React <span>•</span> Three.js <span>•</span> Framer Motion
          </p>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer