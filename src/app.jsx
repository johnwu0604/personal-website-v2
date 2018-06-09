import React from 'react';
import Header from './components/header.jsx'
import About from './components/about.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <About></About>
      </div>
    );
  }
}

export default App;
