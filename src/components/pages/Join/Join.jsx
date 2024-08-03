import React from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import HomeButton from "../../atoms/HomeButton/HomeButton";

function Join() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white mt-12">
      <form className="border border-gray-300 p-8 rounded-md w-[480px] flex flex-col items-center">
        <div className="join__title mt-8 mb-8 mx-2 text-start w-full">
          <h1 className="h1 font-bold text-[28px]">회원가입</h1>
        </div>
        <div className="mb-4">
          <Input type="text" placeholder="고길동" label="이름" />
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <Input
                size="full"
                type="text"
                placeholder="숫자만 사용 (01012345678)"
                label="휴대폰번호"
              />
            </div>
            <div className="col-span-1">
              <Button colorClass="btn-gray" className="h-12 w-full text-base">
                인증
              </Button>
            </div>
          </div>
          <Input
            type="password"
            placeholder="숫자/문자/기호 사용, 8자 이상"
            label="비밀번호"
          />
          <Input
            type="password"
            placeholder="숫자/문자/기호 사용, 8자 이상"
            label="비밀번호 재입력"
          />
          <Input
            type="text"
            placeholder="8자리 입력 (19900101)"
            label="생년월일"
          />
          <Input type="text" placeholder="example@example.com" label="이메일" />
        </div>

        <div className="join__doJoin flex justify-center w-full">
          <Button
            colorClass="btn-blue"
            className="h-10 text-sm w-full"
            onClick={handleClick}
          >
            회원가입
          </Button>
        </div>
        <HomeButton />
      </form>
      <div className="join__footer mt-8 mb-12 text-sm">mmm - matching.</div>
    </div>
  );
}

export default Join;
