import React, { useState, useEffect } from "react"
// import { Link } from "gatsby"
import Quiz from "../components/quiz"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Result from "../components/result"
import shuffleArray from "../utils/shuffleArray"
import quizQuestionsArr from "../../api/quizQuestions"

const IndexPage = () => {
  const [counter, setCounter] = useState(0)
  const [questionId, setQuestionId] = useState(1)
  const [question, setQuestion] = useState("")
  const [answerOptions, setAnswerOptions] = useState([])
  const [answer, setAnswer] = useState("")
  const [answersCount, setAnswersCount] = useState({})
  const [result, setResult] = useState("")
  const [quizQuestions, setQuizQuestion] = useState([])

  useEffect(() => {
    const shuffledAnswerOptions = quizQuestionsArr.map(question =>
      shuffleArray(question.answers)
    )
    setQuestion(quizQuestionsArr[0].question)
    setQuizQuestion(quizQuestions)
    setAnswerOptions(shuffledAnswerOptions[0])
  }, [])

  console.log("answerOptions", answerOptions)

  const handleAnswerSelected = event => {
    setUserAnswer(event.currentTarget.value)
    if (questionId < quizQuestions.length) {
      setTimeout(() => setNextQuestion(), 300)
    } else {
      setTimeout(() => setResults(getResults()), 300)
    }
  }

  const setUserAnswer = answer => {
    setAnswersCount({
      ...answersCount,
      [answer]: (answersCount[answer] || 0) + 1,
    })
    setAnswer(answer)
  }

  const setNextQuestion = () => {
    const myCounter = counter + 1
    const myQuestionId = questionId + 1
    setCounter(myCounter)
    setQuestionId(myQuestionId)
    setQuestion(quizQuestions[myCounter].question)
    setAnswerOptions(quizQuestions[myCounter].answers)
    setAnswer("")
  }

  const getResults = () => {
    const myAnswersCount = answersCount
    const answersCountKeys = Object.keys(myAnswersCount)
    const answersCountValues = answersCountKeys.map(key => myAnswersCount[key])
    const maxAnswerCount = Math.max.apply(null, answersCountValues)

    return answersCountKeys.filter(
      key => myAnswersCount[key] === maxAnswerCount
    )
  }

  const setResults = result => {
    if (result.length === 1) {
      setResult(result[0])
    } else {
      setResult("Undetermined")
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      {result ? (
        <Result quizResult={result} />
      ) : (
        <Quiz
          answer={answer}
          answerOptions={answerOptions}
          questionId={questionId}
          question={question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={handleAnswerSelected}
        />
      )}

      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )
}
export default IndexPage
