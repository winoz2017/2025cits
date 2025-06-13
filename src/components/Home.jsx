import React, { useState } from "react";
import SliderComp from "./SliderComp";
import BoardListComp from "./BoardListComp";
import Slider2Comp from "./Slider2Comp";
const init = [
  { id: 1, title: "안녕하세요1", date: "2025-06-13" },
  { id: 2, title: "안녕하세요2", date: "2025-06-13" },
  { id: 3, title: "안녕하세요3", date: "2025-06-13" },
  { id: 4, title: "안녕하세요4", date: "2025-06-13" },
  { id: 5, title: "안녕하세요5", date: "2025-06-13" },
];

const init2 = [
  { id: 1, title: "오늘소식 1", date: "2025-06-13" },
  { id: 2, title: "오늘의 소식2", date: "2025-06-13" },
  { id: 3, title: "오늘의 소식3", date: "2025-06-13" },
  { id: 4, title: "오늘의 소식4", date: "2025-06-13" },
  { id: 5, title: "오늘의 소식5", date: "2025-06-13" },
  { id: 6, title: "오늘의 소식6", date: "2025-06-13" },
  { id: 7, title: "오늘의 소식7", date: "2025-06-13" },
  { id: 8, title: "오늘의 소식8", date: "2025-06-13" },
  { id: 9, title: "오늘의 소식9", date: "2025-06-13" },
  { id: 10, title: "오늘의 소식10", date: "2025-06-13" },
];

function Home() {
  const [data, setData] = useState(init);
  const [data2, setData2] = useState(init2);

  return (
    <div>
      <SliderComp />
      <div className="container mb-3">
        <div className="row">
          <div className="col-12 col-md-6 ">
            <BoardListComp data={data} title="공지사항" />
          </div>
          <div className="col-12 col-md-6">
            <BoardListComp data={data2} title="오늘의 소식" />
          </div>
        </div>
      </div>
      <div
        className="bg-dark text-white py-5 mb-3"
        style={{
          backgroundImage: "url(./image/pc01.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundepeat: "no-repeat",
        }}
      >
        <div className="container  p-3">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </div>
      <Slider2Comp />
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>회사 정보</h5>
              <p>주소: 서울특별시 강남구</p>
              <p>전화: 02-123-4567</p>
              <p>이메일: info@company.com</p>
            </div>
            <div className="col-md-4">
              <h5>바로가기</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-white">
                    홈
                  </a>
                </li>
                <li>
                  <a href="/map" className="text-white">
                    지도
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>소셜 미디어</h5>
              <div className="d-flex gap-3">
                <a href="#" className="text-white">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="text-center">
            <p className="mb-0">&copy; 2024 Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
