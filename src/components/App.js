import "antd/dist/antd.css";
import "./App.css";
import "./CustomGrid.css";
import "./../components/Main/Main.css";
import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import Progress from "./Nav/Progress";
import Footer from "./Footer/Footer";
import Search from "./Search/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Nav />
          <Progress />
        </div>
        <Search />
        <Main />
        <Footer />
      </div>
    );
  }
}
export default App;
