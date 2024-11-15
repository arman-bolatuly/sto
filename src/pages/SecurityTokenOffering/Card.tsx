import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { Title } from '@mantine/core'

interface CardProps {
  text: string
}

const Card: React.FC<CardProps> = ({ text }) => {
  // const [showOverlay, setShowOverlay] = useState<boolean>(false)
  return (
    <motion.div
      className="relative overflow-x-hidden h-[300px] min-w-[300px] bg-slate-400 hover:bg-slate-200 rounded-xl flex justify-center items-center"
      // onHoverStart={() => setShowOverlay(true)}
      // onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        <div className="p-6 text-center">
          <Title order={3} className="text-black text-center bodyDemibold">
            {text}
          </Title>
        </div>

        {/* {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />

            <motion.p
              className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <span className="text-black">{text}</span>
            </motion.p>

            <span className="text-black">{text}</span>
          </motion.div>
        )} */}
      </AnimatePresence>

      {/* <Image src={image} alt="Card" className="w-full h-full object-cover" /> */}
    </motion.div>
  )
}

export default Card
