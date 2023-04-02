// BirthdateSelectionPage
import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { saveBirthDate } from '../store/actions/quizActions'

const BirthdateSelectionPage: React.FC = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const handleSaveBirthDate = () => {
    const { search } = location
    const gender = new URLSearchParams(search).get('gender')
    dispatch(saveBirthDate(gender, month, year))
  }

  return (
    <div>
      <h1>Birthdate Selection</h1>
      <div>
        <label htmlFor="month">Month:</label>
        <input
          type="text"
          id="month"
          value={month}
          onChange={(event) => setMonth(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
      </div>
      <button onClick={handleSaveBirthDate}>
        <Link to="/zodiac">Next</Link>
      </button>
      <Link to="/">Back</Link>
    </div>
  )
}

export default BirthdateSelectionPage
