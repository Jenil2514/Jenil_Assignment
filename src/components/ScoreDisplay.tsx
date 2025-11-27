import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface ScoreDisplayProps {
  score: number;
  onRestart: () => void;
}

export const ScoreDisplay = ({ score, onRestart }: ScoreDisplayProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, score, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [score, count]);

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col items-center justify-center min-h-screen px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <p className="text-muted-foreground text-lg mb-6" style={{ backgroundColor: 'white', padding: '8px 16px', borderRadius: '8px', display: 'inline-block' }}>Keep Learning!</p>
        
        <h2 className="font-display text-4xl md:text-5xl mb-8 text-foreground italic" style={{fontFamily: 'DM Serif Display', fontWeight: 400, fontSize: '70px', letterSpacing: '-4px', background: 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Your Final score is
        </h2>
        
        <motion.div 
          className="text-8xl md:text-9xl font-display font-bold mb-12 flex items-center justify-center gap-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.span className="text-primary" style={{fontFamily: 'DM Serif Display', fontWeight: 400, background: '#266580', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: '#266580' }}>{rounded}</motion.span>
          <span className="text-primary text-6xl md:text-7xl" style={{fontFamily: 'DM Serif Display', color: '#266580' }}>%</span>
        </motion.div>

        <motion.button
          onClick={onRestart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-secondary text-secondary-foreground px-10 py-4 rounded-2xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Start Again
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
