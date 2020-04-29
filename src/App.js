import React from "react";
import PollsList from "./PollsList";
import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact";
import ItemDetail from "./ItemDetail";
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

  render() {
    var { isLoaded } = this.state;

    if (!isLoaded) {
      return (
        <div
          className="spinner-border text-center"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else {
      return (
        <Router>
          <div className="App">
            <NavBar />
            <Switch>
              <Route path="/" exact component={PollsList} />
              <Route path="/about" exact component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/about/:id" component={ItemDetail} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
}
export default App;
