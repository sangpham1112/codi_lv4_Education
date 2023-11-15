import ReactStars from "react-rating-stars-component";
import { useState, useRef } from "react";
import { useCustomMutate } from "../../../hooks/useCustomMutate";
import { postComment } from "../../../api/Courses";
import { ImageLink } from "../../../utils/ImageLink";
import NoAvatar from "/img/no-avatar.png";

const PostComment = ({ courseId, user }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const inputRef = useRef();

  const changedRating = (newValue) => {
    setRating(newValue);
  };

  const postCommentMutation = useCustomMutate("courses", postComment);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((!comment && comment == "") || (!rating && rating == "")) {
      alert("Bạn chưa điền đầy đủ thông tin !");
      return;
    }
    postCommentMutation.mutate({
      course_id: courseId,
      user_id: user?.id,
      rating,
      comment,
    });
    setComment("");
    inputRef.current.focus();
  };

  return (
    <div className="card">
      <form className="row p-3" onSubmit={handleSubmit}>
        <div className="col-2">
          <img
            src={user.avatar ? ImageLink + user?.avatar : NoAvatar}
            width={70}
            className="rounded-circle mt-2"
          />
        </div>
        <div className="col-10">
          <div className="comment-box ml-2">
            <h4>Đánh giá</h4>
            <ReactStars
              count={5}
              onChange={changedRating}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <div className="comment-area">
              <textarea
                ref={inputRef}
                value={comment}
                className="form-control"
                placeholder="Nhận xét của bạn"
                rows={4}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className="comment-btns mt-2">
              <div className="row">
                <div className="col-6">
                  <div className="pull-left">
                    <button
                      className="btn btn-success btn-sm"
                      disabled={postCommentMutation.isPending}>
                      Đăng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostComment;
