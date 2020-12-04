import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
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
          <li>blog-style feed will go here, probably</li>
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
