import React from "react";
import { Link } from "react-router-dom";

export default function SingleUrl({ varArr }) {
  console.log(varArr)

  return (
    <>
      {varArr.shortUrl ? (
        <Link to={`/${varArr.uid}`} target="_blank">
          {varArr.shortUrl}
        </Link>
      ) : (
        <Link to={`/${varArr.uid}`} target="_blank">
          {varArr.short}
        </Link>
      )}
      <br />
    </>
  );
}
