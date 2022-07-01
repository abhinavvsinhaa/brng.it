import { axiosPrivate } from "../api/axios";

const useRefreshToken = () => {
  const refresh = async () => {
    try {
      const response = await axiosPrivate.post("/auth/refresh-tokens", {
        refreshToken: localStorage.getItem("refresh"),
      });
      localStorage.setItem("refresh", response?.data?.refresh?.token);
      return response?.data;
    } catch (err) {
      return null;
    }
  };
  return refresh;
};

export default useRefreshToken;
