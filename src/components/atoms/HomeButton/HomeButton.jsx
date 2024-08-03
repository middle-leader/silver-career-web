import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

function BackButton({ className }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="login__back flex justify-center mt-2 w-full">
      <Button
        colorClass="btn-gray"
        className={`h-10 w-full text-sm ${className}`}
        onClick={handleClick}
      >
        메인페이지로 돌아가기
      </Button>
    </div>
  );
}

export default BackButton;
