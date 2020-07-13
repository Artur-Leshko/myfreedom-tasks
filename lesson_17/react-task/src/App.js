import React from 'react';
import Form from './Application/Form';
import Settings from './Application/Settings';
import PetsList from './Application/PetsList';

function App() {
  const items = [
    {id:1, name: 'Шарик', owner: 'Артур', description: 'какое то описание ага', date: "2019-01-01 10:30"},
    {id:2, name: 'Бобик', owner: 'Наташа', description: 'какое то описание ага', date: "2019-01-01 10:30"},
    {id:3, name: 'Мурзик', owner: 'Миша', description: 'какое то описание ага', date: "2019-01-01 10:30"},
    {id:4, name: 'Люси', owner: 'Паша', description: 'какое то описание ага', date: "2019-01-01 10:30"},
    {id:5, name: 'Жорик', owner: 'Саша', description: 'какое то описание ага', date: "2019-01-01 10:30"}
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
