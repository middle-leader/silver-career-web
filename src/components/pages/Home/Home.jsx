import React from "react";
import Button from "../../atoms/Button/Button";
import User from "../../..//assets/images/user.png";

function Home() {
  return (
    <main class="max-w-[1920px] mx-auto bg-white overflow-hidden">
      {/* grid img */}
      <div className="xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 z-10"></div>

      {/* Section1 : HERO */}
      <section className="hero h-[640px] xl:h-[840px] bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20">
        <div className="container mx-auto h-full flex items-center justify-center">
          {/* text */}
          <div className="hero__text w-[567px] flex flex-col items-center text-center">
            <h1 className="h1 text-[40px] font-bold mb-4 text-white">
              ~~~ 멘토를 쉽게 찾아보세요
            </h1>

            <Button
              colorClass="btn-primary"
              icon="ri-arrow-right-line"
              className="h-12 w-2/5"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Section2 : 인기있는 멘토를 찾아보세요 */}
      <section className="mt-[80px] relative z-20">
        <div className="container mx-auto xl:px-0">
          {/* text */}
          <div className="text-center mb-24">
            <h2 className="famous__title h2 font-bold mb-4 text-[40px]">
              인기있는 멘토를 찾아보세요.
            </h2>
            <p className="famous__subtitle max-w-3xl mx-auto">
              동료 시니어에게 검증된 멘토에요!
            </p>
          </div>
          <div className="grid gird-cols-1 gap-5 xl:grid-cols-3">
            {/* Mentor #1 */}
            <div className="famous__person text-center">
              <div className="mb-4">
                <i className="ri-magic-line text-5xl text-accent"></i>
              </div>
              <h3 className="h3 mb-5 font-normal">윤민영</h3>
              <p className="mb-5 max-w-md mx-auto">마케팅 전문가</p>
            </div>
            {/* Mentor #2 */}
            <div className="famous__person text-center">
              <div className="mb-4">
                <i className="ri-magic-line text-5xl text-accent"></i>
              </div>
              <h3 className="h3 mb-5 font-normal">임수민</h3>
              <p className="mb-5 max-w-md mx-auto">운영 전문가</p>
            </div>
            {/* Mentor #3 */}
            <div className="famous__person text-center">
              <div className="mb-4">
                <i className="ri-magic-line text-5xl text-accent"></i>
              </div>
              <h3 className="h3 mb-5 font-normal">황정훈</h3>
              <p className="mb-5 max-w-md mx-auto">인프라 전문가</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section3 : 멘토링 후기 */}
      <section className="review mt-[80px] xl:mt-[200px] relative z-20">
        <div className="review__bg container mx-auto bg-accent-secondary rounded-[70px]">
          {/* slider */}
          <div className="w-full">
            <div className="review__slider swiper h-[400px]">
              <div className="swiper-wrapper grid grid-cols-3 ">
                <div className="swiper-slide">
                  <div
                    className="review__item w-full max-w-[370px] h-[340px] bg-white 
                    rounded-[30px] flex flex-col justify-center p-9 mx-auto"
                  >
                    <div className="flex gap-4 mb-6">
                      <img className="h-[100px]" src={User} alt=""></img>
                      <div>
                        <h3 className="font-primary">요니</h3>
                        <div>서울시 구로구</div>
                      </div>
                    </div>
                    <p>
                      먼저, 멘토님은 해당 분야에서 다년간의 경험을 쌓아오신
                      전문가였습니다.덕분에 이론적인 지식뿐만 아니라 실제로 적용
                      가능한 실질적인 노하우를 배울 수 있었습니다.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="review__item w-full max-w-[370px] h-[340px] bg-white 
                    rounded-[30px] flex flex-col justify-center p-9 mx-auto"
                  >
                    <div className="flex gap-4 mb-6">
                      <img className="h-[100px]" src={User} alt=""></img>
                      <div>
                        <h3 className="font-primary">요니</h3>
                        <div>서울시 구로구</div>
                      </div>
                    </div>
                    <p>
                      먼저, 멘토님은 해당 분야에서 다년간의 경험을 쌓아오신
                      전문가였습니다.덕분에 이론적인 지식뿐만 아니라 실제로 적용
                      가능한 실질적인 노하우를 배울 수 있었습니다.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="review__item w-full max-w-[370px] h-[340px] bg-white 
                    rounded-[30px] flex flex-col justify-center p-9 mx-auto"
                  >
                    <div className="flex gap-4 mb-6">
                      <img className="h-[100px]" src={User} alt=""></img>
                      <div>
                        <h3 className="font-primary">요니</h3>
                        <div>서울시 구로구</div>
                      </div>
                    </div>
                    <p>
                      먼저, 멘토님은 해당 분야에서 다년간의 경험을 쌓아오신
                      전문가였습니다.덕분에 이론적인 지식뿐만 아니라 실제로 적용
                      가능한 실질적인 노하우를 배울 수 있었습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[3000px]"></div>
    </main>
  );
}

export default Home;
