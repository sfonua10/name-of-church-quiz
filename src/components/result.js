import React from "react"
import PropTypes from "prop-types"
import quizQuestions from "../../api/quizQuestions"
import { FaFacebookF } from "react-icons/fa"

const Result = props => {
  return (
    <>
      <div className="result">
        You scored <strong>{props.quizResult}</strong> out of{" "}
        {quizQuestions.length}!
      </div>
      {props.quizResult > 5 && (
        <>
          <h4>Share on:</h4>
          <a href="https://facebook.com/sharer/sharer.php?u=https://jovial-ritchie-46bbbe.netlify.app/results">
            <FaFacebookF color="#3b5998" size="5rem" />
          </a>
        </>
      )}
    </>
  )
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
}

export default Result
