import MyComponent, { MyProps } from './components/MyComponent';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import Food from './components/Food';
import { useState } from 'react';
import Alert from './components/Alert';

//changed from implicit return style to explicit
const App = () => {
  // Oppg6
  const food = ['Pizza: 10000$', 'Hamburger: 100$', 'Coke: 10$', 'Janelle: 1$'];

  // Oppg8
  // const handleClick = () => {
  //   console.log('Clicked!');
  // };

  const handleClick = () => {
    console.log(inputValue);
  };

  // Oppg11

  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  //   console.log('Changed');
  // };

  const [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <p>Read the README.md to see the tasks</p>
      <MyComponent title="Oppgave 3: It works!" />
      <Wrapper>
        <h2> Oppgave 4: It Works!</h2>
      </Wrapper>
      <Wrapper>
        <Title title="Test" />
      </Wrapper>
      {
        // oppg6
        /* <ul>
        {food.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */
      }
      <Food food={food} />

      {/* <button onClick={handleClick}>Big Red Button</button>
      <input value={inputValue} onChange={handleChange}></input> */}

      <Alert inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
};

export default App;
