import React, { Component } from "react";
import Aside from "./Aside";
import ProductDisplay from "./ProductDisplay";
import Pagination from "../Pagination";

class Main extends Component {
  render() {
    return (
      <main className="main grid">
        <aside className="aside col-4 col-xs-12">
          <Aside />
        </aside>
        <section className="product__main col-8 col-xs-12">
          <ProductDisplay />
          <Pagination />
        </section>
      </main>
    );
  }
}
export default Main;
