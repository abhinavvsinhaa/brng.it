import axios from "../../api/axios";
import { useParams } from "react-router-dom";
import DeviceDetector from "device-detector-js";
import { useEffect, useState } from "react";

export default function UrlRedirect() {
  const { uid } = useParams();
  const [timer, setTimer] = useState(5);
  const deviceDetector = new DeviceDetector();

  // setInterval(() => {
  //   setTimer(timer - 1);
  // }, 500);

  useEffect(() => {
    const fetchMainUrl = async () => {
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          let location = [position.coords.latitude, position.coords.longitude];
          const device = deviceDetector.parse(navigator.userAgent);
          const data = {
            device,
            location,
          };
          console.log(data);
          const res = await axios.patch("/url/" + uid, data);
          console.log(res.data.data.analytics);
          if (res) {
            window.location.replace(res.data.data.original);
          }
        },
        async () => {
          const device = deviceDetector.parse(navigator.userAgent);
          const data = {
            device,
          };
          console.log(data);
          const res = await axios.patch("/url/" + uid, data);
          console.log(res.data.data.analytics);
          if (res) {
            window.location.replace(res.data.data.original);
          }
        },
        { timeout: 2000 }
      );
    };
    fetchMainUrl();
  }, []);

  return (
    <>
      <h1>Redirecting...</h1>
    </>
  );
}
