import React from "react"
import PropTypes from "prop-types"
import quizQuestions from "../../api/quizQuestions"
import { FaFacebookF, FaTwitter } from "react-icons/fa"

const Result = ({ userData = {}, quizResult = ""}) => {
  const url = "https://correct-name-of-church.netlify.app/results"
  const description = "check it out"

  return (
    <>
      <div className="result">
        {userData && <img src={userData?.picture?.data?.url} alt="user profile"/>} You scored <strong>{quizResult}</strong> out of{" "}
        {quizQuestions.length}!
      </div>
      {quizResult >= 0 && (
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
