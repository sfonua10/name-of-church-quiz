import React from "react"
import PropTypes from "prop-types"

const Question = ({ content }) => {
  return <h1 style={{ fontSize: `1em` }}>{content}</h1>
}

Question.propTypes = {
  content: PropTypes.string.isRequired,
}

export default Question
