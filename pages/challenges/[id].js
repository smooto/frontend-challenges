import Head from 'next/head'
import Post from '../../lib/components/meta/Post'
import ExampleComponent from '../../lib/components/challenges/ExampleComponent'

import { getAllChallengeIds, getChallengeData } from '../../lib/challenges'

export async function getStaticProps({ params }) {
  const challengeData = getChallengeData(params.id)
  return {
    props: {
      challengeData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllChallengeIds()
  return {
    paths,
    fallback: false
  }
}

export default function PublishedPost({ challengeData }) {
  // import ExampleComponent from `../../${challengeData.challengePath}`

  return (
    <div>
      {challengeData.challengeTitle}
      <ExampleComponent />
      {/* <Head>
        <title>challenge title</title>
      </Head>

      <main>
        <Post>
          <ExampleComponent />
        </Post>
      </main> */}
    </div>
  )
}
