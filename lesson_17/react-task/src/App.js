import React from 'react';
import Form from './Application/Form';
import Settings from './Application/Settings';
import PetsList from './Application/PetsList';

function App() {
  const items = [
    {id:1, name: 'Шарик', owner: 'Артур', description: 'какое то описание ага', date: Date.now()},
    {id:2, name: 'Бобик', owner: 'Наташа', description: 'какое то описание ага', date: Date.now()},
    {id:3, name: 'Мурзик', owner: 'Миша', description: 'какое то описание ага', date: Date.now()},
    {id:4, name: 'Люси', owner: 'Паша', description: 'какое то описание ага', date: Date.now()},
    {id:5, name: 'Жорик', owner: 'Саша', description: 'какое то описание ага', date: Date.now()}
  ];

  return (
    <div className="container">
      <Form />
      <Settings />
      <PetsList items={items} />
    </div>
  );
}

export default App;
