import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Icon, Slider, Checkbox, Tag } from "antd";
import * as ContactActions from "../../store/actions/actions";

const Aside = props => {
  let { data } = props.product;
  const onAfterChange = value => {
    props.handleFilterRange(value);
  };
  const onCheck = checkedValues => {
    props.checkboxChange(checkedValues);
  };
  const getTagCount = value => {
    let a = data.filter(
      product => product.value === value || product.type === value
    );
    return a.length;
  };

  let uniqueManufacturer = [...new Set(data.map(item => item.value))];
  let uniqueVehicle = [...new Set(data.map(item => item.type))];

  return (
    <Fragment>
      <div className="widget">
        <div className="widget__title">
          <h3>
            <Icon type="info-circle" style={{ marginRight: 8 }} />
            Info
          </h3>
        </div>
        <p className="widget__content">
          <strong>Please Note: </strong> The vehicles shown are examples.
          Specific models within a car class may vary in availability and
          features, such as passenger seating, luggage capacity and mileage.
        </p>
      </div>
      <div className="widget">
        <div className="widget__title">
          <h3>
            <Icon type="filter" style={{ marginRight: 8 }} />
            Filter results
          </h3>
        </div>

        <div>
          <div>
            <div className="widget__title--small">
              <h5 className="color-primary--light font-small uppercase">
                price range
              </h5>
            </div>
            <div className="widget__content">
              <Slider
                range
                step={10}
                max={1500}
                tooltipPlacement="bottom"
                defaultValue={[250, 1000]}
                onAfterChange={onAfterChange}
              />
            </div>
          </div>
          <div>
            <div className="widget__title--small">
              <h5 className=" color-primary--light font-small uppercase">
                Manufacturers
              </h5>
            </div>
            <div className="widget__content">
              <Checkbox.Group onChange={onCheck} style={{ width: "100%" }}>
                {uniqueManufacturer.map((option, index) => (
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "5px",
                      justifyContent: "space-between",
                    }}
                    key={index}
                  >
                    <div>
                      <Checkbox value={option}>
                        <span style={{ textTransform: "capitalize" }}>
                          {option}
                        </span>
                      </Checkbox>
                    </div>
                    <div>
                      <Tag>{getTagCount(option)}</Tag>
                    </div>
                  </div>
                ))}
              </Checkbox.Group>
            </div>
          </div>

          <div>
            <div className="widget__title--small">
              <h5 className=" color-primary--light font-small uppercase">
                Number of passangers
              </h5>
            </div>
            <div className="widget__content">
              <Slider
                range
                step={1}
                min={1}
                max={5}
                tooltipPlacement="bottom"
                defaultValue={[1, 5]}
                onAfterChange={onAfterChange}
              />
            </div>
          </div>
          <div>
            <div className="widget__title--small">
              <h5 className=" color-primary--light font-small uppercase">
                Vehicle type
              </h5>
            </div>
            <div className="widget__content">
              <Checkbox.Group onChange={onCheck} style={{ width: "100%" }}>
                {uniqueVehicle.map((option, index) => (
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "5px",
                      justifyContent: "space-between",
                    }}
                    key={index}
                  >
                    <div>
                      <Checkbox value={option}>
                        <span style={{ textTransform: "capitalize" }}>
                          {option}
                        </span>
                      </Checkbox>
                    </div>
                    <div>
                      <Tag>{getTagCount(option)}</Tag>
                    </div>
                  </div>
                ))}
              </Checkbox.Group>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const mapDispatchToProps = dispatch => ({
  handleFilterRange: payload => {
    dispatch(ContactActions.handleFilterRange(payload));
  },
  checkboxChange: payload => {
    dispatch(ContactActions.checkboxChange(payload));
  },
});
const mapStateToProps = state => ({
  product: state.product,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Aside);
