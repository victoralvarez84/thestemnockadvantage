import React from 'react';
import Parse from 'parse';
import Backbone from 'backbone';

export default class key extends React.Component {

componentDidMount() {
  $( ".cross" ).hide();
  $( ".menu" ).hide();
  $( ".hamburger" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  $( ".hamburger" ).hide();
  $( ".cross" ).show();
  });
  });

  $( ".cross" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  $( ".cross" ).hide();
  $( ".hamburger" ).show();
  });
  });

}

render () {
    return (
      <div id="infoBody">
      <div className="page">
      <div id="introPage2">
      <div className="introContent">
      <div className="videoContainer">
      <video controls>
      <source src="assets/StemnockWebVideo1.mp4" type="video/mp4"/>
      <source src="assets/StemnockWebVideo1.mov" type="video/mov"/>
      </video>
      </div>
      </div>
      </div>
      <div className="introPage2Info">
      <h1>Increase Your Profit Potential</h1>
      <div className="introPage2InfoContainer">
      <div className="introPage2InfoContainerLeft">
      <h5>
      <div className="redSpanTop">Where are you in your journey to profitability?</div>

      Oftentimes, Michael already knows the answer: you <strong>are too busy

      putting out fires</strong> and <strong>constantly trying to prop up operations</strong> to

      actually stop and accurately evaluate the profitable fix. So, you

      work through the current situation and move on to the next fire at

      hand. <strong>That’s exactly what Michael helps you fix! Those things

      that eat away at your bottom line!</strong>

      <br></br>
      <br></br>

      <strong>Stemnock and Associates</strong> is Michael’s no-nonsense, best-in-

      class consultancy with over <strong>30 years of experience.</strong> At Stemnock

      & Associates, our <strong>knowledge-based assistance in optimizing your

      business operations</strong> will hit the <strong>bottom line!</strong>

      <br></br>
      <br></br>

      Michael knows from <strong>first-hand experience</strong> that to get from

      being a Good company to a Great company with <strong>year-after-year

      increases</strong> in productivity, market share, and profitability, you have

      to be a leader. You have to have a <strong>vision, amazing communication </strong>

      with your team, and be driven towards the mission of service which

      goes right to your bottom line.

      <br></br>
      <br></br>

      Time after time, it is <strong>operational leadership</strong> which enables a team

      to move towards the common end result and goal. It must be

      <strong> clearly defined,</strong> effectively communicated, written down, <strong>projected

      financially,</strong> and <strong>measured constantly</strong> so these results can be

      achieved.

      <div id="BulletTop">
      THE KEY ELEMENTS ARE:
      <ul>
      <li>Vison,</li>
      <li>Passion,</li>
      <li>Communication,</li>
      <li>Marketing,</li>
      <li>Process management,</li>
      <li>Leadership,</li>
      <li>Financial forecasting,</li>
      <li>Cash Management</li>
      <li>Constant Planning</li>
      </ul>
      </div>

      <div className="redSpanBottom">“Any business, of any size can use the unique

      mindsets, principles and a process to uncover

      what Michael calls;

      <p>'The Problem-Discovery Process'.</p>

      “It implements methods for rapid

      repair, and it will show up in your profitability!”

      <div className="MichaelRed"><i>Michael Stemnock</i></div></div>

      <div id="BulletBottom">
      HERE'S THE BOTTOM LINE TO INCREASING YOUR PROFITS:

      <ul>

      <li>Stick to your core business</li>
      <li>Market the hell out of your proposition</li>
      <li>Know your numbers daily</li>
      <li>Forecast</li>
      <li>Control your cash</li>

      </ul>


      <strong>The trick in maximizing your profits is striking the right balance
      between your people and your
      processes.</strong>

      </div>


      </h5>

      </div>

      <div className="introPage2InfoContainerRight">
      <h2>
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

      </h2>


      <h4>
      <strong>Jay Levinson,</strong> World Known
      author of Guerilla Marketing:
      Easy and Inexpensive
      Strategies for Making Big
      Profits from your Small or Big
      Business and President of
      Guerilla Marketing
      </h4>


      <h5>"When companies wait to make change or take action,
      mediocrity sets in and erodes your bottom line!"</h5>


      <h6>
      Get your economic picture
      in focus. Find new
      opportunities as well as the leaks that
      are affecting your bottom line
      performance.
      <br></br>
      <br></br>
      <a href="#/add">Contact Michael</a> today and
      he will help you navigate your
      business to excellence.
      </h6>

      <div className="introContactLink"><a href="#/add">CONTACT US NOW</a></div>
      </div>
      </div>
      </div>
      </div>
      </div>







);
}
}

export default key;
