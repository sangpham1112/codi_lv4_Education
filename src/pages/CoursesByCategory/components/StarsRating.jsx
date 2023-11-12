import { useEffect, useState, memo } from "react";

const StarsRating = memo(({ number }) => {
  const [stars, setStar] = useState([]);

  useEffect(() => {
    const fullStars = Math.floor(number);
    const halfStar = number % 1 !== 0 ? 0.5 : 0;
    const arr = Array(fullStars)
      .fill(1)
      .concat(halfStar === 0.5 ? [0.5] : []);
    setStar(arr);
  }, [number]);

  return (
    <div>
      {stars.map((item, index) =>
        item === 1 ? (
          <i key={index} className="fas fa-star text-warning"></i>
        ) : (
          <i key={index} className="fas fa-star-half-alt text-warning"></i>
        )
      )}
    </div>
  );
});

export default StarsRating;
