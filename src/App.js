import React from 'react';
import Gallery from './components/ImageGallery'
import Navbar from './components/Navbar'
// import Zmage from './components/Zmage'
import Post from './components/Post'
import PostList from './components/PostList'
function App() {
  return (
    <div className="App">
    <Post />
    <PostList perRow={5} count={5}/>
    <Gallery perRow={2} count={4}/>  
    <Navbar/>
    {/* <Zmage/> */}
    
    </div>
  );
}

export default App;
