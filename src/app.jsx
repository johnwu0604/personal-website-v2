import React from 'react';
import Header from './components/header.jsx'
import About from './components/about.jsx'
import Timeline from './components/timeline.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <About></About>
        <Timeline></Timeline>
      </div>
    );
  }
}

export default App;
