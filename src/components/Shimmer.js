const Shimmer = () => {
  return (
    <div data-testid="shimmer" className="restaurant-list">
      {Array(9)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
