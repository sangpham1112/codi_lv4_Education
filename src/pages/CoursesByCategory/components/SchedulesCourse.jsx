import { useState } from "react";
import { ImageLink } from "../../../utils/ImageLink";
import ModalBuyConfirm from "./ModalBuyConfirm";
import formatPrice from "../../../utils/FormatPrice";

const SchedulesCourse = ({ schedules, price, user, discount }) => {
  const [selectedScheduleId, setSelectedScheduleId] = useState(0);

  const isStudentInClass = (studentsInClass) => {
    const ids = studentsInClass.map((item) => Number(item.user_id));
    return ids.includes(user?.id);
  };

  return (
    <>
      {schedules?.map((item, index) => {
        if (item.user.status == 0) {
          return null;
        }
        return (
          <div className="card mb-3 shadow rounded" key={index}>
            <div className="row g-0 align-items-center">
              <div className="col-md-5">
                <img
                  src={ImageLink + item.user.avatar}
                  className="img-fluid rounded-start ms-2 rounded"
                  style={{ minHeight: "270px", objectFit: "cover" }}
                  alt={item.user.name}
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">{item.user.name}</h5>
                  <p className="card-text">{item.user.experience}</p>
                  <div className="card-text">
                    <ul className="list-group list-group-flush fw-bold">
                      <li className="list-group-item">Lớp: {item.name}</li>
                      <li className="list-group-item">{item.schedule_time}</li>
                      <li className="list-group-item">
                        {discount == 0
                          ? formatPrice(price)
                          : formatPrice(price * (1 - discount / 100))}
                        {discount > 0 && (
                          <span className="badge bg-danger ms-2">
                            -{discount}%
                          </span>
                        )}
                      </li>
                    </ul>
                    <div className="card-body">
                      <button
                        onClick={() => setSelectedScheduleId(item.id)}
                        className="btn btn-success"
                        data-bs-toggle="modal"
                        disabled={isStudentInClass(item.schedule_students)}
                        data-bs-target="#ModalBuyConfirm">
                        {isStudentInClass(item.schedule_students)
                          ? "Đã mua"
                          : "Mua ngay"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <ModalBuyConfirm selectedScheduleId={selectedScheduleId} />
    </>
  );
};

export default SchedulesCourse;
