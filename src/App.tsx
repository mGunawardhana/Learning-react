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
    <div className="App"><h1>Hello I'm mGunawardhana</h1></div>
  );
}}


//TODO meeka comment kare uda 6 weni line eke return karapu nisa
// export default App;
