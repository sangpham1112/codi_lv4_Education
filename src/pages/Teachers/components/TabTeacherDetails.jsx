import React from "react";

const TabTeacherDetails = ({ teacher }) => {
  return (
    <div className="col-md-8 border rounded p-3">
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true">
            Đôi nét về giảng viên
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false">
            Phương pháp giảng dạy
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false">
            Thành tích nổi bật
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab">
          <div
            dangerouslySetInnerHTML={{
              __html: teacher.teacher.description,
            }}></div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab">
          <div
            dangerouslySetInnerHTML={{
              __html: teacher.teacher.teaching_method,
            }}></div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab">
          <div
            dangerouslySetInnerHTML={{
              __html: teacher.teacher.achivement,
            }}></div>
        </div>
      </div>
    </div>
  );
};

export default TabTeacherDetails;
