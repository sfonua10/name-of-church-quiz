import React from "react"
import PropTypes from "prop-types"

const Result = props => {
  return (
    <div className="result">
      You scored <strong>{props.quizResult}</strong> out of 5!
    </div>
  )
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
}

export default Result
