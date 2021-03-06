import React from "react"
import PropTypes from "prop-types"

const AnswerOption = ({
  answer,
  answerContent,
  answerType,
  onAnswerSelected,
}) => {
  return (
    <li>
      <input
        type="radio"
        name="radioGroup"
        id={answerType}
        value={answerType}
        // checked={answer === answerType}
        disabled={answer}
        onChange={onAnswerSelected}
      />
      <label htmlFor={answerType}>{answerContent}</label>
    </li>
  )
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
}

export default AnswerOption
