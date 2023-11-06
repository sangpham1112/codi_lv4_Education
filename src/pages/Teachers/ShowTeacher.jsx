import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../components/Loading";
import { useParams } from "react-router-dom";
import { getTeacher } from "../../api/Teacher";
import TeacherInfor from "./components/TeacherInfor";
import TabTeacherDetails from "./components/TabTeacherDetails";
import BackButton from "../../components/BackButton";

const ShowTeacher = () => {
  const { id } = useParams();
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["users", id],
    queryFn: () => getTeacher(id),
  });

  const teacher = data?.user;
  // console.log(teacher);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <span>{error.message}</span>;
  }
  return (
    <div
      className="container mt-5 mx-auto"
      style={{ height: "100%", minHeight: "100vh" }}>
      <BackButton />
      <div className="row align-items-center">
        <TeacherInfor teacher={teacher} />
        <TabTeacherDetails teacher={teacher} />
      </div>
    </div>
  );
};

export default ShowTeacher;
