import './App.css';
import React from 'react';
import bgPhoto from './assets/bg/bgs.jpg';
import Header from './component/Header/Header';
import MainWindow from './component/MainWindow/Window';

const App = () => {
  return (
    <div className='app-back' style={{
      backgroundImage: `url(${bgPhoto})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>
      <div className='app-wrapper '>
        <a><Header /></a>
          <div className='app-wrapper-content'>
            <MainWindow />
          </div>
      </div>
    </div>
  );
}
export default App;
