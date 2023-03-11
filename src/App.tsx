import React, { Component } from 'react';

//TODO one tanakin import karanawa image ekak
import logo from './logo.svg';
import './App.css';

//TODO class base  app return type ReactNode
export default class App extends Component {

  //TODO  danata console log ekak dala balanna gatte
  componentDidMount(): void {
    console.log("Hello React !");
  }


render(): React.ReactNode {
 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}}


//TODO meeka comment kare uda 6 weni line eke return karapu nisa
// export default App;
