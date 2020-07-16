import React, { Component } from "react";
import "./style.css";
export default class BaiTapThuKinh extends Component {
  state = {
    glassList: [
      {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./img/glassesImage/v1.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
      },

      {
        id: 2,
        price: 50,
        name: "GUCCI G8759H",
        url: "./img/glassesImage/v2.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 3,
        price: 30,
        name: "DIOR D6700HQ",
        url: "./img/glassesImage/v3.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 4,
        price: 30,
        name: "DIOR D6005U",
        url: "./img/glassesImage/v4.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 5,
        price: 30,
        name: "PRADA P8750",
        url: "./img/glassesImage/v5.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 6,
        price: 30,
        name: "PRADA P9700",
        url: "./img/glassesImage/v6.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 7,
        price: 30,
        name: "FENDI F8750",
        url: "./img/glassesImage/v7.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 8,
        price: 30,
        name: "FENDI F8500",
        url: "./img/glassesImage/v8.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 9,
        price: 30,
        name: "FENDI F4300",
        url: "./img/glassesImage/v9.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
    ],
    glassSelected: null,
  };

  renderGlasses = () => {
    return this.state.glassList.map((glass, index) => {
      return (
        <button
          className="btn"
          key={index}
          onClick={() => this.setState({ glassSelected: glass })}
        >
          <img src={glass.url} alt="kinh" />
        </button>
      );
    });
  };

  renderModel = () => {
    if (this.state.glassSelected) {
      const { url, name, price, desc } = this.state.glassSelected;
      return (
        <div>
          <img src={url} alt="hinh" className="glasses__glass" />

          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <button type="button" className="btn btn-danger btn-lg">
              ${price}
            </button>
            <p className="card-text">{desc}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <section className="glasses">
        <div className="glasses__wrapper container my-4">
          <div className="row">
            <div className="col-6">
              <h2>Virtual Glasses</h2>
              <div className="d-flex flex-wrap">{this.renderGlasses()}</div>
            </div>
            <div className="col-6">
              <div className="card position-relative" style={{ width: 400 }}>
                <img
                  className="card-img-top img-fluid"
                  src="./img/glassesImage/model.jpg"
                  alt="Card"
                />
                {this.renderModel()}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
