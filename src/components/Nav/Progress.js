import "./Nav.css";
import React from "react";
import { Icon } from "antd";

const Progress = () => {
  const progress = [
    { title: "Create request", isDone: true },
    { title: "Choose a car", isCurrent: true },
    { title: "Choose extras" },
    { title: "Review & Book" },
  ];
  return (
    <div className="progress">
      <div className="progress__steps grid">
        {progress.map((progress, index) => {
          return (
            <div
              key={index}
              className={`progress__step ${progress.isDone ? "done" : ""} ${
                progress.isCurrent ? "current" : ""
              } col-3 col-xs-12 grid`}
            >
              <div>
                {progress.isDone ? (
                  <Icon type="check" style={{ fontSize: 20 }} />
                ) : (
                  index + 1
                )}
              </div>
              <div className="font-medium">{progress.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Progress;
