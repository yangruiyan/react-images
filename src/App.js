import React from 'react';
import Gallery from './components/ImageGallery'
import Navbar from './components/Navbar'
import Zmage from './components/Zmage'
function App() {
  return (
    <div className="App">
    <Gallery perRow={2} count={4}/>  
    <Navbar/>
    <Zmage/>
    </div>
  );
}

export default App;
