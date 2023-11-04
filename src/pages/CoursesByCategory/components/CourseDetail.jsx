import React from "react";

const CourseDetail = ({ course }) => {
  const Details = JSON.parse(course.detail);
  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      {Details.map((item, index) => {
        const itemId = "panelsStayOpen-" + course.id + "-" + index;
        return (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={itemId + "-header"}>
              <button
                className="accordion-button fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#" + itemId}
                aria-expanded={index === 0}
                aria-controls={itemId}>
                {item.title}
              </button>
            </h2>
            <div
              id={itemId}
              className={
                "accordion-collapse collapse" + (index === 0 ? " show" : "")
              }
              aria-labelledby={itemId + "-header"}>
              <div className="accordion-body">
                <div dangerouslySetInnerHTML={{ __html: item.info }} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CourseDetail;
