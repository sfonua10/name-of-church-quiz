import React from "react"
import Proptypes from "prop-types"
import Question from "./question"
import QuestionCount from "./questionCount"
import AnswerOption from "./answerOption"

const Quiz = ({
  answer,
  onAnswerSelected,
  questionId,
  questionTotal,
  question,
  answerOptions,
}) => {
  const renderAnswerOptions = key => {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={answer}
        questionId={questionId}
        onAnswerSelected={onAnswerSelected}
      />
    )
  }

  return (
    <>
      <QuestionCount counter={questionId} total={questionTotal} />
      <Question content={question} />
      <ul>{answerOptions.map(renderAnswerOptions)}</ul>
    </>
  )
}

Quiz.propTypes = {
  answer: Proptypes.string.isRequired,
  answerOptions: Proptypes.array.isRequired,
  counter: Proptypes.number.isRequired,
  question: Proptypes.string.isRequired,
  questionId: Proptypes.number.isRequired,
  questionTotal: Proptypes.number.isRequired,
  onAnswerSelected: Proptypes.func.isRequired,
}
export default Quiz