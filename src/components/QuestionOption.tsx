import { motion } from "framer-motion";

interface QuestionOptionProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

export const QuestionOption = ({ text, isSelected, onClick }: QuestionOptionProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`
        w-full rounded-[10px] text-center font-medium text-lg
        transition-all duration-300 border
      `}
      style={{
        height: '78px',
        paddingTop: '27px',
        paddingBottom: '27px',
        border: '1px solid rgba(150, 229, 255, 0.5)',
        background: isSelected
          ? 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)'
          : 'linear-gradient(89.72deg, rgba(198, 233, 247, 0.1) 0.09%, rgba(229, 248, 255, 0.1) 99.91%)',
      }}
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.background = 'linear-gradient(89.72deg, rgba(198, 233, 247, 0.6) 0.09%, rgba(229, 248, 255, 0.6) 99.91%)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.background = 'linear-gradient(89.72deg, rgba(198, 233, 247, 0.1) 0.09%, rgba(229, 248, 255, 0.1) 99.91%)';
        }
      }}
    >
      {text}
    </motion.button>
  );
};
