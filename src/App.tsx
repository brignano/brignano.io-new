import React from 'react';
import './App.css';
import withSplashScreen from './components/Splash';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        mock home page
      </header>
    </div>
  );
}

export default withSplashScreen(App);
