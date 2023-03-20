import React, { FC } from 'react';
import './sass/index.scss';
import MobileNavBar from './components/MobileNavBar/MobileNavBar'; // Corrected import statement

const App: FC = () => {
  return (
    <>
      <div className="App">
        <h1>home page</h1>
      </div>
      <div className="tests">
        <p>Text colors</p>
      </div>
      <MobileNavBar />
    </>
  );
};

export default App;
