import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import TemporaryDrawer from './components/drawer/Drawer';

function App() {
    return (
        <div className="App">
            <TemporaryDrawer/>
            <Home/>
        </div>
    );
}

// export default withSplashScreen(App);
export default App;
