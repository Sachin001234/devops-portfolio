import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">

                <motion.div
                    className="section-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-label">CONTACT</span>

                    <h2>
                        Let's <span>Connect</span>
                    </h2>

                    <p>
                        Have a project, opportunity, or just want to talk about
                        DevOps and cloud technologies? Feel free to reach out.
                    </p>
                </motion.div>

                <div className="contact-content">

                    <Reveal direction="left">
                        <motion.div className="contact-info">

                            <div className="contact-info-card">
                                <div className="contact-icon">✉️</div>

                                <div>
                                    <span>Email</span>
                                    <a href="mailto:sachinpandey6724@example.com">
                                        sachinpandey6724@example.com
                                    </a>
                                </div>
                            </div>

                            <div className="contact-info-card">
                                <div className="contact-icon">💼</div>

                                <div>
                                    <span>LinkedIn</span>
                                    <a
                                        href="https://www.linkedin.com/in/sachin-pandey-0bb651351/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        LinkedIn Profile
                                    </a>
                                </div>
                            </div>

                            <div className="contact-info-card">
                                <div className="contact-icon">🐙</div>

                                <div>
                                    <span>GitHub</span>
                                    <a
                                        href="https://github.com/Sachin001234"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub Profile
                                    </a>
                                </div>
                            </div>

                        </motion.div>
                    </Reveal>


                    <Reveal direction="right" delay={0.15}>
                        <motion.form
                            className="contact-form"
                            onSubmit={(e) => e.preventDefault()}
                        >

                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="your name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    placeholder="Tell me about your project or opportunity..."
                                />
                            </div>

                            <button type="submit" className="contact-submit">
                                Send Message
                                <span>→</span>
                            </button>

                        </motion.form>
                    </Reveal>

                </div>
            </div>
        </section>
    )
}

export default Contact

