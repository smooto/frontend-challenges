import { getAllChallengeIds, getChallengeData } from '../lib/challenges'

import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const challengeIds = getAllChallengeIds()

  const allChallengeData = challengeIds.map(challenge => {
    const data = getChallengeData(challenge.params.id)

    return {
      id: data.componentName,
      title: data.challengeTitle,
      date: data.challengeDate
    }
  })

  return {
    props: {
      allChallengeData
    }
  }
}

export default function Home({ allChallengeData }) {
  // const allChallenges = challengeIds.map(challenge => challenge.params.id)

  console.log(allChallengeData)

  return (
    <div className={styles.container}>
      <Head>
        <title>Front end challenge gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          
        </h1>

        <p className={styles.description}>
          Here are some weird components and things I made for front end practice in React. Check 'em out!!!
        </p>

        <ul>
          {
            allChallengeData.map(({ id, title, date }) => (
              <li key={id}>
                <Link href={`/challenges/${id}`}>
                  <a>{title}</a>
                </Link>
              </li>
            ))
          }
        </ul>
      </main>

      <footer className={styles.footer}>
        <p>
          M. Smoot, 2020
        </p>
      </footer>
    </div>
  )
}
