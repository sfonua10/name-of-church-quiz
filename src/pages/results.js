// Gatsby supports TypeScript natively!
import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Result from "../components/result"

const ResultsPage = ({ location }) => {
  const count = location?.state?.count || 0

  return (
    <Layout>
      <SEO
        title="Wonderful Saia"
        description="test saia description"
        image="https://assets.ldscdn.org/c1/2d/c12d468aa729888cc12d38d9e69281b8e4de4fec/alma_the_younger_corianton.jpeg"
        url="https://www.churchofjesuschrist.org/media/image/alma-the-younger-corianton-3e725dd?lang=eng"
      />
      <Result quizResult={count} />

      {/*TO DO: https://stackoverflow.com/questions/26106447/is-it-possible-to-generate-a-share-on-facebook-link-that-opens-the-native-face
        https://developers.facebook.com/docs/sharing/reference/share-dialog/
        https://forum.duolingo.com/comment/33205300/I-Made-an-App-to-Supplement-Duolingo-Beautiful-New-App
        */}
      {/* <Link to="/">Go back to the homepage</Link> */}
    </Layout>
  )
}

export default ResultsPage
