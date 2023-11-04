import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="position-relative">
      <span
        style={{ cursor: "pointer" }}
        className="text-secondary position-absolute top-0 left-1"
        onClick={handleBack}>
        <i className="fas fa-caret-left me-2"></i>Quay lại
      </span>
    </div>
  );
};

export default BackButton;
