import React from 'react';
import Parse from 'parse';
import Backbone from 'backbone';

export default class speaking extends React.Component {
render () {
    return (
      <div>
      <div className="speakingPage">
      <div className="video"></div>
      <h1>Get Ready! <br></br>Invigorate Your Team and Your Profits.</h1>
      <section className="speakingBottom">
      <div className="speakingBottomLeft">
      <h2>Too busy running your business to stop and evaluate where
      you're losing some of your bottom line product?</h2>
      <p>In his keynote speech on <strong>how to change and become a great company
           with great profits,</strong> master money mechanic
           Michael Stemnock <strong>guides</strong> you with humor and no-nonsense delivery
           on how to identify and <strong>stop inefficiencies</strong> that sap your team’s
           effectiveness, customer satisfaction and profitability.</p>
      <br></br>
      <p>If your processes are <strong>old or tired,</strong> if <strong>your people aren’t fresh</strong> with
           new ideas and tools, <strong>profits will suffer</strong> and your company will never
           achieve it’s true earnings potential.</p>
      <div className="theKey">The key is to <strong>diagnose the processes,</strong> have <strong>the right

           people in the right positions,</strong> to manage them, and

           then sit back and watch how your company achieves

           greatness and your bottom line goes UP!
      </div>
      <div id="Bullet">
      <p>SUCCESSFUL ORGANIZATIONS DO THE FOLLOWING:</p>
      <ul>
      <li>Make distinctive impacts in the market</li>
      <li>Deliver superior performance</li>
      <li>You Constantly measure everything</li>
      </ul>
      </div>
      <p>So, in your never-ending journey from <strong>good to great</strong> is to be clear

             on the <strong>right principles</strong> and to <strong>rigorously implement them...and

            meticulously assessing your results.</strong></p>

      <br></br>

      <p><strong>Performance</strong> primarily <strong>means financial results.</strong> Big does not equal

           great, and great does not equal big!</p>

      <br></br>

      <p><strong>Your team must have passion and go to the ends of the earth

           because of it.</strong></p>

      <br></br>

      <p>Building <strong>prosperous companies</strong> is not any single defining action,

           one grand program, killer innovation, solitary lucky break or miracle

           moment. Rather, the process <strong>requires relentlessly focused

           leadership,</strong> building momentum <strong>to a point of breakthrough</strong> -- and

           beyond.</p>

           <h6>And don’t think Michael’s keynote is just for the big guys -- it’s not!</h6>

           <p>No matter your company’s size, your team will walk away

             with <strong>improvements that will hit your bottom line</strong> and change your

             focus.</p>
           </div>


      <div className="speakingBottomRight">
        <h2>
            “Michael is an

            eloquent speaker

            who knows how to

            capture his audience

            by tailoring his

            presentation to their

            specific needs!

            His ability to capture

            our Real estate

            investment group

            was outstanding!”
            </h2>
            <h6><strong>Charles Pupich,</strong> Board of
            Director American Congress of
            Real Estate</h6>
            <h2>
            “Slam dunk! Without

            exception, every

            person who attended

            your workshop said

            it was well worth

            their time. It has

            offered everyone a

            new perspective on

            how they can change

            their business

            model to greatness

            and build it to last

            and achieve higher

            profitability.”
            </h2>
            <h6><strong>Julie Lopresti,</strong> Senior VP,
            General Electric Dealer
            Financial Services</h6>

          <h5>
          Take action to steer your
          business to excellence: <a href="#/add">book
          Michael</a> for a keynote or bring him on site
          to rejuvenate your team and your profits!</h5>
        <div className="speakingPage2Link"><a href="#/add">CONTACT MICHAEL NOW</a>
        </div>
        </div>
      </section>
      </div>
      </div>
    );
  }
}

export default speaking;
