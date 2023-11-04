import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import { useQuery } from "@tanstack/react-query";
import { getCourse } from "../../api/Courses";
import Loading from "../../components/Loading";
import CourseDetail from "./components/CourseDetail";
import BackButton from "../../components/BackButton";
import { getScheduleByCourse } from "../../api/Schedules";
import SchedulesCourse from "./components/SchedulesCourse";

const ShowCourse = () => {
  const { id } = useParams();
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["courses", id],
    queryFn: () => getCourse(id),
  });

  const course = data?.course;

  const {
    data: DataSchedule,
    isError: isErrorSchedule,
    isLoading: isLoadingSchedule,
    error: errorSchedule,
  } = useQuery({
    queryKey: ["schedules", id],
    queryFn: () => getScheduleByCourse(id),
  });

  const schedules = DataSchedule?.schedules;

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <span>{error.message}</span>;
  }
  return (
    <div className="container mx-auto">
      <BackButton />
      <Banner title={course.summary} />
      <div className="row " style={{ height: "100%", minHeight: "100vh" }}>
        <div className="col-md-7">
          <div className="card">
            <div className="card-header fw-bold fs-4 bg-primary text-white py-3">
              {course.name}
            </div>
            <div className="card-body">
              <CourseDetail course={course} />
            </div>
          </div>
        </div>
        <div className="col-md-5">
          {isLoadingSchedule && <Loading />}
          {isErrorSchedule && <span>{errorSchedule.message}</span>}
          {schedules?.length > 0 ? (
            <SchedulesCourse schedules={schedules} price={course?.price} />
          ) : (
            <span className="fw-bold">Hiện chưa có giảng viên</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowCourse;
