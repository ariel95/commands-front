import React from 'react';

//Boostrap css
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';



function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
