// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Result from "../components/result"
import missionaries from "../images/missionaries.png"

const ResultsPage = ({ location }) => {
  const count = location?.state?.count || 0

  return (
    <Layout>
      <SEO
        title="I Will Share The Correct Name of the Church of Jesus Christ"
        description="I will do my best to restore the correct name of the Lord's Church"
        image={missionaries}
        url="https://correct-name-of-church.netlify.app/results"
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
