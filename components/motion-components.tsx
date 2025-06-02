import { motion, AnimatePresence } from "framer-motion"
import { type ReactNode } from "react"

interface MotionComponents {
  motion: typeof motion
  AnimatePresence: typeof AnimatePresence
}

interface MotionComponentsProps {
  children: (components: MotionComponents) => ReactNode
}

function MotionComponents({ children }: MotionComponentsProps) {
  return children({ motion, AnimatePresence })
}

export default MotionComponents