import { motion } from "framer-motion";

interface ProgressBarProps {
  totalQuestions: number;
  currentQuestion: number;
  isCurrentAnswered: boolean;
}

export const ProgressBar = ({ totalQuestions, currentQuestion, isCurrentAnswered }: ProgressBarProps) => {
  return (
    <div className="flex gap-3 mb-8 md:mb-12">
      {Array.from({ length: totalQuestions }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="h-2 flex-1 rounded-full overflow-hidden bg-progress-incomplete"
        >
          <motion.div
            className="h-full bg-progress-complete"
            initial={{ width: '0%' }}
            animate={{ 
              width: index < currentQuestion 
                ? '100%' 
                : index === currentQuestion && isCurrentAnswered 
                  ? '80%' 
                  : '0%' 
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      ))}
    </div>
  );
};
