import Auth0Lock from 'auth0-lock';
import { browserHistory } from 'react-router';

export default class AuthService {
  constructor(clientId, domain) {
    // configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: 'http://localhost:5000/login',
        responseType: 'token'
      }
    });
    // add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this));
    // bind login functions to keep this context
    this.login = this.login.bind(this)
  }

  _doAuthentication(authResult) {
    // saves the user token
    this.setToken(authResult.token);
    // navigate to the home route
    browserHistory.replace('/home')
  }

  login() {
    // call the show method to display the widget
    this.lock.show();
  }

  loggedIn() {
    // check if there is a saved token and it's still valid
    return !!this.getToken();
  }

  setToken(idToken) {
    // saves user token to localStorage
    localStorage.setItem('id_token', idToken);
  }

  getToken() {
    // retrieves user token from localStorage
    localStorage.getItem('id_token');
  }

  logout() {
    // clear user token and profile from localStorage
    localStorage.removeItem('id_token');
  }
}
