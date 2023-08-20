import React, {useState} from 'react';
import CSS from './App.css'

function App({ emotion }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState(100);
  const [isMale, setIsMale] = useState(true);

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeAge = (event) => {
    setAge(event.target.value);
  };

  const toggleGender = () => {
    setIsMale(!isMale);
  }


  return (
    <div>
      <h1>My name is {name}</h1>
      <h2>I am {age} years old</h2>
      <h3>I am {isMale ? "Male" : "Female"}</h3>

      <input type="text" placeholder='Enter a new name' value={name} onChange={changeName} />
      <input type="text" placeholder='Enter your age' value={age} onChange={changeAge} />

      <button onClick={changeName}>Clear Name</button>
      <button onClick={changeAge}>Clear Age</button>
      <button onClick={toggleGender}>Toggle Gender</button>

      <h4>I am feeling {emotion}</h4>
    </div>
  );
}

export default App;