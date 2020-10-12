import React from 'react';
import './App.css';
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="auth.png" className="App-logo" alt="logo" />
        <h1>We have added auth!</h1>
        <p>
          Whoa buddy, lots of work to be done here!
        </p>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
