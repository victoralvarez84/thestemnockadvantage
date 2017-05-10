import React from 'react';
import Parse from 'parse';
import Backbone from 'backbone';

export default class contact extends React.Component {
render () {
    return (

      <div>
        <div id="contact">
        <form action="https://formspree.io/thestemnockadvantage@gmail.com"
        method="POST">
        <div className="formContainer">
        <strong>Contact and Request Information Form</strong>
        <h5>Get started with Michael today</h5>
        <br></br>
        <p>Fields marked with an <i>*</i> are required</p>
        <p>Your First Name<i>*</i></p>
        <input type="text" name="first_name" className="input"></input>
        <p>Your Last Name<i>*</i></p>
        <input type="text" name="last_name" className="input"></input>
        <p>Your Email<i>*</i></p>
        <input type="email" name="_replyto" className="input"></input>
        <p>Your Phone #<i>*</i></p>
        <input type="number" name="number" className="input"></input>
        <p>Your Business or Organization<i>*</i></p>
        <input type="text" name="business" className="input"></input>
        <p>Interested in Consulting, Keynote, or both?<i>*</i></p>
        <input type="text" name="interested" className="input"></input>
        <p>Send a message to Michael</p>
        <textarea  name="message" maxlength="1000" cols="50" rows="6" className="inputMessage"></textarea>
        </div>
        <input type="submit" value="SUBMIT" className="submit"></input>
    </form>




  <div className="contactRight">
  <div className="contactRightTop"></div>

  <div className="contactBottomRight">
  <p>“Michael is one
  of the foremost
  business experts.
  No one better
  knows how to
  assist in providing
  the necessary tools
  to achieve great
  results and increase
  your profits.”</p>
  <br></br>
  <div className="contactBottomRightBottom">
  <h5><strong>Jay Levinson,</strong> author
  Guerilla Marketing: Easy and
  Inexpensive Strategies for
  Making Big Profits from Your
  Small Business and President
  of Guerilla Marketing</h5>
  </div>
  </div>
  </div>
  </div>
  </div>



    );
  }
}

export default contact;
