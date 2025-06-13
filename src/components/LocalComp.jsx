import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import proj4 from "proj4";
import React, { useEffect, useState } from "react";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";

proj4.defs(
  "EPSG:5174",
  "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +units=m +no_defs"
);

function LocalComp() {
  const [mapData, setMapData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 변환기 설정
  const transformCoordinates = (x, y) => {
    const [lon, lat] = proj4("EPSG:5174", "EPSG:4326", [x, y]);
    return { lat, lon };
  };

  const getMapData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        "http://openapi.seoul.go.kr:8088/505475586868616e39364d4446456a/xml/AccInfo/1/100/"
      );

      const xmlData = res.data;
      const parser = new XMLParser();
      const jsonData = parser.parse(xmlData);

      const transformedData = jsonData.AccInfo.row.map((item) => {
        const X = item.grs80tm_x;
        const Y = item.grs80tm_y;
        const { lat, lon } = transformCoordinates(X, Y);
        return { ...item, lat, lon };
      });

      setMapData(transformedData);
      console.log(transformedData);
      setError(null);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
      setError("데이터를 불러오는데 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMapData();
  }, []);

  // 기본 중심 좌표 (서울시청)
  const defaultCenter = {
    lat: 37.5665,
    lng: 126.978,
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          로딩중...
        </div>
      )}

      {error && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "20px",
            borderRadius: "10px",
            color: "red",
          }}
        >
          {error}
        </div>
      )}

      <Map
        id="map"
        center={
          mapData.length > 0
            ? {
                lat: 37.5665,
                lng: 126.978,
              }
            : defaultCenter
        }
        style={{
          width: "100%",
          height: "100%",
        }}
        level={9}
      >
        {mapData.map((item, index) => (
          <React.Fragment key={index}>
            <MapMarker
              position={{
                lat: item.lat,
                lng: item.lon,
              }}
              onClick={() => {
                // 모든 오버레이 숨기기
                const allOverlays =
                  document.querySelectorAll('[id^="overlay-"]');
                allOverlays.forEach((overlay) => {
                  overlay.style.display = "none";
                });

                // 클릭한 마커의 오버레이만 표시
                const overlay = document.getElementById(`overlay-${index}`);
                if (overlay) {
                  overlay.style.display = "block";
                }
              }}
            />
            <CustomOverlayMap
              position={{
                lat: item.lat,
                lng: item.lon,
              }}
              yAnchor={1.2}
              xAnchor={0}
              visible={false}
            >
              <div
                id={`overlay-${index}`}
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                  display: "none",
                }}
              >
                {item.acc_info.split("&#13;").map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
            </CustomOverlayMap>
          </React.Fragment>
        ))}
      </Map>
    </div>
  );
}

export default LocalComp;
