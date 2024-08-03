import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // react-icons에서 FaHome 아이콘을 임포트

function Header() {
  return (
    <header className="sticky top-0 h-[80px] shadow-md z-30 bg-white">
      <div className="container mx-auto flex justify-between h-full items-center">
        <a href="/">Mentor-Mentee Matching Platform</a>
        <nav className="flex gap-4">
          <Link className="text-mentor text-[16px]" to="/mentor">
            멘토페이지
          </Link>
          <Link className="text-mentee text-[16px]" to="/mentee">
            멘티페이지
          </Link>
        </nav>
        <nav className="flex items-center gap-4">
          <Link className="text-[16px]" to="/login">
            로그인
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
