import { ImageLink } from "../../../utils/ImageLink";
import StarsRating from "./StarsRating";
import NoAvatar from "/img/no-avatar.png";

const Comments = ({ comments }) => {
  return (
    <>
      <h4>Nhận xét</h4>
      <hr />
      <div className="row g-3" style={{ maxHeight: "450px", overflow: "auto" }}>
        {comments.map((item) => {
          return (
            <div className="col-md-12">
              <div className="d-flex">
                <img
                  className="rounded-circle me-3 "
                  style={{ height: "3rem", width: "3rem" }}
                  src={
                    item.user.avatar ? ImageLink + item.user.avatar : NoAvatar
                  }
                  alt={item.user.name}
                />
                <div className="card p-3 shadow-lg w-100">
                  <div className="mb-1">
                    <h5 className="h5  mb-0">{item.user.name}</h5>
                    <StarsRating number={item.rating} />
                  </div>
                  <p>{item.comment}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Comments;
