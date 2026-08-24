import { motion } from 'framer-motion';

const clover = 'M50 18 C40 -3 13 2 17 27 C-5 38 2 65 27 61 C35 86 65 86 73 61 C98 65 105 38 83 27 C87 2 60 -3 50 18 Z';
const inner = 'M50 22 C41 4 19 7 22 29 C3 38 8 60 29 56 C37 77 63 77 71 56 C92 60 97 38 78 29 C81 7 59 4 50 22 Z';

export default function LoveLuxuryLoader() {
  return <motion.div className="lux-loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .5 }}>
    <div className="lux-loader__grain"/>
    <div className="lux-loader__content">
      <motion.svg className="lux-loader__mark" viewBox="0 0 100 100" initial={{ opacity: 0, scale: .72, rotate: -18 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
        <motion.path d={clover} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.25, ease: 'easeInOut' }}/>
        <motion.path d={inner} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.05, delay: .18, ease: 'easeInOut' }}/>
      </motion.svg>
      <motion.div className="lux-loader__brand" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35, duration: .7 }}>LOVE LUXURY</motion.div>
      <motion.div className="lux-loader__eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .62 }}>THE PRIVATE GALLERY · LONDON</motion.div>
      <div className="lux-loader__track"><motion.span initial={{ x: '-100%' }} animate={{ x: '0%' }} transition={{ duration: 1.45, ease: [0.16, 1, 0.3, 1] }}/></div>
      <motion.div className="lux-loader__count" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}>AUTHENTICATED · CURATED</motion.div>
    </div>
  </motion.div>;
}
