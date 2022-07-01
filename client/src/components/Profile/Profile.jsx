import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";

const Profile = () => {
  const { data, loading, error } = useFetch("/auth/me");
  return loading ? (
    <Loading />
  ) : (
    <>
      <p></p>
      <p>Name: {data?.user?.name}</p>
      <p>Email: {data?.user?.email}</p>
      <p>Role: {data?.user?.role}</p>
    </>
  );
};

export default Profile;
