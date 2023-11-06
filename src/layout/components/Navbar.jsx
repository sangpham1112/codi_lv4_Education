import { Link, NavLink } from "react-router-dom";
import { Navigations } from "../../config/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/users/userSlice";

const Navbar = () => {
  const navigation = Navigations();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h2 className="m-0 text-primary fs-4 fs-md-2">
            <i className="fa fa-book me-3" />
            Marathon Education
          </h2>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            {navigation.map((item, index) => {
              let links;
              if (item.children) {
                links = (
                  <div className="nav-item dropdown">
                    <a
                      className="nav-link fw-bold dropdown-toggle"
                      data-bs-toggle="dropdown">
                      {item.name}
                    </a>
                    <div className="dropdown-menu fade-down m-0">
                      {item?.children.map((item) => {
                        return (
                          <NavLink to={item.to} className="dropdown-item">
                            {item.name}
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                );
              } else {
                links = (
                  <NavLink
                    to={item.to}
                    className="nav-item nav-link fw-bold"
                    key={index}>
                    {item.name}
                  </NavLink>
                );
              }
              return links;
            })}
          </div>
          {user.name ? (
            <div className="dropdown">
              <Link
                data-bs-toggle="dropdown"
                className="btn btn-primary py-4 px-lg-5 dropdown-toggle">
                {user.name}
                <i className="fa fa-user ms-3"></i>
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-light"
                style={{ cursor: "pointer" }}>
                <li>
                  <span
                    className="dropdown-item"
                    onClick={() => dispatch(logoutUser())}>
                    Đăng xuất
                  </span>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
              Đăng nhập
              <i className="fa fa-user ms-3"></i>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
