import dummyData from "../dummy-data/dummyData";
import PlotDetail from "./PlotDetail";
const Plot = () => {
  const data = dummyData;

  return (
    <section className="plot">
      <h1 className="plot__title">Plot</h1>
      {data.map((detail) => (
        <PlotDetail
          key={detail.id}
          title={detail.title}
          description={detail.description}
          image={detail.image}
          altDescription={detail.altDescription}
        />
      ))}
    </section>
  );
};

export default Plot;
