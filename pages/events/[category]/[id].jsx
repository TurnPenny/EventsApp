import Image from 'next/image';

const EventPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Image src={data.image} alt={data.title} width={400} height={300} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import('../../../data/data.json');
  const allPaths = allEvents.map(({ id, city }) => {
    return {
      params: {
        category: city,
        id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import('./../../../data/data.json');

  return {
    props: { data: allEvents.find((event) => context.params.id == event.id) },
  };
}
