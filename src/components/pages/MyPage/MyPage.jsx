import React, { useState } from "react";
import Input from "../../atoms/Input/Input";

function MyPage() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [major, setMajor] = useState("");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex">
        {/* 좌측 네비게이션 */}
        <div className="w-1/4 p-6">
          <h2 className="text-2xl font-bold mb-8 border-b border-zinc-800 pb-4">
            계정 설정
          </h2>
          <ul className="space-y-4">
            <li className="text-lg text-zinc-900 cursor-pointer">내정보</li>
            <li className="text-lg text-zinc-400 hover:text-zinc-700 cursor-pointer">
              비밀번호 변경
            </li>
            <li className="text-lg text-zinc-400 hover:text-zinc-700 cursor-pointer">
              회원 탈퇴
            </li>
          </ul>
        </div>

        {/* 우측 컨텐츠 */}
        <div className="w-3/4 bg-white p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">프로필 설정</h2>
            <div className="flex space-x-6 border p-8 h-[800px]">
              <img
                src="https://via.placeholder.com/150"
                alt="프로필 사진"
                className="w-32 h-32 rounded-full mt-10"
              />
              <div className="flex flex-col mt-10 mb-4 w-full space-y-4">
                <Input
                  type="text"
                  placeholder="닉네임을 입력하세요"
                  label="닉네임"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="이메일을 입력하세요"
                  label="이메일"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="휴대폰 번호를 입력하세요"
                  label="휴대폰 번호"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder=""
                  label="분야 선택"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
