import React from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import { Link } from "react-router-dom";
import HomeButton from "../../atoms/HomeButton/HomeButton";

function Login() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <form className="border border-gray-300 p-8 rounded-md w-[480px] flex flex-col items-center">
        <div className="login__title mt-20 mb-12 mx-2 text-start w-full">
          <h1 className="h1 font-bold text-[28px]">로그인</h1>
        </div>
        <div className="mb-4 w-full">
          <Input
            type="text"
            placeholder="숫자만 사용 (01012345678)"
            label="휴대폰번호"
          />
          <Input
            type="password"
            placeholder="숫자/문자/기호 사용, 8자 이상"
            label="비밀번호"
          />
        </div>
        <div className="login__join mb-4 text-end w-full">
          <Link className="font-normal text-base text-[#4F4F4F]" to="/join">
            회원가입
          </Link>
        </div>
        <div className="login__doLogin flex justify-center mt-12 w-full">
          <Button
            colorClass="btn-blue"
            className="h-10 w-full text-sm"
            onClick={handleClick}
          >
            로그인
          </Button>
        </div>
        <HomeButton />
      </form>
      <div className="login__footer mt-8 text-sm">mmm - matching.</div>
    </div>
  );
}

export default Login;
