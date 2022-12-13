import { useScrollTrigger } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading/Loading";
import "./profile.css";
import { Table } from "antd";

const Profile = () => {
  const { data, loading } = useFetch("/auth/me");
  const { auth, setAuth } = useAuth();

  const [dataSource, setDataSource] = useState([]);
  const columns = [
    {
      title: "Key",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ];

  useEffect(() => {
    const data = [
      {
        key: "1",
        key: "User ID",
        description: auth.user.id,
      },
      {
        key: "2",
        key: "Name",
        description: auth.user.name,
      },
      {
        key: "3",
        key: "Email",
        description: auth.user.email,
      },
      {
        key: "4",
        key: "Email Verified",
        description: `${auth.user.isEmailVerified}`,
      },
    ];
    setDataSource(data)
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="flex flex-row justify-center mt-5">
      <div className="w-1/2">
        <Table columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
};

export default Profile;
