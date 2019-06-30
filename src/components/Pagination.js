import "./Pagination.css";
import React from "react";
import { Icon } from "antd";

const Pagination = props => {
  return (
    <div className="pagination">
      <div className="previous">
        <Icon type="left-circle" />
      </div>
      <div className="active">1</div>
      <div>2</div>
      <div>3</div>
      <div>...</div>
      <div>10</div>
      <div className="next">
        <Icon type="right-circle" />
      </div>
    </div>
  );
};

export default Pagination;
