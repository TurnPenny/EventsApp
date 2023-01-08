import Image from 'next/image';
import Link from 'next/link';

const EventsPage = ({ data }) => {
  return (
    <div>
      <h2>Events Page</h2>
      <div>
        {data.map((event, idx) => (
          <Link key={event.id + idx} href={`/events/${event.id}`}>
            <Image
              alt={event.title}
              src={event.image}
              width={200}
              height={150}
            />
            <h2>{event.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import('./../../data/data.json');
  return {
    props: {
      data: events_categories,
    },
  };
}
