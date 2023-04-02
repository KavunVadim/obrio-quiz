import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootState } from '../store/types'

const ZodiacResultPage: React.FC = () => {
  const { gender, birthdate } = useSelector((state: RootState) => state.quiz)
  const zodiac = getZodiacSign(birthdate.month, birthdate.day)

  return (
    <div>
      <h1>Zodiac Result</h1>
      <p>
        {gender === 'male' ? 'He' : 'She'} was born on {birthdate.month}{' '}
        {birthdate.day}.
      </p>
      <p>
        {gender === 'male' ? 'His' : 'Her'} zodiac sign is {zodiac}.
      </p>
      <button>
        <Link to="/quiz">Start Quiz</Link>
      </button>
      <Link to="/birthdate">Back</Link>
    </div>
  )
}

export default ZodiacResultPage

function getZodiacSign(month: string, day: string): string {
  // code to calculate zodiac sign based on birth month and day
}
