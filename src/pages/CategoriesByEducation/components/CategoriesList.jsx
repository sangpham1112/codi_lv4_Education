import { Link } from "react-router-dom";
import formatDate from "../../../utils/FormatDate";
import formatPrice from "../../../utils/FormatPrice";

const CategoriesList = ({ categoriesByEducation }) => {
  console.log(categoriesByEducation);
  return (
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      {categoriesByEducation.map((item) => {
        return (
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-white bg-primary border-primary">
                <h4 className="my-0 fw-normal">{item.name}</h4>
              </div>
              <div className="card-body">
                {item.courses.length > 0 ? (
                  <>
                    <h5 className="card-title pricing-card-title">
                      Giá trung bình: {formatPrice(item.courses[0].avg_price)}
                    </h5>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>Số khoá học: {item.courses[0].course_count}</li>
                      <li>
                        Cập nhật gần nhất:{" "}
                        {formatDate(item.courses[0].latest_time)}
                      </li>
                    </ul>
                    <Link
                      to={"/loai-khoa-hoc/" + item.id}
                      className="w-100 btn btn-lg btn-primary">
                      Vào xem
                    </Link>
                  </>
                ) : (
                  <h5 className="card-title pricing-card-title">
                    Chưa có thông tin
                  </h5>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesList;
