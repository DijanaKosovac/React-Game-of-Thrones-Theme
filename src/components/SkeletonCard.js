import Skeleton from "react-loading-skeleton";
const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      {Array(8)
        .fill()
        .map((item, index) => (
          <div className="container" key={index}>
            <div className="card">
              <Skeleton
                height={320}
                width={320}
                baseColor="#15202B"
                highlightColor="#222831"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default SkeletonCard;
