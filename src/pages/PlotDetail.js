const PlotDetail = (props) => {
  return (
    <section className="plot-detail">
      <div className="plot-detail__info">
        <h1 className="plot-detail__title">{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className="plot-detail__info plot-detail__image-wrapper">
        <img
          src={require(`../assets/images/${props.image}`)}
          alt={props.altDescription}
        />
      </div>
    </section>
  );
};

export default PlotDetail;
