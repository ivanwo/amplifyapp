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
          AAAAAHHHHHHHHH
        </p>
      <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
