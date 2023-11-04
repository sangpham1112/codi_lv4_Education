import React from "react";
import imgClient1 from "/img/testimonial-1.jpg";
import imgClient2 from "/img/testimonial-2.jpg";
import imgClient3 from "/img/testimonial-3.jpg";
import imgClient4 from "/img/testimonial-4.jpg";
import Carousel from "../../../components/Carousel";
import Title from "../../../components/Title";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials = () => {
  const dataTestimonials = [
    {
      image: imgClient3,
      clientName: "Phạm Minh Quân",
      role: "HSG Toán cấp quận giải nhì 16 điểm",
      desc: "“Con vốn là một đứa trẻ sống khá khép kín nhưng khi học với thầy cô Marathon, chị thấy con chia sẻ nhiều hơn và rất hào hứng trong mỗi giờ học. Đặc biệt thầy Sỹ Đạt đã truyền cho con cảm hứng rất lớn đối với môn toán và để lại ấn tượng trong con.”",
    },
    {
      image: imgClient2,
      clientName: "Nguyễn Minh Thiện",
      role: "Tổ hợp khối D07 26 điểm",
      desc: "“Học tại Marathon mình thật sự không biết nói gì hơn ngoài hai chữ tuyệt vời.”",
    },
    {
      image: imgClient1,
      clientName: "Nguyễn Thị Huỳnh Như",
      role: "Tổ hợp khối D01 22,8 điểm",
      desc: "“Học tại Marathon dù là học online nhưng rất thuận tiện vì là học livestream trực tiếp, cần gì hỏi ngay nên không bị thụ động. Đội ngũ cố vấn nhiệt tình, dễ thương. Chương trình giảng dạy rất cô đọng, giúp ích được cho em nhiều trong học tập cũng như trong thi cử.”",
    },
    {
      image: imgClient4,
      clientName: "Hoàng Ngọc Mai",
      role: "Tổ hợp khối C01 25 điểm",
      desc: "“Khóa luyện đề tại Marathon dạy đúng trọng tâm, bám sát đề minh họa, linh hoạt giờ giấc nên em có thể theo học đều và đủ, nhờ đó em cũng tự tin về bài thi tốt nghiệp của mình. Học thêm online livestream 100% như Marathon rất hiệu quả và thuận tiên cho các bạn ở xa, không có điều kiện đi lại.”",
    },
  ];
  return (
    <>
      {/* Testimonial Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <Title
            title="Đánh giá"
            desc="Phụ huynh - Học sinh Marathon Nói Gì?"
          />
          <Carousel
            className="testimonial-carousel"
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            data={dataTestimonials}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}>
            {(item) => {
              return (
                <div className="testimonial-item text-center">
                  <img
                    className="border rounded-circle p-2 mx-auto mb-3"
                    src={item.image}
                    style={{ width: 80, height: 80 }}
                  />
                  <h5 className="mb-0">{item.clientName}</h5>
                  <p>{item.role}</p>
                  <div className="testimonial-text bg-light text-center p-4 ">
                    <p className="mb-0 w-75 mx-auto">{item.desc}</p>
                  </div>
                </div>
              );
            }}
          </Carousel>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
};

export default Testimonials;
