import React, { Component } from "react";
import Header from './Header.js'
import PollsList from './PollsList.js'
import NavBar from './NavBar.js'

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
    fetch("https://cors-anywhere.herokuapp.com/https://bharathpolls.herokuapp.com/polls/api/question/")
    .then(res => res.json())
    .then(json => {
          this.setState({
            isLoaded:true,
            items:json,
          })
    });
  }


  postData(){
  
    var date = new Date();
    var datestring = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+"T"+ 
                     date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "Z"
      
    // YYYY-MM-DDThh:mm[
    // 2019-11-01T04:32:03Z
  
    try{
            
        var data = JSON.stringify({
                          "question_text": "Which is your favorite TV show?",
                          "pub_date": datestring
        });

        var xhr = new XMLHttpRequest();
        
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            console.log(this.responseText);
          }
        });

        xhr.open("POST", "https://cors-anywhere.herokuapp.com/https://bharathpolls.herokuapp.com/polls/api/question/");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");
        // xhr.setRequestHeader("Access-Control-Allow-Origin","*")
        
        xhr.send(data);

    }
    catch(e){
      console.log(e)
    }
    
  }

  updateData(id){
  
    var date = new Date();
    var datestring = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+"T"+ 
                     date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "Z"
      
    // YYYY-MM-DDThh:mm[
    // 2019-11-01T04:32:03Z
  
    try{
            
        var data = JSON.stringify({
            "url": "http://bharathpolls.herokuapp.com/api/question/"+id+"/",
            "question_text": "Which is your favourite JS framework?",
            "pub_date": datestring
        });

        var xhr = new XMLHttpRequest();
        
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            console.log(this.responseText);
          }
        });

        xhr.open("PUT", "https://cors-anywhere.herokuapp.com/https://bharathpolls.herokuapp.com/polls/api/question/"+id+"/");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");
        // xhr.setRequestHeader("Access-Control-Allow-Origin","*")
        
        xhr.send(data);

    }
    catch(e){
      console.log(e)
    }
    
  }

  deleteData(id){
  
    try{

        var xhr = new XMLHttpRequest();
        
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            console.log(this.responseText);
          }
        });

        xhr.open("DELETE", "https://cors-anywhere.herokuapp.com/https://bharathpolls.herokuapp.com/polls/api/question/"+id+"/");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");
        
        xhr.send();
        
        console.log(xhr);


    }
    catch(e){
      console.log(e)
    }
    
  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading....</div>
    }
    else{
      return (
        <div className="App">
            
            <NavBar />
            
            <Header />
            
            <PollsList /> 

            <button className="btn btn-primary"  style={{margin:'1%'}} onClick={ () => this.postData() }>Post</button> <br />
            <button className="btn btn-info" style={{margin:'1%'}} onClick={ () => this.updateData(9) }>Update</button> 
            <button className="btn btn-danger" style={{margin:'1%'}} onClick={ () => this.deleteData(11) }>Delete</button> 
        </div>
        )

    }

  }
}

export default App;
