import React from "react";

const Title = ({ title, desc }) => {
  return (
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title bg-white text-center text-primary px-3">
        {title}
      </h6>
      <h1 className="mb-5">{desc}</h1>
    </div>
  );
};

export default Title;
