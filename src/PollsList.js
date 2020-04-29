import React, { Component } from "react";

class PollsList extends React.Component {
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
    return (
      <>
        <ul>
          {this.state.items.map((item) => (
            <li key={item.url} className="card py-2 m-2">
              {item.question_text} - ({item.pub_date})
            </li>
          ))}
        </ul>

        <button
          className="btn btn-primary"
          style={{ margin: "1%" }}
          onClick={() => this.postData()}
        >
          Post
        </button>
        <br />
        <button
          className="btn btn-info"
          style={{ margin: "1%" }}
          onClick={() => this.updateData(9)}
        >
          Update
        </button>
        <button
          className="btn btn-danger"
          style={{ margin: "1%" }}
          onClick={() => this.deleteData(11)}
        >
          Delete
        </button>
      </>
    );
  }
}

export default PollsList;
