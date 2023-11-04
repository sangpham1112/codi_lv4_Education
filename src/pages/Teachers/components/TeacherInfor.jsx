import { ImageLink } from "../../../utils/ImageLink";

const TeacherInfor = ({ teacher }) => {
  return (
    <>
      <div className="col-md-7">
        <h1>
          Giảng viên <span className="text-primary">{teacher.name}</span>
        </h1>
        <div className="shadow-lg mt-3">
          <h5 className="p-3 fw-bold">Dạy tại: {teacher.teacher.experience}</h5>
          <hr />
          <div className="p-3">
            <div className="row fw-bold">
              <h6 className="col-4">Bộ môn: {teacher.teacher.subject}</h6>
              <h6 className="col-4">
                Kinh nghiệm: {teacher.teacher.exp_year} năm
              </h6>
              <h6 className="col-4">Học vị: {teacher.teacher.degree}</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5 text-center">
        <img
          className="img-fluid rounded-pill"
          style={{ height: "350px" }}
          src={ImageLink + teacher.avatar}
        />
      </div>
    </>
  );
};

export default TeacherInfor;
