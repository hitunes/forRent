import "./Search.css";
import moment from "moment";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Button } from "../Button/Button";
import { DatePicker, Input, TimePicker, Select, Icon } from "antd";
import * as ContactActions from "../../store/actions/actions";

const format = "HH:mm";
const { Option } = Select;

const dateFormat = "DD/MM/YYYY";

class Search extends Component {
  state = {
    searchParam: "",
  };
  handleInputChange = (date, dateString) => {
    console.log(date);
    console.log(dateString);
  };
  handleSelectChange = value => {
    this.setState({
      searchParam: value,
    });
  };
  handleSearchOnclick = () => {
    this.props.handleSearchOnclick(this.state.searchParam);
  };
  render() {
    return (
      <div className="search">
        <div className="search__wrapper">
          <div className="search__border-line" />
          <div className="font-medium">
            <span>
              <Icon type="search" style={{ marginRight: 8, fontSize: 18 }} />
              Search for a car:
            </span>
          </div>
          <div className="search__form grid">
            <div className="search__form__location col-3 col-x-4 col-xs-12">
              <div className="location-title-info">
                <div>Location</div>
                <div>
                  <a className="dotted-link" href="1">
                    Airport codes
                  </a>
                </div>
              </div>
              <div className="location">
                <Input defaultValue="New York, JSB" name="location" />
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <label>Return at different location</label>
              </div>
            </div>
            <div className="search__form__date col-6 col-x-8 col-xs-12">
              <div>
                <h4>Pick-up date</h4>
                <div className="d-flex">
                  <DatePicker
                    onChange={this.handleInputChange}
                    defaultValue={moment("20/12/2013", dateFormat)}
                    format={dateFormat}
                    name="date"
                    suffixIcon={
                      <i
                        className="far fa-calendar-alt"
                        style={{ color: "#378eef" }}
                      />
                    }
                  />
                  <TimePicker
                    defaultValue={moment("10:00", format)}
                    format={format}
                    suffixIcon={<span />}
                  />
                </div>
              </div>
              <div>
                <h4>Drop-off date</h4>
                <div className="d-flex">
                  <DatePicker
                    onChange={this.handleInputChange}
                    defaultValue={moment("20/12/2013", dateFormat)}
                    format={dateFormat}
                    name="date"
                    suffixIcon={
                      <i
                        className="far fa-calendar-alt"
                        style={{ color: "#378eef" }}
                      />
                    }
                  />
                  <TimePicker
                    defaultValue={moment("10:00", format)}
                    format={format}
                    suffixIcon={<span />}
                  />
                </div>
              </div>
            </div>
            <div className="search__form__menu col-3 col-x-6 col-xs-12">
              <h4>Car type</h4>
              <div className="d-flex">
                <Select
                  defaultValue="standard"
                  onSelect={this.handleSelectChange}
                >
                  <Option value="all">Doesn't matter</Option>
                  <Option value="standard">Standard</Option>
                  <Option value="economy">Economy</Option>
                  <Option value="compact">Compact</Option>
                  <Option value="intermediate">Intermediate</Option>
                </Select>
                <Button
                  type="orange uppercase"
                  onClick={this.handleSearchOnclick}
                >
                  Update <i className="fas fa-redo" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSearchOnclick: payload => {
    dispatch(ContactActions.handleSearchOnclick(payload));
  },
});
const mapStateToProps = state => ({
  product: state.product,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
