import React from "react";

const Services = () => {
  return (
    <>
      <div className="container-xxl my-5">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-graduation-cap text-primary mb-4" />
                  <h5 className="mb-3">
                    Nền Tảng Học Tập Tương Tác Trực Tuyến
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-globe text-primary mb-4" />
                  <h5 className="mb-3">Thầy Cô Và Cộng Đồng Học Tập Dẫn Đầu</h5>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-home text-primary mb-4" />
                  <h5 className="mb-3">Khoá Học Đa Dạng Theo Nhu Cầu</h5>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-book-open text-primary mb-4" />
                  <h5 className="mb-3">Cam Kết Lộ Trình Với Kết Quả Rõ Ràng</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
    </>
  );
};

export default Services;
