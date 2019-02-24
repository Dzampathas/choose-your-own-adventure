import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var pages = {
  start: {
    content:
      "Welcome, traveler! How would you like to get to your destination?",
    label1: "Train",
    label2: "Ship",
    page1: "onthetrain",
    page2: "ontheship"
  },
  onthetrain: {
    content:
      "Welcome aboard the choo-choo train! Please make your way to your seat. What's the number?",
    image: "train.png",
    label1: "12E",
    label2: "97C",
    page1: "death",
    page2: "life"
  }
};

class Page extends Component {
  render() {
    var pageData = pages[this.props.pageName];
    var goToPage = this.props.goToPage;

    function goToPage1() {
      goToPage(pageData.page1);
    }
    function goToPage2() {
      goToPage(pageData.page2);
    }

    var image = "";
    if (pageData.image) {
      image = (
        <div>
          <img className="main-page-image" src={pageData.image} />
        </div>
      );
    }
    var button1 = "";
    if (pageData.page1) {
      button1 = <button onClick={goToPage1}>{pageData.label1}</button>;
    }
    var button2 = "";
    if (pageData.page2) {
      button2 = <button onClick={goToPage2}>{pageData.label2}</button>;
    }

    return (
      <div>
        <p>{pageData.content}</p>
        {image}
        {button1}
        {button2}
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start"
    };

    this.goToPage = this.goToPage.bind(this);
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    return (
      <div className="App">
        <Page pageName={this.state.page} goToPage={this.goToPage} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
