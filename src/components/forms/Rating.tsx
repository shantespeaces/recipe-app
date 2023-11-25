const Rating = ({ rating }: { rating: string }) => {
  const numStars = parseInt(rating);
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < numStars) {
      stars.push(
        <span key={i} className="material-icons filled-star">
          star
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="material-icons outlined-star">
          star_border
        </span>
      );
    }
  }

  return <div>{stars}</div>;
};

export default Rating;
