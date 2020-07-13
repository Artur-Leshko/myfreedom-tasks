import React from 'react';
import Form from './Application/Form';
import Settings from './Application/Settings';
import PetsList from './Application/PetsList';

function App() {
  const object = [
    {id: 1, name: 'Шарик', owner: 'Артур', description: 'что-то тут ляля', date: Date.now()},
    {id: 2, name: 'Бобик', owner: 'Женя', description: 'что-то тут ляля', date: Date.now()},
    {id: 3, name: 'Люся', owner: 'Саша', description: 'что-то тут ляля', date: Date.now()},
    {id: 4, name: 'Мурзик', owner: 'Миша', description: 'что-то тут ляля', date: Date.now()}
  ];

  return (
    <div className="container">
      <Form />
    </div>
  )
}

export default App;