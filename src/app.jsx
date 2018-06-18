import React from 'react';
import Header from './components/header.jsx'
import About from './components/about.jsx'
import Timeline from './components/timeline.jsx'
import Recipes from './components/recipes.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <About></About>
        <Timeline></Timeline>
        <Recipes></Recipes>
      </div>
    );
  }
}

export default App;
