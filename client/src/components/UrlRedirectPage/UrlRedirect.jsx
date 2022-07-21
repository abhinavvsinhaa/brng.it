import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function UrlRedirect() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchMainUrl = async () => {
      const res = await axios.get("http://localhost:8000/v1/url/" + path);
      if (res) {
        window.location.replace(res.data.data.original);
      }
    };
    fetchMainUrl();
  }, [path]);

  return (
    <>
      <h1>Redirecting</h1>
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-border text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </>
  );
}
