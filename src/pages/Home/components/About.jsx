import React from "react";
import Title from "../../../components/Title";

const About = () => {
  return (
    <>
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: 400 }}>
              <div className="position-relative h-100">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://youtube.com/embed/KMAiGwFYmE0"
                    title="YouTube video"
                    allowFullScreen></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <Title title="Thông tin" desc="Học Thử Trải Nghiệm Thật" />
              <div className="row gy-2 gx-4 mb-4 mx-auto fs-5">
                <div className="col-sm-12">
                  <p className="mb-3">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Học sinh đang có mong muốn trải nghiệm khoá học
                  </p>
                </div>
                <div className="col-sm-12">
                  <p className="mb-3">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Học sinh có học lực Khá mong muốn tăng điểm lên 8+
                  </p>
                </div>
                <div className="col-sm-12">
                  <p className="mb-3">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Luyện thêm các bài khó để học sinh luyện thi chuyên
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  );
};

export default About;
