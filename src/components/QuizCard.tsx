import { motion } from "framer-motion";
import { ReactNode } from "react";

interface QuizCardProps {
  children: ReactNode;
  className?: string;
  isFirstPage?: boolean;
}

export const QuizCard = ({ children, className = "", isFirstPage = false }: QuizCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`relative mx-auto ${className}`}
      style={{ 
        width: '100%',
        height: 'auto',
        maxWidth: '1300px',
        maxHeight: 'none'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-[42px] blur-2xl" />
      <div 
        className="relative rounded-[42px] p-8 md:p-12"
        style={{
          background: 'rgba(255, 255, 255, 1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0px 8px 40px 0px rgba(150, 229, 255, 0.6), 0px 4px 20px 0px rgba(198, 233, 247, 0.4)',
          borderTop: '25px solid rgba(150, 229, 255, 0.5)',
          borderRight: '30px solid rgba(150, 229, 255, 0.5)',
          borderBottom: '25px solid rgba(150, 229, 255, 0.5)',
          borderLeft: '30px solid rgba(150, 229, 255, 0.5)',
          position: 'relative'
        }}
      >
        {isFirstPage && (
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '140px',
                height: '70px'
              }}
            >
              <img
                src="/src/images/vector.png"
                alt="speech bubble"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#3CABDA',
                  whiteSpace: 'nowrap'
                }}
              >
                Best of Luck!
              </span>
            </div>
            <img
              src="/src/images/749d79faabe3ab4ee8d83233bf1b15aa4471e72b.gif"
              alt="decoration"
              style={{
                width: '110px',
                height: 'auto'
              }}
            />
          </div>
        )}
        {children}
      </div>
    </motion.div>
  );
};
