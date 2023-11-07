import Title from "../../../components/Title";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../../api/Courses";
import Loading from "../../../components/Loading";
import Carousel from "../../../components/Carousel";
import { ImageLink } from "../../../utils/ImageLink";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  useEffect(() => {
    const availableCoures = data?.courses.filter(
      (course) => course.status == 1
    );
    setCourses(availableCoures);
  }, [data]);

  // console.log(courses);

  return (
    <>
      {isLoading && <Loading />}
      {isError && <span>{error.message}</span>}
      <div className="container-xxl py-5">
        <div className="container">
          <Title
            title="Khoá học"
            desc="Các Lớp Học Online Tại Marathon Education"
          />
          <Carousel
            className="row g-1"
            spaceBetween={30}
            slidesPerView={4}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                height: 270,
              },
              768: {
                slidesPerView: 2,
                height: 270,
              },
              1024: {
                slidesPerView: 4,
                height: 270,
              },
            }}
            data={courses}>
            {(item) => {
              return (
                <div className="col mb-5 wow fadeInUp" data-wow-delay="0.1s">
                  <div
                    className="course-item bg-light"
                    style={{ height: "370px" }}>
                    <div
                      className="position-relative overflow-hidden"
                      style={{ height: "240px" }}>
                      <img
                        className="img-fluid w-100 h-100"
                        src={ImageLink + item.image}
                        alt={item.name}
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                        <span
                          className="flex-shrink-0 bg-primary text-white px-4 fs-5"
                          style={{ borderRadius: "30px 30px" }}>
                          {item.grade}
                        </span>
                      </div>
                    </div>
                    <div className="text-center p-4 pb-0">
                      <Link to={`/khoa-hoc/` + item.id}>
                        <h5 style={{ minHeight: "55px" }}>{item.name}</h5>
                      </Link>
                    </div>
                    <div className="d-flex border-top">
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-user-tie text-primary me-2" />
                        {item.teacherNumbers > 0
                          ? item.teacherNumbers + " giảng viên"
                          : "Chưa có giảng viên"}
                      </small>
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-clock text-primary me-2" />
                        {item.duration} giờ
                      </small>
                    </div>
                  </div>
                </div>
              );
            }}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Courses;
