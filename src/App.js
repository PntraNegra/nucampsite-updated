import React from 'react';
import CampsiteLists from './features/campsites/CampsitesList';

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CampsiteLists />
      <Footer />
    </div>
  );
}
export default App;
