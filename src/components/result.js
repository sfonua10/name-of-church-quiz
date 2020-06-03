import React from "react"
import PropTypes from "prop-types"
import quizQuestions from "../../api/quizQuestions"
import { FaFacebookF, FaTwitter } from "react-icons/fa"
//https://jovial-ritchie-46bbbe.netlify.app/results
//https://correct-name-of-church.netlify.app/
const Result = props => {
  const url = "https://correct-name-of-church.netlify.app/results"
  const description = "check it out"

  return (
    <>
      <div className="result">
        <img src={props.userData.picture.data.url} /> You scored <strong>{props.quizResult}</strong> out of{" "}
        {quizQuestions.length}!
      </div>
      {props.quizResult >= 0 && (
        <>
          <h4>Share on:</h4>
          <a
            style={{ margin: `5px` }}
            href={`https://facebook.com/sharer/sharer.php?u=${url}`}
          >
            <FaFacebookF color="#3b5998" size="3rem" />
          </a>
          <a
            style={{ margin: `5px` }}
            href={`https://twitter.com/share?text=${description}&url=${url}`}
          >
            <FaTwitter color="#00acee" size="3rem" />
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
