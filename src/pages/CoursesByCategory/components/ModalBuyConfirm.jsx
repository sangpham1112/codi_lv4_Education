import { useSelector } from "react-redux";
import { buyCourse } from "../../../api/Courses";

const ModalBuyConfirm = ({ selectedScheduleId }) => {
  const { user } = useSelector((state) => state.user);

  const handleBuyCourse = async () => {
    if (user?.name) {
      const data = {
        user_id: user.id,
        schedule_id: selectedScheduleId,
      };
      await buyCourse(data);
      // console.log(user.id, selectedScheduleId);
      alert("Bạn đã mua thành công");
    } else {
      alert("Bạn phải đăng nhập để mua !");
    }
  };
  return (
    <div
      className="modal fade"
      id="ModalBuyConfirm"
      tabIndex={-1}
      aria-labelledby="ModalBuyConfirm"
      aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalBuyConfirm">
              Xác nhận mua
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">Bạn xác nhận mua Khoá học này ?</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal">
              Đóng
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleBuyCourse}>
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBuyConfirm;
