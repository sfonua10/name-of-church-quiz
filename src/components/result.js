import React from "react"
import PropTypes from "prop-types"

const Result = props => {
  return (
    <>
      <a href="https://facebook.com/sharer/sharer.php?u=https://jovial-ritchie-46bbbe.netlify.app/" />
      <div className="result">
        You scored <strong>{props.quizResult}</strong> out of 5!
      </div>
    </>
  )
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
}

export default Result
