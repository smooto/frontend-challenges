import { getAllChallengeIds, getChallengeData } from '../../lib/challenges'
import dynamic from 'next/dynamic'
import path from 'path'

import Head from 'next/head'
import Post from '../../lib/components/meta/Post'

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
  const ChallengeComponent = dynamic(() => import(`../../lib/components/challenges/${challengeData.componentName}`))

  return (
    <div>
      {challengeData.challengeTitle}
      <ChallengeComponent />
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
