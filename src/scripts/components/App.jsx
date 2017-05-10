import React from 'react';
import Parse from 'parse';
import Navigation from './Navigation';
import Splash from './Splash';
import Icon from './Icon';
import About from './about';
import Key from './key';
import Consulting from './consulting';
import Speaking from './speaking';
import Contact from './contact';






class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: Parse.User.current(),
      currentRoute: props.router.current
    }
  }

  componentWillMount() {
    this.props
      .router
      .on('route', this.onRoute);
  }

  componentWillUnmount() {
    this.props
      .router
      .off('route', this.onRoute);
  }

  onRoute = () => {
    $('.navbar-toggle').click();
    this.setState({
      currentRoute: this.props.router.current
    });
  }

  render() {
    let currentView;

    console.log(this.state);

    switch (this.state.currentRoute) {
      case 'splash' :
        currentView = <Splash/>;
        break;
        case 'about' :
        currentView = <About/>;
        break;
        case 'key' :
        currentView = <Key/>;
        break;
        case 'consulting' :
        currentView = <Consulting/>;
        break;
        case 'speaking' :
        currentView = <Speaking/>;
        break;
        case 'contact' :
        currentView = <Contact/>;
        break;
        default :
      currentView = <Splash/>;
    }

    return (
      <div>
        <Navigation current={this.state.currentRoute} currentUser={this.state.currentUser}/>
        {currentView}
      </div>
    );
  }
}

export default App;
