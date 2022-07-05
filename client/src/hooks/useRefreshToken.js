import { axiosPrivate } from "../api/axios";

const useRefreshToken = () => {
  const refresh = async () => {
    try {
      if (
        !localStorage.getItem("refresh") ||
        localStorage.getItem("refresh") === "undefined"
      ) {
        return null;
      }
      const response = await axiosPrivate.post("/auth/refresh-tokens", {
        refreshToken: localStorage.getItem("refresh"),
      });
      localStorage.setItem("refresh", response?.data?.tokens?.refresh?.token);
      return response?.data;
    } catch (err) {
      return null;
    }
  };
  return refresh;
};

export default useRefreshToken;
