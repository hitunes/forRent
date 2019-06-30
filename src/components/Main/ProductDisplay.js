import React, { Fragment } from "react";
import { Icon } from "antd";
import { connect } from "react-redux";
import { Button } from "../Button/Button";
import { filterSearchProduct } from "../../data";
import * as ContactActions from "../../store/actions/actions";

const ProductDisplay = props => {
  const onchangeProductFeatures = key => {
    props.toggleDetails(key);
  };

  let { data, filter, filteredList } = props.product;

  let productDisplay =
    filteredList.length === 0
      ? filterSearchProduct(data, filter)
      : filterSearchProduct(filteredList, filter);
  return (
    <Fragment>
      <div className="widget">
        <div className="widget__title product">
          <h3>
            <Icon type="profile" style={{ marginRight: 8 }} />
            Results
            <span className="color-primary--light-10">
              {" "}
              ({productDisplay.length} from {data.length})
            </span>
          </h3>
          <div className="widget__title-sort d-flex">
            <h6 className="uppercase color-primary--light-10 font-small">
              sort by:
            </h6>
            {[
              { sortBy: "Price", current: true },
              { sortBy: "Type", current: false },
            ].map((type, index) => (
              <span
                key={index}
                className="vertical-rule font-small"
                style={{
                  color: type.current ? "#444c57" : "#378eef",
                  cursor: "pointer",
                }}
              >
                {type.sortBy}
              </span>
            ))}
          </div>
        </div>
        {productDisplay.map((product, index) => {
          return (
            <div key={index} className="widget__content product grid">
              <div className="col-9 col-x-12 grid product__info">
                <div className="col-4 col-xs-12 text-center">
                  <img src={product.productImage} alt="product" width="100%" />
                </div>
                <div className="col-8 col-xs-12" style={{ paddingLeft: 40 }}>
                  <div className="product-title d-flex">
                    <h3 className="color-primary--bolder">
                      {product.productName}
                    </h3>
                    <span className="vertical-divider">|</span>
                    <h3
                      className="color-primary--light-10"
                      style={{ textTransform: "capitalize" }}
                    >
                      {product.type}
                    </h3>
                    <div>
                      {product.tag.map(tag => (
                        <div
                          className={`product__tag ${tag ? "" : "d-none"}`}
                          style={{ textTransform: "capitalize" }}
                        >
                          {tag.name}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="product__features">
                    {product.info.map((info, index) => (
                      <p key={index}>
                        <Icon type={info.icon} style={{ marginRight: 5 }} />
                        {info.type}
                      </p>
                    ))}
                  </div>
                  <div
                    className={`dotted-link product__additional-features ${
                      product.active ? "open" : "close"
                    }`}
                    onClick={() => onchangeProductFeatures(product.id)}
                  >
                    {product.active
                      ? "[-] Close car details"
                      : "[+] View car details"}
                  </div>
                  <div>
                    <ul
                      className={`product__additional-features__list ${
                        product.active ? "open" : "close"
                      }`}
                    >
                      {product.addtionalInfo.map((addtionalInfo, index) => (
                        <li key={index}> {addtionalInfo.info}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-3  col-x-12 product__price color-primary--bolder">
                <h1>${product.price}</h1>
                <h4
                  className="font-small color-primary--lighter"
                  style={{ margin: "10px 0 24px" }}
                >
                  {product.offer}
                </h4>
                <Button type="blue uppercase " style={{ height: 45 }}>
                  <span className="font-medium">Select</span>
                  <i
                    className="far fa-arrow-alt-circle-right"
                    style={{ color: "#fff", marginLeft: 5 }}
                  />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
const mapDispatchToProps = dispatch => ({
  toggleDetails: payload => {
    dispatch(ContactActions.toggleDetails(payload));
  },
});
const mapStateToProps = state => ({
  product: state.product,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDisplay);
