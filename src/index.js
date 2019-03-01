import React, { Component } from "react";
import ReactDOM from "react-dom";
import { pageInfo } from './pages.js';

import "./styles.css";

//Information for the pages to be displayed
//Each page is an object
//Contains:
//  Links to pages
//  Content
//  Input
//    select
//    text
//  Values
//  Lables
//The page rendering stuff

class Page extends Component {
  render() {
    var pages = pageInfo(this.props.userData);
    var pageData = pages[this.props.pageName];
    if (!pageData) {
      throw new Error("Eek! No page here!");
    }

    var goToPage = this.props.goToPage;
    var saveUserData = this.props.saveUserData;

    // Go to page
    function goToPage1() {
      goToPage(pageData.page1);
    }
    function goToPage2() {
      goToPage(pageData.page2);
    }
    function handleChange(event) {
      saveUserData(pageData.input.saveKey, event.target.value);
    }

    // setting up the image data for each page..
    var image = "";
    if (pageData.image) {
      image = (
        <div>
          <img className="main-page-image" src={pageData.image} />
        </div>
      );
    }

    // creating a button per page info.
    // Button 1
    var button1 = "";
    if (pageData.page1) {
      button1 = <button onClick={goToPage1} className="button">{pageData.label1}</button>;
    }
    // Button 2
    var button2 = "";
    if (pageData.page2) {
      button2 = <button onClick={goToPage2} className="button">{pageData.label2}</button>;
    }
    // Input data
    var input = "";
    if (pageData.input) {
      var inputData = pageData.input;
      // Creating a selection input
      if (inputData.type === "select") {
        input = (
          <p>
            <select
              value={this.props.userData[inputData.saveKey]}
              onChange={handleChange}
            >
              {inputData.values.map(v => (
                <option value={v}>{v}</option>
              ))}
            </select>
          </p>
        );
      //creating a text input 
      } else if (inputData.type === "text") {
        input = (
          <p>
            <input
              className="textInput"
              type="text"
              value={this.props.userData[inputData.saveKey]}
              onChange={handleChange}
            />
          </p>
        );
      }
    }
    //end input info..
    //Rendering the page information
    return (
      <div>
        <p className="text">{pageData.content}</p>
        {input}
        {image}
        <div className="buttons">
          {button1}
          {button2}
        </div>
      </div>
    );
  }
}

//Main app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start",
      userData: {}
    };

    this.goToPage = this.goToPage.bind(this);
    this.saveUserData = this.saveUserData.bind(this);
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  saveUserData(key, value) {
    function updateState(state) {
      var newState = { userData: { ...state.userData, [key]: value } };
      return newState;
    }
    this.setState(updateState);
  }
  //Rendering the main app and passing the data into the page object.
  //Wahoo
  render() {
    return (
      <div className="App">
        <Page
          pageName={this.state.page}
          goToPage={this.goToPage}
          userData={this.state.userData}
          saveUserData={this.saveUserData}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
