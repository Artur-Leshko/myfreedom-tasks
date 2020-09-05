import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import './App.css';

const DogImage = ({ species, dogBreed }) => {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function() {
      try{
        const response = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images`);
        const newDogImage = await response.json();
        const random = Math.floor(Math.random()*3);

        setDogImage(newDogImage.message[random]);
      } catch(e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  },[dogBreed]);

  if(loading) {
    return "...Loading doggys...";
  }

  if(error) {
    return "Something broke...";
  }

  return (
    <>
      <img src={dogImage} width='300' height='250' alt='dog'></img>
      {species.length ?
      <>
        <div>Species of {dogBreed} :</div>
        <ol>
          {species.map(s => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </> :
      <div>No species!</div>}
    </>
  )
}

function App() {
  const [dogs, setDogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    (async function() {
      try{
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const dogs = await response.json();

        setDogs(dogs.message);
      } catch(e) {
        setError(e);
      } finally{
        setLoading(false);
      }
    })();
  },[]);

  if(loading) {
    return "...Loading doggys...";
  }

  if(error) {
    return "Something broke...";
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/random'>
          <button>
            <Link to='/breeds'>All breeds</Link>
          </button>
        </Route>
        <Route exact path='/breeds'>
          <button onClick={ async () => {
            try {
              setLoading(true);
              const response = await fetch('https://dog.ceo/api/breeds/image/random');
              const randomDogIamge = await response.json();

              setRandomImage(randomDogIamge.message);
            } catch(e) {
              setError(e);
            } finally {
              setLoading(false);
            }
          }}>
            <Link to='/random'>Random image of the dog</Link>
          </button>
        </Route>
      </Switch>

      <Switch>
        <Route exact path='/'>
          <Redirect to='/breeds' />
        </Route>
        <Route exact path='/breeds'>
            {dogs ?
              <ul>
                {Object.keys(dogs).map((dog) => (
                  <li key={dog}>
                    <Link to={`/breeds/${dog}`}>{dog}</Link>
                  </li>
                ))}
              </ul> :
              null
            }
        </Route>
        <Route exact path='/breeds/:dogBreed'>
            {({ match: { params: { dogBreed } } }) => <DogImage species={dogs[dogBreed]} dogBreed={dogBreed}/>}
        </Route>
        <Route exact path='/random'>
            <img src={randomImage} width='300' height='250' alt='dog'></img>
        </Route>
        <Route>
          <span>Something went wrong:(</span>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
