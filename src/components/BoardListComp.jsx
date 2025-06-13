import React from "react";

function BoardListComp({ data, title }) {
  return (
    <>
      <div className="p-3 border border-dark rounded-3">
        <h3>{title}</h3>
        <hr />
        {/* <div>
          {data[0].title} {data[0].date}
        </div>
        <div>
          {data[1].title} {data[1].date}
        </div> */}

        {data.slice(0, 5).map((item, index) => {
          return (
            <div key={index}>
              {item.title} {item.date}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BoardListComp;
