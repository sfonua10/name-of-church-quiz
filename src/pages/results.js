// Gatsby supports TypeScript natively!
import React from "react"
// import { Link } from "gatsby"
// import Layout from "../components/layout"
import SEO from "../components/seo"
import Result from "../components/result"

const ResultsPage = ({ location }) => {
  const count = location?.state?.count || 0

  return (
    <>
      <SEO
        title="Wonderful Saia"
        description="test saia description"
        image="https://assets.ldscdn.org/2d/c8/2dc8336c5be57f319e6e80e97f9d8019428e96d7/how_i_hear_him_bednar.jpeg"
        url="https://www.churchofjesuschrist.org/blog/hearing-him-with-our-minds-and-our-hearts?fbclid=IwAR1qI3bqoTULIENuJ0YXFYGs5B6dvx--nG8p7J1hliiTHSy8CCCM3CmRQPo"
      />
      <h1>Your Score:</h1>

      <Result quizResult={count} />

      {/* <Link to="/">Go back to the homepage</Link> */}
    </>
  )
}

export default ResultsPage
