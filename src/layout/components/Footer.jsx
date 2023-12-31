import { useState } from "react";
import { useCustomMutate } from "../../hooks/useCustomMutate";
import { SendEmail } from "../../api/User";
import { LoaderIcon } from "react-hot-toast";

const Footer = () => {
  const [email, setEamil] = useState("");
  const sendEmailMutation = useCustomMutate("schedule_students", SendEmail);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    if (!email && email == "") {
      alert("chưa nhập email");
      return;
    }
    sendEmailMutation.mutate(email);
  };

  return (
    <>
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Thông tin</h4>
              <a className="btn btn-link" href="">
                About Us
              </a>
              <a className="btn btn-link" href="">
                Contact Us
              </a>
              <a className="btn btn-link" href="">
                Privacy Policy
              </a>
              <a className="btn btn-link" href="">
                Terms &amp; Condition
              </a>
              <a className="btn btn-link" href="">
                FAQs &amp; Help
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Liên hệ</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                123 Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                +012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                info@example.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube" />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <form className="col-md-6" onSubmit={handleSubmit}>
              <h4 className="text-white mb-3">Email liên lạc</h4>
              <div className="position-relative" style={{ maxWidth: 400 }}>
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="email"
                  value={email}
                  onChange={(e) => setEamil(e.target.value)}
                  placeholder="Email của bạn"
                />
                <button
                  type="submit"
                  disabled={sendEmailMutation.isPending}
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">
                  {sendEmailMutation.isPending ? <LoaderIcon /> : "Gửi"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
