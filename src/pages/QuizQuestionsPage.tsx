import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { saveQuizAnswers } from '../store/actions/quizActions'
import { RootState } from '../store/types'

const QuizQuestionsPage: React.FC = () => {
  const dispatch = useDispatch()
  const { gender, birthdate } = useSelector((state: RootState) => state.quiz)
  const [answers, setAnswers] = useState<Array<string>>([])

  const handleSaveAnswers = () => {
    dispatch(saveQuizAnswers(gender, birthdate, answers))
  }

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const answer = event.target.value
    const questionIndex = Number(event.target.name)
    const newAnswers = [...answers]
    newAnswers[questionIndex] = answer
    setAnswers(newAnswers)
  }

  return (
    <>
      <h1>Quiz Questions</h1>
      <form>
        <div>
          <label htmlFor="question1">Question 1:</label>
          <input
            type="text"
            id="question1"
            name="0"
            onChange={handleAnswerChange}
          />
        </div>
        <div>
          <label htmlFor="question2">Question 2:</label>
          <input
            type="text"
            id="question2"
            name="1"
            onChange={handleAnswerChange}
          />
        </div>
        <div>
          <label htmlFor="question3">Question 3:</label>
          <input
            type="text"
            id="question3"
            name="2"
            onChange={handleAnswerChange}
          />
        </div>
        <div>
          <label htmlFor="question4">Question 4:</label>
          <input
            type="text"
            id="question4"
            name="3"
            onChange={handleAnswerChange}
          />
        </div>
      </form>
      <button onClick={handleSaveAnswers}>
        <Link to="/">Submit</Link>
      </button>
      <Link to="/zodiac">Back</Link>
    </>
  )
}
export default QuizQuestionsPage
