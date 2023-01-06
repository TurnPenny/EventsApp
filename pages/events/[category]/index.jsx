const CityEventsPage = () => {
  return (
    <div>
      <h2>events in london</h2>
      <div>
        <a href='#'>Event #</a>
        <a href='#'>Event #</a>
        <a href='#'>Event #</a>
        <a href='#'>Event #</a>
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
    fallback: true,
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
    },
  };
}
