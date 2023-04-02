import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setGender } from '../store/actions/quizActions'

import GenderSelection from '../components/GenderSelection/GenderSelection.tsx'

const GenderSelectionPage: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleGenderSelection = (gender: string) => {
    dispatch(setGender(gender))
    navigate('/birthdate')
  }

  return (
    <div>
      <h1> Вибір статі </h1>
      <GenderSelection onGenderSelected={handleGenderSelection} />
      <Link to="/"> Назад </Link>
    </div>
  )
}
export default GenderSelectionPage
