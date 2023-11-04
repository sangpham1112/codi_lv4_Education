import React from "react";
import { ImageLink } from "../../../utils/ImageLink";
import { Link } from "react-router-dom";

const TeacherList = ({ teachers }) => {
  return (
    <>
      <div className="row g-3 mb-5">
        {teachers?.map((item, index) => {
          return (
            <div
              key={index}
              className="col-md-3 wow fadeInUp"
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
        })}
      </div>
    </>
  );
};

export default TeacherList;
