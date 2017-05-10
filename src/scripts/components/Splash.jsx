import React from 'react';
import Backbone from 'backbone';


class Splash extends React.Component {

  handleSubmit = () => {
    Backbone.history
      .navigate(`/splash`, true);
  }

  componentDidMount() {
    $( "p" ).on( "mouseover", function() {
    $( this ).css( "color", "red" );
  });

}


  render() {
    return (
      <div>
      <div id="intro">
      <div className="introContent">
        <div className="sideNav">
          <div id="slidebottom" className="slide">
          <button><a href="#intro"><div className="box1"><img src="assets/michael_landing.jpg"/></div></a></button>
          <div className="inner"><h5>OUR</h5><h6>STORY</h6><div className="arrow-left1"></div></div>
         </div>
          <div id="slidebottom" className="slide">
          <button><a href="#about"><div className="box2"><img src="assets/michael_face.jpg"/></div></a></button>
          <div className="inner"><h5>ABOUT</h5><h6>MICHAEL</h6><div className="arrow-left2"></div></div>
          </div>
          <div id="slidebottom" className="slide">
          <button><a href="#consulting"><div className="box3"><img src="assets/michael_penHands.jpg"/></div></a></button>
          <div className="inner"><p>CONSULTING</p><div className="arrow-left3"></div></div>
          </div>
          <div id="slidebottom" className="slide">
          <button><a href="#speaking"><div className="box4"><img src="assets/michael_karateHands.jpg"/></div></a></button>
          <div className="inner"><p>SPEAKING</p><div className="arrow-left4"></div></div>
          </div>
        </div>
      <div id="slogan">
      <h1>PROCESS.<p></p>PEOPLE.<p></p>PROFIT.</h1>
      <div className="sloganLink"><a href="#/about">THE KEY TO MORE PROFITS</a></div>
      </div>
      </div>
      </div>
      <div id="about">
        <h1>WORLD<p></p>CLASS<p></p>EXPERIENCE</h1>
        <div className="aboutLink"><a href="#/about">READ ABOUT MICHAEL</a></div>

     </div>
       <div id="consulting">
       <div className="consultingContent">
       <div className="consultingText">
       <h1>IT'S TIME TO FINALLY BREAK THROUGH</h1>
       <div className="consultingLink"><a href="#/form">LEARN ABOUT CONSULTING</a></div>
       </div>
       </div>
       </div>
       <div id="speaking">
       <div className="speakingContent">
       <div className="speakingText">
       <h1>FROM GOOD<p></p>TO GREAT</h1>
       <div className="speakingLink"><a href="#/faq">READ ABOUT KEYNOTE</a></div>
       </div>
       </div>
       </div>
       </div>
      );
  }
}

export default Splash;
