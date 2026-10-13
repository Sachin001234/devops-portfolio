import { motion } from 'framer-motion'

function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
  }

  const initial = directions[direction] || directions.up

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initial.x,
        y: initial.y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal