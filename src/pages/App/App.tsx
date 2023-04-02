import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GenderSelectionPage from '../GenderSelectionPage'
import BirthdateSelectionPage from '../BirthDateSelectionPage'
import ZodiacResultPage from '../ZodiacDisplayPage'
import QuizQuestionsPage from '../QuizQuestionsPage'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GenderSelectionPage />} />
        <Route path="/birthdate" element={<BirthdateSelectionPage />} />
        <Route path="/zodiac" element={<ZodiacResultPage />} />
        <Route path="/quiz" element={<QuizQuestionsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
