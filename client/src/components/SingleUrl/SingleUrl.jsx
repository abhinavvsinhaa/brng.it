import React from "react";
import { Link } from "react-router-dom";

export default function SingleUrl({ varArr }) {
  return (
    <>
      {varArr.shortUrl ? (
        <Link to={`/url/${varArr.uid}`} target="_blank">
          {varArr.shortUrl}
        </Link>
      ) : (
        <Link to={`/url/${varArr.uid}`} target="_blank">
          {varArr.short}
        </Link>
      )}
      <br />
    </>
  );
}
