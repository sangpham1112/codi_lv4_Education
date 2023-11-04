import backGround from "/img/education_bacground.jpg";

const Banner = ({
  title = "Chương Trình Theo Bộ Giáo Dục",
  children,
  backgroundImage = backGround,
}) => {
  return (
    <div
      className="px-4 py-5 my-5 text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}>
      <h1 className="display-5 fw-bold">{title}</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">{children}</p>
      </div>
    </div>
  );
};

export default Banner;
