import Image from 'next/image';
import Link from 'next/link';

const CityEventsPage = ({ data, pageName }) => {
  return (
    <div>
      <h2> {`events in ${pageName}`} </h2>
      <div>
        {data.map((event, idx) => (
          <Link
            key={event.description + idx}
            href={`/events/${event.city}/${event.id}`}
          >
            <Image
              alt={event.title}
              src={event.image}
              width={200}
              height={150}
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CityEventsPage;

export async function getStaticPaths() {
  const { events_categories } = await import('./../../../data/data.json');
  const allPaths = events_categories.map((event) => {
    return {
      params: {
        category: event.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

[];
export async function getStaticProps(context) {
  const id = context?.params.category;
  const { allEvents } = await import('./../../../data/data.json');
  const data = allEvents.filter((event) => event.city === id);

  return {
    props: {
      data,
      pageName: id,
    },
  };
}
