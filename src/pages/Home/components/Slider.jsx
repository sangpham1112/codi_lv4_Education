import React from "react";
import image1 from "/img/carousel-1.jpg";
import image2 from "/img/carousel-2.jpg";
import Carousel from "../../../components/Carousel";
import { Navigation } from "swiper/modules";

const Slider = () => {
  const sliderData = [
    {
      image: image1,
      header: "Marathon Education",
      title: "Nền Tảng Học Trực Tuyến Hàng Đầu Việt Nam",
      desc: "Nền tảng học online Marathon Education cải thiện và nâng cao học lực của bạn với nhiều loại hình giảng dạy kết hợp với công nghệ thu thập và xử lý dữ liệu theo từng buổi học.",
      link: "https://marketing.marathon.edu.vn/con-la-nhat?utm_campaign=Digi_Website_BrandCamp_all_HomePage",
    },
    {
      image: image2,
      header: "Marathon Education",
      desc: "Start up giáo dục đầu tiên tại Đông Nam Á được rót vốn từ quỹ đầu tư đồng sáng lập Microsoft. Top 10 doanh nghiệp nhận giải Thương hiệu dẫn đầu Việt Nam 2023",
      title: "Niềm Tự Hào Mang Tên Marathon",
      link: "https://marathon.edu.vn/about",
    },
  ];
  //   console.log(sliderData);
  return (
    <>
      <Carousel data={sliderData} navigation modules={[Navigation]}>
        {(item) => {
          return (
            <>
              <img className="img-fluid" src={item.image} alt="" />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(24, 29, 56, .7)" }}>
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-sm-10 col-lg-8">
                      <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                        {item.header}
                      </h5>
                      <h1 className="display-4 text-white animated slideInDown">
                        {item.title}
                      </h1>
                      <p className="fs-5 text-white mb-4 pb-2 d-none d-md-block">
                        {item.desc}
                      </p>
                      <a
                        href={item.link}
                        target="_blank"
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                        Thông tin thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </Carousel>
    </>
  );
};

export default Slider;
