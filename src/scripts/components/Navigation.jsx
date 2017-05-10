import React from 'react';
import Parse from 'parse';
import Backbone from 'backbone';
import Icon from './Icon';

class NavigationItem extends React.Component {

  render() {
    let className;
    if (this.props.current)
      className = 'active';

    return (
      <li className={className}>
        <a href={this.props.to}>
          {this.props.icon
            ? <Icon type={this.props.icon}/>
            : ''}
          {' '}
          {this.props.label}
        </a>
      </li>
    );
  }
}



class Navigation extends React.Component {
componentDidMount() {

$('#toggle').click(function() {
       $(this).toggleClass('active');
       $('#overlay').toggleClass('open');
      });

  }



  render() {
  return (
    <div>
    <nav className="laptopNav">
    <img src="assets/logo.jpg"/>
    <ul>
      <div className="topLinks">
      <li><a href="#">HOME</a></li>
      <li className="borderedNav"><a href="#/key">THE KEY TO MORE PROFITS</a></li>
      <li><a href="#/about">ABOUT MICHAEL</a></li>
      </div>
      <div className="bottomLinks">
      <li><a href="#/consulting">CONSULTING</a></li>
      <li className="borderedNav"><a href="#/speaking">SPEAKING</a></li>
      <li><a href="#/contact">CONTACT</a></li>
      </div>
      </ul>
    </nav>

    <nav className="laptopMobile">
    <img src="assets/logo.jpg"/>
    <div className="button_container" id="toggle"><span className="top"></span><span className="middle"></span><span className="bottom"></span></div>
          <div className="overlay" id="overlay">
            <nav className="overlay-menu">
              <ul className="mobileLinks">
              <li><a href="#">HOME</a></li>
              <li><a href="#/key">THE KEY TO MORE PROFITS</a></li>
              <li><a href="#/about">ABOUT MICHAEL</a></li>
              <li><a href="#/consulting">CONSULTING</a></li>
              <li><a href="#/speaking">SPEAKING</a></li>
              <li><a href="#/contact">CONTACT</a></li>
              </ul>
            </nav>
          </div>
    </nav>
  </div>
  );
    }
  }


  export default Navigation;
