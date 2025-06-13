import React from "react";
import SliderComp from "./SliderComp";

function Home() {
  return (
    <div>
      <SliderComp />

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
