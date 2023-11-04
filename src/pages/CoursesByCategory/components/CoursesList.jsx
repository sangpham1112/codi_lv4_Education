import { Link } from "react-router-dom";
import { ImageLink } from "../../../utils/ImageLink";

const CoursesList = ({ courses }) => {
  return (
    <>
      <div className="row g-4">
        {courses?.map((item) => {
          return (
            <div
              className="col-md-3 col-sm-6 mb-5 wow fadeInUp"
              data-wow-delay="0.1s">
              <div className="course-item bg-light" style={{ height: "370px" }}>
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "240px" }}>
                  <img
                    className="img-fluid w-100 h-100"
                    src={ImageLink + item.image}
                    alt={item.name}
                  />
                  <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                    <Link
                      className="flex-shrink-0 btn btn-sm btn-primary px-4 fs-5"
                      style={{ borderRadius: "30px 30px" }}>
                      {item.grade}
                    </Link>
                  </div>
                </div>
                <div className="text-center p-4 pb-0">
                  <Link to={`/khoa-hoc/` + item.id}>
                    <h5 style={{ minHeight: "50px" }}>{item.name}</h5>
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
        })}
      </div>
    </>
  );
};

export default CoursesList;
