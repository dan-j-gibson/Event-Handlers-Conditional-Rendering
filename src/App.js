import React from 'react';
import HelloWorld from './HelloWorld'
import Bomb from './Bomb';
import RouletteGun from './RouletteGun';
import Accordion from './accordion/Accordion'
import './App.css'

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

function App() {
  return (
    <>
      <h2>Hello World!</h2>
      <HelloWorld />
        <br></br>
        <h2>Bomb</h2>
       <Bomb />
       <br></br>
       <h2>Roulette Gun</h2>
       <RouletteGun />
       <br></br>
       <h2>Accordion</h2>
        <Accordion sections={sections} />
    </>
  );
}

export default App;
