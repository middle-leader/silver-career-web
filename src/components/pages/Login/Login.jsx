import React, { useState } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import HomeButton from "../../atoms/HomeButton/HomeButton";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  // const [accessToken, setAccessToken] = "";
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // 기본 제출 동작 방지

    try {
      // const response = await axios.post("http://localhost:3000/auth/login", {
      //   email,
      //   password,
      // });
      // localStorage.setItem("accessToken", response.data.accessToken);

      // setAccessToken(response.data.accessToken);

      navigate("/mypage");
    } catch (error) {
      window.alert("로그인에 실패했습니다.");
      console.error("Login failed:", error);
      // 로그인 실패 처리
    }
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
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Input
            type="password"
            placeholder="숫자/문자/기호 사용, 8자 이상"
            label="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            onClick={handleLogin}
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
