// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import SEO from "../components/seo"
import Result from "../components/result"

const ResultsPage = ({ count }) => (
  <>
    <SEO title="Results Page" />
    <h1>Hi from the second page</h1>

    <Result quizResult={count} />

    <Link to="/">Go back to the homepage</Link>
  </>
)

export default ResultsPage
