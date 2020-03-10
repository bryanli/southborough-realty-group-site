import React, { Component } from 'react';

class Contact extends Component {
    render() {

        if(this.props.data){
            var name = this.props.data.leadAgentName;
            var phone= this.props.data.phone;
            var email = this.props.data.email;
            var wechat = this.props.data.wechat
            var profilepic= "images/"+this.props.data.leadAgentPic;
        }

        return (
          <section id="contact">

            <div className="row section-head">
              <div className="two columns header-col">
                <h1><span>Get In Touch.</span></h1>
              </div>
              <div className="ten columns">
                <p className="lead">Feel free to send us a message and our agents will get back to you as soon as they can.</p>
              </div>
            </div>

            <div className="row">
              <div className="nine columns">
                <form action="" method="post" id="contactForm" name="contactForm">
                  <fieldset>
                    <div>
                      <label htmlFor="contactName">Name <span className="required">*</span></label>
                      <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                    </div>
                    <div>
                      <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                      <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                    </div>
                    <div>
                      <label htmlFor="contactSubject">Subject</label>
                      <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                    </div>
                    <div>
                      <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                      <textarea cols="50" rows="10" id="contactMessage" name="contactMessage"></textarea>
                    </div>
                    <div>
                      <button className="submit">Submit</button>
                      <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                      </span>
                    </div>
                  </fieldset>
                </form>

                <div id="message-warning"> Error boy</div>
                <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                </div>
              </div>

              <aside className="three columns footer-widgets">
                <div className="widget widget_contact">
                  <h4>Agent Contact Info</h4>
                  <img src={profilepic} alt="Lead Agent Profile Pic" width="150" height="150" />
                  <p className="address">
                    {name}<br />
                    <span>Phone: {phone}</span> <br />
                    <span>Email: {email}</span> <br />
                    <span>WeChat: {wechat}</span>
                  </p>
                </div>
              </aside>        
            </div>
          </section>
        );
    }
}

export default Contact;
