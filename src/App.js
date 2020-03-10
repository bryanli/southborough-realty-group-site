import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Announcements from './Components/Announcements';
import Rentals from './Components/Rentals';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      siteData: {}
    };
  }

  getSiteData(){
    $.ajax({
      url:'/siteData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({siteData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getSiteData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.siteData.main}/>
        <About data={this.state.siteData.main}/>
        <Rentals data={this.state.siteData.upcomingRentals}/>
        <Announcements data={this.state.siteData.announcements}/>
        <Contact data={this.state.siteData.main}/>
        <Footer data={this.state.siteData.main}/>
      </div>
    );
  }
}

export default App;
