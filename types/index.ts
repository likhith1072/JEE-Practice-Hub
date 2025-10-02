export interface Question {
  id: number;
  subject: string;
  topic: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface AnswerState {
  [key: number]: {
    selectedAnswer: number;
    isCorrect: boolean;
  };
}