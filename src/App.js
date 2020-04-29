import React, { Component } from "react";
import Header from "./Header";
import PollsList from "./PollsList";
import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  // GET DATA
  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://bharathpolls.herokuapp.com/polls/api/question/"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  postData() {
    var date = new Date();
    var datestring =
      date.getFullYear() +
      "-" +
      date.getMonth() +
      "-" +
      date.getDate() +
      "T" +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds() +
      "Z";

    // YYYY-MM-DDThh:mm[
    // 2019-11-01T04:32:03Z

    try {
      var data = JSON.stringify({
        question_text: "Which is your favorite TV show?",
        pub_date: datestring,
      });

      var xhr = new XMLHttpRequest();

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
        }
      });

      xhr.open(
        "POST",
        "https://cors-anywhere.herokuapp.com/https://bharathpolls.herokuapp.com/polls/api/question/"
      );
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("cache-control", "no-cache");
      // xhr.setRequestHeader("Access-Control-Allow-Origin","*")

      xhr.send(data);
    } catch (e) {
      console.log(e);
    }
  }

  updateData(id) {
    var date = new Date();
    var datestring =
      date.getFullYear() +
      "-" +
      date.getMonth() +
      "-" +
      date.getDate() +
      "T" +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds() +
      "Z";

    // YYYY-MM-DDThh:mm[
    // 2019-11-01T04:32:03Z

    try {
      var data = JSON.stringify({
        url: "http://bharathpolls.herokuapp.com/api/question/" + id + "/",
        question_text: "Which is your favourite JS framework?",
        pub_date: datestring,
      });

      var xhr = new XMLHttpRequest();

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
        }
      });

      xhr.open(
        "PUT",
        "https://cors-anywhere.herokuapp.com/https://bharathpolls.herokuapp.com/polls/api/question/" +
          id +
          "/"
      );
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("cache-control", "no-cache");
      // xhr.setRequestHeader("Access-Control-Allow-Origin","*")

      xhr.send(data);
    } catch (e) {
      console.log(e);
    }
  }

  deleteData(id) {
    try {
      var xhr = new XMLHttpRequest();

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
        }
      });

      xhr.open(
        "DELETE",
        "https://cors-anywhere.herokuapp.com/https://bharathpolls.herokuapp.com/polls/api/question/" +
          id +
          "/"
      );
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("cache-control", "no-cache");

      xhr.send();

      console.log(xhr);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    var { isLoaded } = this.state;

    if (!isLoaded) {
      return (
        <div
          className="spinner-border text-center"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      );
    } else {
      return (
        <Router>
          <div className="App">
            <NavBar />
            <Switch>
              <Route path="/" exact component={PollsList} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
            {/* <Header /> */}
            {/* <PollsList /> */}
            
          </div>
        </Router>
      );
    }
  }
}
export default App;
