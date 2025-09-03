import React, { useState } from "react";

const ConstRating = () => {
  const [likes, setLikes] = useState(0);
  const [disLikes, setDisLike] = useState(0);
  const [totalRating, setTotalRating] = useState(0);

  const handlelike = () => {
    setLikes(likes + 1);
  };

  const TotalRating = () => {
    setTotalRating(likes, disLikes);
  };
  return (
    <>
      <div>
        <p>I am using React for making my project </p>

        <button className="like-content" onClick={handlelike}>
          Likes ({likes})
        </button>

        <button
          className="dislike-content"
          onClick={() => {
            setDisLike(disLikes + 1);
          }}
        >
          Dislike ({disLikes})
        </button>

        <button onClick={TotalRating}>TotalRating</button>
        <p>Total Rating ({totalRating})</p>
      </div>
    </>
  );
};
export default ConstRating;
