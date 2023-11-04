import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { LoginUser, googleLogin } from "../../api/User";
import { useDispatch, useSelector } from "react-redux";
import { saveUserLogin } from "../../redux/users/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data: result, error } = await LoginUser({ email, password });
    if (result) {
      dispatch(saveUserLogin(result.user));
      navigate(-1);
    } else {
      alert(error);
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const result = await googleLogin(tokenResponse.access_token);
      dispatch(saveUserLogin(result.user));
      navigate(-1);
    },
  });

  return (
    <div className="d-flex align-items-center" style={{ height: "100vh" }}>
      <form className="form-signin" onSubmit={handleLogin}>
        <h1 className="h3 mb-3 fw-normal">Đăng nhập</h1>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Địa chỉ email</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Mật khẩu</label>
        </div>
        <button className="w-100 btn btn-lg btn-success mb-3" type="submit">
          Đăng nhập
        </button>
        <div className="my-3 w-100">
          <button className="btn btn-dark" onClick={() => handleGoogleLogin()}>
            <i className="bi bi-google me-2"></i> Đăng nhập với google
          </button>
        </div>
        <span className="text-muted">
          Chưa có tài khoản ? <a href="#">Vào đây</a>
        </span>
      </form>
    </div>
  );
};

export default Login;
