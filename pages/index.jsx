import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home({ data }) {
  const menuLinks = [
    { title: 'Home', route: '/' },
    { title: 'Events', route: '/events' },
    { title: 'About us', route: '/about-us' },
  ];
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header>
        <nav>
          {menuLinks.map(({ title, route }) => (
            <Link href={route}> {title} </Link>
          ))}
        </nav>
      </header>

      <main className={styles.main}>
        {data.map((event, idx) => {
          return (
            <Link key={event.id + idx} href={`/events/${event.id}`}>
              <Image
                alt={event.title}
                width={200}
                height={100}
                src={event.image}
              />
              <h2> {event.title} </h2>
              <p>{event.description}</p>
            </Link>
          );
        })}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import('./../data/data.json');
  return {
    props: {
      data: events_categories,
    },
  };
}
