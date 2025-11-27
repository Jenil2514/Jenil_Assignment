import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuizCard } from "@/components/QuizCard";
import { ProgressBar } from "@/components/ProgressBar";
import { QuestionOption } from "@/components/QuestionOption";
import { ScoreDisplay } from "@/components/ScoreDisplay";
import { quizQuestions, Question } from "@/data/quizData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(
    Array(quizQuestions.length).fill(-1)
  );
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

  const handleOptionSelect = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    const correctAnswers = selectedAnswers.filter(
      (answer, index) => answer === quizQuestions[index].correctAnswer
    ).length;
    const calculatedScore = Math.round(
      (correctAnswers / quizQuestions.length) * 100
    );
    setScore(calculatedScore);
    setShowResults(true);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers(Array(quizQuestions.length).fill(-1));
    setShowResults(false);
    setScore(0);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="fixed inset-0 -z-10" style={{ background: 'linear-gradient(107.96deg, #BECFEE 0%, #71C6E2 50%, #D9F4FA 75%, #BECFEE 100%)' }} />

      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key="quiz"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex items-center justify-center w-full px-8"
            style={{
              paddingTop: '60px',
              paddingBottom: '60px',
              height: 'auto'
            }}
          >
            <QuizCard isFirstPage={currentQuestionIndex === 0}>
              <div className="text-center mb-8">
                <h1 className="mb-4 italic" style={{ fontFamily: 'DM Serif Display', fontWeight: 400, fontSize: '70px', letterSpacing: '-4px', background: 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Test Your Knowledge
                </h1>
                <p className="text-muted-foreground text-lg">
                  Answer all questions to see your results
                </p>
              </div>

              <ProgressBar
                totalQuestions={quizQuestions.length}
                currentQuestion={currentQuestionIndex}
                isCurrentAnswered={selectedAnswers[currentQuestionIndex] !== -1}
              />

              <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <div
                  className="rounded-[10px] mb-6 border flex items-center justify-center"
                  style={{
                    width: '896px',
                    height: '78px',
                    background: 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)',
                    border: '1px solid #96E5FF 50%',
                    paddingTop: '24px',
                    paddingBottom: '24px',
                    maxWidth: '90%'
                  }}
                >
                  <h2 className="text-xl md:text-2xl font-medium text-center">
                    {currentQuestionIndex + 1}. {currentQuestion.question}
                  </h2>
                </div>

                <div
                  className="flex flex-col"
                  style={{
                    width: '897px',
                    gap: '14px',
                    maxWidth: '90%'
                  }}
                >
                  {currentQuestion.options.map((option, index) => (
                    <QuestionOption
                      key={index}
                      text={option}
                      isSelected={
                        selectedAnswers[currentQuestionIndex] === index
                      }
                      onClick={() => handleOptionSelect(index)}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-end mt-8 gap-3 w-full">
                  {isLastQuestion ? (
                    <>
                      <motion.button
                        onClick={handlePrevious}
                        disabled={currentQuestionIndex === 0}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 shadow-md transition-all ${currentQuestionIndex === 0
                            ? "opacity-30 cursor-not-allowed"
                            : ""
                          }`}
                        style={{
                          borderRadius: '10px',
                          border: '1px solid #96E5FF 50%',
                          background: 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)'
                        }}
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </motion.button>
                      <motion.button
                        onClick={handleSubmit}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={selectedAnswers[currentQuestionIndex] === -1}
                        className={`px-8 py-3 font-medium text-lg shadow-lg transition-all ${selectedAnswers[currentQuestionIndex] === -1
                            ? "opacity-30 cursor-not-allowed"
                            : "hover:shadow-xl"
                          }`}
                        style={{
                          borderRadius: '10px',
                          border: '1px solid #96E5FF 50%',
                          background: 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)'
                        }}
                      >
                        Submit
                      </motion.button>
                    </>
                  ) : (
                    <>
                      <motion.button
                        onClick={handlePrevious}
                        disabled={currentQuestionIndex === 0}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 shadow-md transition-all ${currentQuestionIndex === 0
                            ? "opacity-30 cursor-not-allowed"
                            : ""
                          }`}
                        style={{
                          borderRadius: '10px',
                          border: '1px solid #96E5FF 50%',
                          background: 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)'
                        }}
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </motion.button>
                      <motion.button
                        onClick={handleNext}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 shadow-md transition-all"
                        style={{
                          borderRadius: '10px',
                          border: '1px solid #96E5FF 50%',
                          background: 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)'
                        }}
                      >
                        <ChevronRight className="w-6 h-6" />
                      </motion.button>
                    </>
                  )}
                </div>
              </motion.div>
            </QuizCard>
          </motion.div>
        ) : (
          <ScoreDisplay key="results" score={score} onRestart={handleRestart} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
