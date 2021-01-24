import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

function Ratings(props) {
  const { average_rating, ratings_count } = props;
  return (
    <div>
      <Box borderColor="transparent">
        <Rating name="read-only" value={average_rating} readOnly />
      </Box>{" "}
      <div>({ratings_count})</div>{" "}
    </div>
  );
}

export default Ratings;
