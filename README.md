# 🎓 JEE Practice Hub

A modern, interactive web application built with Next.js for JEE (Joint Entrance Examination) aspirants to practice Physics, Chemistry, and Mathematics questions with instant feedback and detailed explanations.


## ✨ Features

- 📚 **Comprehensive Question Bank** - Practice questions covering Physics, Chemistry, and Mathematics
- ⚡ **Instant Feedback** - Get immediate results with color-coded correct/incorrect answers
- 💡 **Detailed Explanations** - Understand concepts with step-by-step explanations for each question
- 📱 **Fully Responsive** - Seamless experience across desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX** - Clean, intuitive interface with smooth animations and transitions
- 🔄 **Try Again Feature** - Reset questions to practice multiple times

## 🌐 Live Demo

- **Live Deployed Link**: https://jee-practice-hub.vercel.app/

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts

## 📁 Project Structure

```
jee-practice-app/
├── app/
│   ├── layout.tsx          # Root layout with navbar and footer
│   ├── page.tsx            # Homepage with hero and features
│   ├── dashboard/
│   │   └── page.tsx        # Practice dashboard with questions
│   └── globals.css         # Global styles (Tailwind directives)
├── components/
│   ├── Navbar.tsx          # Navigation bar component
│   ├── Hero.tsx            # Hero section component
│   ├── QuestionCard.tsx    # Interactive question card component
│   └── Footer.tsx          # Footer component
├── data/
│   └── questions.json      # Mock JEE questions database
├── types/
│   └── index.ts            # TypeScript type definitions
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/likhith1072/JEE-Practice-Hub.git
cd JEE-Practice-Hub
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```


## 🎯 Usage

### Homepage
- View the landing page with an attractive hero section
- Explore features and benefits of the platform
- Check subject-wise overview (Physics, Chemistry, Mathematics)
- Click "Start Practicing Now" to navigate to the dashboard

### Dashboard
- View statistics showing total questions and subject-wise breakdown
- Browse through all available practice questions
- Click on any option (A, B, C, or D) to submit your answer
- Get instant visual feedback:
  - ✅ Green highlight for correct answers
  - ❌ Red highlight for incorrect answers
- Read detailed explanations for each question
- Use the "Try Again" button to reset and retry questions

## 📝 Adding More Questions

To add more questions to the practice set, edit the `data/questions.json` file:

```json
{
  "id": 7,
  "subject": "Physics",
  "topic": "Thermodynamics",
  "question": "What is the first law of thermodynamics?",
  "options": [
    "Energy can be created",
    "Energy cannot be created or destroyed",
    "Energy can be destroyed",
    "Energy is constant in isolated systems"
  ],
  "correctAnswer": 1,
  "explanation": "The first law of thermodynamics states that energy cannot be created or destroyed, only transformed from one form to another. This is also known as the law of conservation of energy."
}
```

**Important Notes:**
- `correctAnswer` is zero-indexed (0 = first option, 1 = second option, etc.)
- Ensure the `id` is unique for each question
- Use appropriate `subject` values: "Physics", "Chemistry", or "Mathematics"
- Keep explanations clear and educational

## 🚀 Deployment

### Deploy on Vercel (Recommended)

For deployment on Vercel:

1. **Push your code to GitHub** 

2. **Deploy to Vercel:**
   - Visit [Vercel](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import `/JEE-Practice-Hub`
   - Click "Deploy"

3. **Automatic Deployments:**
   - Every push to the `main` branch will trigger a new deployment
   - Preview deployments are automatically created for every commit on a branch and for pull requests, allowing changes to be tested before merging into the main branch.


