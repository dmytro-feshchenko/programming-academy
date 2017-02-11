import React from 'react';
import Landing from './Landing';
import Home from './Home';
import LoggedIn from './LoggedIn';

class App extends React.Component {
  componentWillMount () {
    this.setState({ idToken: null });
  }

  render () {
    if (this.state.idToken) {
      return (<LoggedIn idToken={this.state.idToken} />);
    } else {
      // return (<Landing />);
      return (<Home />);
    }
  }
}

export default App;
