import React, {useState, useEffect, useRef} from 'react';
import './FilmPage.css';
import { FilmForm } from './FilmForm';

const PageMode = {
  LIST: 'list',
  ADD: 'add',
  EDIT: 'edit'
};

const Header = () => {
  return(
    <header>
      <h1>Список фильмов</h1>
      <h2>чтобы увидеть информацию о фильме, кликните на него</h2>
    </header>
  )
}

function showAppropriateFilmInformation(films, selectedFilmId, ref) {
  const clickedFilm = films.find(film => film.id === selectedFilmId);

  return (
    <div ref={ref} className="film-info">
      <h3>{clickedFilm.name}</h3>
      <p>Год выпуска: {clickedFilm.year}</p>
      <p>Режиссёр: {clickedFilm.producer}</p>
      <p>Рэйтинг: {clickedFilm.rating}</p>
      <p>Статус просмотра: {clickedFilm.status}</p>
    </div>
  )
}

function FilmPage() {
  const [films, setFilms] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFilmId, setSelectedFilmId] = useState(null);
  const [pageMode, setPageMode] = useState(PageMode.LIST);
  const ref = useRef();

  useEffect(() => {
    (async function() {
      try {
        const response = await fetch('http://localhost:3006/films');
        const films = await response.json();

        setFilms(films);
      } catch(e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })()
  }, []);

  useEffect(() => {
    const hideFilmInformation = (e) => {

      if(selectedFilmId && !ref.current.contains(e.target)) {
        setSelectedFilmId(null);
      }
    };
    window.addEventListener('click', hideFilmInformation);

    return () => window.removeEventListener('click', hideFilmInformation);
  }, [selectedFilmId]);

  async function addDataServer(newFilm) {
    const response = await fetch('http://localhost:3006/films', {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(newFilm)});
    const addedFilm  = await response.json();

    setFilms([...films, addedFilm]);
  }

  async function updateDataServer(newFields) {
    const response = await fetch(`http://localhost:3006/films/${selectedFilmId}`, {method: 'PUT', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(newFields)});
    const updatedFilm  = await response.json();

    setFilms([...films.slice(0, selectedFilmId), updatedFilm , ...films.slice(selectedFilmId + 1)]);
  }

  if(isLoading) {
    return (
      <>
        <Header />
        <span>...Грузим фильмы</span>
      </>
    )
  }

  if(error) {
    return (
      <>
        <Header />
        <span>Что то пошло не так :(</span>
      </>
    )
  }

  if(pageMode !== PageMode.LIST) {
    return (
      <>
        {FilmForm(
          selectedFilmId ? films.find(film => film.id === selectedFilmId) : '',
          pageMode === PageMode.ADD ?
            addDataServer :
            updateDataServer,
          () => setPageMode(PageMode.LIST),
          films,
          setFilms,
          selectedFilmId
        )}
      </>
    )
  }

  return (
    <>
      <Header />
      <button onClick = {(e) => {
        setSelectedFilmId(null);
        setPageMode(PageMode.ADD);
      }}>
        Добавить
      </button>
      {films.length ?
        <ol>
          {films.map((film => (
            <li key={film.id}>
              <span onClick={(e) => setSelectedFilmId(film.id)}>{film.name}</span>
              <button
                onClick = {(e) => {
                  e.stopPropagation();
                  setSelectedFilmId(film.id);
                  setPageMode(PageMode.EDIT);
                }}>
                Изменить
              </button>
              <button
                onClick = {async (e) => {
                  e.stopPropagation();

                  if(film.id === selectedFilmId) {
                    setSelectedFilmId(null);
                  }

                  const response = await fetch(`http://localhost:3006/films/${film.id}`, {method: 'DELETE'});

                  setFilms(films.filter(f => f.id !== film.id));
                }}>
                Удалить
              </button>
            </li>
          )))}
        </ol> :
        <div>На данный момент фильмов в списке нет!</div>
      }
      {selectedFilmId && showAppropriateFilmInformation(films, selectedFilmId, ref)}
    </>
  );
}

export default FilmPage;
