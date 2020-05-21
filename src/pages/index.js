import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Quiz from "../components/quiz"
import Layout from "../components/layout"
import SEO from "../components/seo"
import shuffleArray from "../utils/shuffleArray"
import quizQuestionsArr from "../../api/quizQuestions"
import dieter from "../images/dieter_f_uchtdorf_lds_opt.jpg"

const IndexPage = () => {
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
  return (
    <Layout>
      <SEO
        title="Equipped?"
        image={dieter}
        url="https://correct-name-of-church.netlify.app/"
        description="Test Your Knowledge Of The Correct Name of the Church of Jesus Christ"
      />
      {result ? (
        <>
          <Link
            style={{
              backgroundColor: `#177C9C`,
              padding: `10px`,
              color: `white`,
              cursor: `pointer`,
              textDecoration: `none`,
            }}
            to="/results"
            state={{ count }}
          >
            Get Results
          </Link>
        </>
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
                backgroundColor: `#177C9C`,
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
    </Layout>
  )
}
export default IndexPage
