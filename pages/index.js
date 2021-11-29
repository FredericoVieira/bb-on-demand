import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import homeBackground1 from "../public/home-bg-1.jpg";
import homeBackground2 from "../public/home-bg-2.jpg";
import homeBackground3 from "../public/home-bg-3.jpg";

export default function Home() {
  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const bgImages = [homeBackground1, homeBackground2, homeBackground3];

  return (
    <div className={styles.container}>
      <Head>
        <title>Soluções Empresariais</title>
        <meta name="description" content="Soluções empresariais" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.header}>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>Soluções Empresariais</h1>
            <h2 className={styles.subtitle}>para tudo que você imaginar</h2>
          </div>
          <Image
            src={bgImages[randomNumber(0, 2)]}
            alt="Home"
            layout="fill"
            objectFit="cover"
          />
        </section>

        <section className={styles.content}>
          <div className={styles.resources}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h2>Calcule</h2>
                <div className={styles.description}>
                  <h3>o Capital de Giro que a sua empresa precisa</h3>
                </div>
                <Link href="/capital-de-giro">
                  <a>Saiba mais</a>
                </Link>
              </div>
            </div>
            <div className={`${styles.card} ${styles.yellow}`}>
              <div className={styles.cardContent}>
                <h2>Descubra</h2>
                <div className={styles.description}>
                  <h3>o valor necessário para o 13º dos seus funcionários</h3>
                </div>
                <Link href="/capital-de-giro">
                  <a>Saiba mais</a>
                </Link>
              </div>
            </div>
            <div className={`${styles.card} ${styles.blue}`}>
              <div className={styles.cardContent}>
                <h2>Financie</h2>
                <div className={styles.description}>
                  <h3>equipamentos e materiais para sua empresa</h3>
                </div>
                <Link href="/capital-de-giro">
                  <a>Saiba mais</a>
                </Link>
              </div>
            </div>
            <div className={`${styles.card} ${styles.white}`}>
              <div className={styles.cardContent}>
                <h2>Invista</h2>
                <div className={styles.description}>
                  <h3>hoje para alcancar o lucro amanhã</h3>
                </div>
                <Link href="/capital-de-giro">
                  <a>Saiba mais</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
