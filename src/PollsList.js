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
    	fetch("https://cors-anywhere.herokuapp.com/https://bharathpolls.herokuapp.com/polls/api/question/")
    	.then(res => res.json())
    	.then(json => {
          this.setState({
            isLoaded:true,
            items:json,
          })
    	});
  	}

	render() {
		
	  	return (<ul>
              {this.state.items.map(item => (
                
                <li key={item.url} className="card py-2 m-2">
                    {item.question_text} - ({item.pub_date}) 
                </li>

              ))}
        </ul> )
	}

}

export default PollsList;