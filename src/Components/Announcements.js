import React, { Component } from 'react';

class Announcements extends Component {
  render() {

    if(this.props.data){
      var announcements = this.props.data.announcements.map(function(announcements){
        return  <li key={announcements.date}>
            <blockquote>
               <p>{announcements.text}</p>
               <cite>{announcements.date}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="announcements">
      <div className="text-container">
         <div className="row">
            <div className="twelve columns flex-container">
                  <ul className="slides">
                      {announcements}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Announcements;
