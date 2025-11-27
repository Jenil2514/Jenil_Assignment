export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "How many stars are in the sky?",
    options: ["Two", "Infinite", "One Hundred"],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "What color is the sky on a clear day?",
    options: ["Green", "Blue", "Red"],
    correctAnswer: 1,
  },
];
