import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Priyankar's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Coming Soon...
        </h1>
      </main>

      <footer className={styles.footer}>
        Priyankar Kumar
      </footer>
    </div>
  )
}
