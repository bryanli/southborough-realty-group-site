import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.leadAgentName;
      var profilepic= "images/"+this.props.data.leadAgentPic;
      var bio = this.props.data.aboutUs;
      var email = this.props.data.email;
      var wechat = this.props.data.wechat;
    }

    return (
      <section id="about">
      <div id="about-content" className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Lead Agent Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Us</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name} (Lead Agent)</span><br />
                           <span>Email : {email}</span><br />
                           <span>WeChat : {wechat}</span>
					   </p>
               </div>
               <div className="columns qr">
                  <img className="qr-pic" src={"images/QR.jpg"} alt="Lead Agent WeChat QR code" />
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default About;
