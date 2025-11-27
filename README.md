# Quiz Application

A modern, interactive quiz application built with React, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and a beautiful gradient UI.

## Features

- **Interactive Quiz Interface**: Answer multiple-choice questions with smooth animations
- **Progress Tracking**: Visual progress bar showing current question and completion status
- **Navigation**: Move between questions with Previous/Next buttons
- **Score Calculation**: Automatic scoring with percentage display
- **Results Screen**: View your final score with a restart option
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Framer Motion animations for transitions and interactions

## Tech Stack

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript&logoColor=white)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-06B6D4?logo=tailwindcss&logoColor=white)]()
[![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?logo=vite&logoColor=white)]()
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.24-0055FF?logo=framer&logoColor=white)]()
[![React Router](https://img.shields.io/badge/React%20Router-6.30.1-CA4245?logo=reactrouter&logoColor=white)]()
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Components-000000?logo=shadcnui&logoColor=white)]()
[![React Query](https://img.shields.io/badge/React%20Query-5.83.0-FF4154?logo=reactquery&logoColor=white)]()

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **State Management**: React Hooks & React Query
- **Routing**: React Router DOM

## Project Structure

```
src/
├── components/
│   ├── QuizCard.tsx          # Main quiz card wrapper with animations
│   ├── ProgressBar.tsx       # Progress indicator component
│   ├── QuestionOption.tsx    # Individual answer option button
│   ├── ScoreDisplay.tsx      # Results screen component
│   ├── NavLink.tsx           # Navigation link component
│   └── ui/                   # shadcn/ui components
├── pages/
│   ├── Index.tsx             # Main quiz page
│   └── NotFound.tsx          # 404 page
├── data/
│   └── quizData.ts           # Quiz questions and answers
├── hooks/                    # Custom React hooks
├── lib/                      # Utility functions
├── App.tsx                   # Main app component
└── main.tsx                  # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## How to Use

1. **Start Quiz**: Click on the first question to begin
2. **Select Answer**: Click on an option to select your answer
3. **Navigate**: Use Previous/Next buttons to move between questions
4. **Submit**: After answering all questions, click Submit to see your score
5. **Restart**: Click Restart to retake the quiz

## Quiz Data

Quiz questions are stored in `src/data/quizData.ts`. Each question includes:
- Question text
- Multiple choice options
- Correct answer index

## Styling

The application uses Tailwind CSS with custom configurations:
- Gradient backgrounds
- Glass-morphism effects
- Smooth transitions and animations
- Mobile-responsive design

## Components

### QuizCard
Main container for quiz content with gradient background and blur effects.

### ProgressBar
Shows current progress through the quiz with question counter.

### QuestionOption
Interactive button for each answer option with selection feedback.

### ScoreDisplay
Results screen showing final score and restart option.

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue in the repository.
