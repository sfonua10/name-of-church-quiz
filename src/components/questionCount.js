import React from "react"
import PropTypes from "prop-types"

const QuestionCount = ({ counter, total }) => {
  return (
    <>
      <span>
        {counter} / {total}
      </span>
    </>
  )
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}

export default QuestionCount
