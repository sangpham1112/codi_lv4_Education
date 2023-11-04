import Title from "../../../components/Title";
import { useQuery } from "@tanstack/react-query";
import { getTeachers } from "../../../api/Teacher";
import Loading from "../../../components/Loading";
import { ImageLink } from "../../../utils/ImageLink";
import Carousel from "../../../components/Carousel";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Instructors = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["teachers"],
    queryFn: getTeachers,
  });
  const teachers = data?.teachers;

  return (
    <>
      {isLoading && <Loading />}
      {isError && <span>{error.message}</span>}
      <div className="container-xxl py-5">
        <div className="container">
          <Title title="Giảng viên" desc="Đội Ngũ Giáo Viên Xuất Sắc Top 1%" />
          <Carousel
            className="row g-1"
            data={teachers}
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={4}
            navigation
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
            }}>
            {(item, index) => {
              return (
                <div
                  key={index}
                  className="col wow fadeInUp"
                  data-wow-delay="0.1s">
                  <div className="team-item bg-light">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid w-100 h-100"
                        style={{ minHeight: "270px" }}
                        src={ImageLink + item.user.avatar}
                        alt={item.user.name}
                      />
                    </div>
                    <div
                      className="position-relative d-flex justify-content-center"
                      style={{ marginTop: "-23px" }}>
                      <div className="bg-light d-flex justify-content-center pt-2 px-1 border border-primary">
                        <span
                          className="fw-bold fs-4 text-primary"
                          style={{ textTransform: "capitalize" }}>
                          {item.subject}
                        </span>
                      </div>
                    </div>
                    <div className="text-center p-4 lh-lg">
                      <Link to={"/giang-vien/" + item.user.id}>
                        <h5 className="mb-0">{item.user.name}</h5>
                      </Link>
                      <small>{item.exp_year} năm kinh nghiệm</small>
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

export default Instructors;
