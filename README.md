# Malabar Kannada Sangamam (ಮಲಬಾರ್ ಕನ್ನಡ ಸಂಗಮ)

A modern web platform dedicated to celebrating the rich cultural, educational, and historical bond between Karnataka and Malabar (Kerala). This project highlights the "Malabar Kannada Sangamam" event, organized by **Misbahul Jamia Kannada Sangha, Pattikkad**.

![Project Preview](/public/typography.png)

## 🌟 Features

- **Modern Aesthetic**: A clean, minimalist design featuring glassmorphism (`backdrop-blur`), smooth animations, and a polished UI.
- **Dynamic Theme System**: Automatically detects system preference (Dark/Light mode) with a manual toggle for user control. Persists preference via local storage.
- **Responsive Navigation**: 
  - Sleek top navigation bar with glass effect.
  - Mobile-first approach with a smooth dropdown menu.
- **Content Sections**:
  - **History Timeline**: Visual journey of the relationship between Malabar and Karnataka.
  - **Articles**: A collection of cultural and educational writings.
  - **Upcoming Programs**: Details about future events and sessions.
- **Registration System**: 
  - Integrated registration form for the event.
  - Automatic deadline management (shows "Registration Closed" after the set date).
  - Form validation and status feedback (loading, success, error modal).

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter / Geist (via `next/font`)
- **Animations**: CSS Transitions & Keyframes

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `app/page.tsx`: Main landing page containing all sections (Hero, Timeline, Articles, etc.).
- `app/registration/RegistrationForm.tsx`: The registration logic and UI.
- `app/globals.css`: Global styles and custom Tailwind utilities.

## 🤝 Contribution

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open-source and available under the [MITd License](LICENSE).
