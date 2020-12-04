import Head from 'next/head'

export default function PostWrapper({ children }) {
  return (
  <div>
    <Head>
    <title>{challengeDate} challenge: {challengeName}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      
    </main>
  </div>
  )
}
