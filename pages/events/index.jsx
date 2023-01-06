import Image from 'next/image';

const EventsPage = ({ data }) => {
  return (
    <div>
      <h2>Events Page</h2>
      <div>
        {data.map((event, idx) => {
          <a key={event.id + idx} href={`/events/${event.id}`}>
            <Image
              alt={event.title}
              src={event.image}
              widt={200}
              height={150}
            />
            <h2>{event.title}</h2>
          </a>;
        })}
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
