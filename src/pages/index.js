import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Quiz from "../components/quiz"
import Layout from "../components/layout"
import SEO from "../components/seo"
import shuffleArray from "../utils/shuffleArray"
import quizQuestionsArr from "../../api/quizQuestions"
import callingTheFistermen from "../images/calling_the_fishermen.png"
import Login from "../components/login"
import Result from "../components/result"

const IndexPage = () => {
  const [login, setLogin] = useState(false)
  const [userData, setUserData] = useState({})
  const [counter, setCounter] = useState(0)
  const [questionId, setQuestionId] = useState(1)
  const [question, setQuestion] = useState("")
  const [answerOptions, setAnswerOptions] = useState([])
  const [answer, setAnswer] = useState("")
  const [result, setResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [count, setCount] = useState(0)

  useEffect(() => {
    const shuffledAnswerOptions = quizQuestionsArr.map(question =>
      shuffleArray(question.answers)
    )
    setCounter(0)
    setQuestion(quizQuestionsArr[0].question)
    setAnswerOptions(shuffledAnswerOptions[0])
  }, [])

  const setNextQuestion = () => {
    const myCounter = counter + 1
    const myQuestionId = questionId + 1
    setCounter(myCounter)
    setQuestionId(myQuestionId)
    setQuestion(quizQuestionsArr[myCounter].question)
    setAnswerOptions(quizQuestionsArr[myCounter].answers)
    setAnswer("")
  }

  const handleSelectedAnswer = e => {
    setSelectedAnswer(e.currentTarget.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (selectedAnswer === "correct") {
      setCount(count + 1)
    }

    if (questionId < quizQuestionsArr.length) {
      setTimeout(() => setNextQuestion(), 300)
    } else {
      setTimeout(() => setResult(true), 300)
    }
  }
  const handleLogin = (auth, userData) => {
    console.log("auth", auth)
    console.log("userData", userData)
    if (auth === true) {
      setLogin(true)
      setUserData(userData)
    }
  }
  console.log("login", login)
  console.log("result", result)
  return (
    <Layout>
      <SEO
        title="For thus shall my church be called in the last days..."
        image={callingTheFistermen}
        url="https://correct-name-of-church.netlify.app/"
        description="do our best to restore the correct name of the Lord’s Church"
      />
      {!login ? (
        <React.Fragment>
          <p>To take the quiz, login in with Facebook</p>
          <Login onLogin={handleLogin} />
        </React.Fragment>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <Quiz
              counter={counter}
              answer={answer}
              answerOptions={answerOptions}
              questionId={questionId}
              question={question}
              questionTotal={quizQuestionsArr.length}
              onAnswerSelected={handleSelectedAnswer}
            />
            <button
              style={{
                backgroundColor: `#023057`,
                padding: `10px`,
                color: `white`,
                cursor: `pointer`,
              }}
              type="submit"
            >
              Submit
            </button>
          </form>
        </>
      )}
      {result && (
        <Link to="/results" state={{ count, userData }}>
          Get Results
        </Link>
      )}
    </Layout>
  )
}
export default IndexPage
