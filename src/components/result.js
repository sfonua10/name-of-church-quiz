import React from "react"
import PropTypes from "prop-types"
import quizQuestions from "../../api/quizQuestions"
const Result = props => {
  return (
    <>
      <a href="https://facebook.com/sharer/sharer.php?u=https://jovial-ritchie-46bbbe.netlify.app/results">
        FB
      </a>

      <div className="result">
        You scored <strong>{props.quizResult}</strong> out of{" "}
        {quizQuestions.length}!
      </div>
    </>
  )
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
}

export default Result
