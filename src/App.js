import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Blogs from './components/Blogs';
import About from './components/About';
import Contact from './components/Contact';
import BlogDetail from './components/BlogDetail';


function App() {
  return (
    <div >
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/blog/:id" component={BlogDetail} />
      <Route path="/contact" component={Contact} />

    </div>
  );
}

export default App;
