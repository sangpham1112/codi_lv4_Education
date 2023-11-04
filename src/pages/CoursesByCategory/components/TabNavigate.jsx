import { Link, useLocation } from "react-router-dom";

const TabNavigate = ({ allGrade }) => {
  const location = useLocation();
  const grade = decodeURIComponent(location.search.split("=")[1]);
  console.log(grade);

  return (
    <ul className="nav nav-pills d-flex justify-content-center">
      <li className="nav-item">
        <Link
          className={location.search === "" ? "nav-link active" : "nav-link"}
          to={""}>
          Tất cả
        </Link>
      </li>
      {allGrade?.map((item, index) => {
        return (
          <li className="nav-item" key={index}>
            <Link
              className={item == grade ? "nav-link active" : "nav-link"}
              to={`?grade=` + item}>
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TabNavigate;
