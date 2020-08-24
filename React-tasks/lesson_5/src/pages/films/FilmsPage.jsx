import React from 'react';
import { FilmForm } from './FilmForm';
import { Button } from '../../common/components/Button';
import { getFilms, addFilm, editFilm, deleteFilm } from './server';
import { add, update, remove } from '../../common/utils/state';

const FilmsPageMode = {
    ADD: 'films_add',
    EDIT: 'films_edit',
    LIST: 'films_list'
}

const Header = () => (
    <header>
        <h1>Список фильмов</h1>
        <h2>для более подробной информации о фильме кликните на него</h2>
    </header>
);

export class FilmsPage extends React.Component {
    state = {
        isLoading: true,
        error: null,
        films: null,
        selectedFilmID: null,
        mode: FilmsPageMode.LIST,
        filmsToShow: 'Все фильмы'
    }

    makeRequest = async (requestFunction) => {
        this.setState(() => ({ isLoading: true }));

        try {
            await requestFunction();
        } catch(error) {
            this.setState(() => ({ error }));
        } finally {
            this.setState(() => ({ isLoading: false }));
        }
    }

    componentDidMount() {
        this.makeRequest(async () => {
            const films = await getFilms();

            this.setState(() => ({ films }));
        });
    }

    addFilm = (filmToAdd) => {
        this.setState({ mode: FilmsPageMode.LIST });

        this.makeRequest(async() => {
            const addedFilm = await addFilm(filmToAdd);

            this.setState(({ films }) => ({
                films: add(films, addedFilm)
            }));
        });
    }

    updateFilm = (filmFields) => {
        this.setState({ mode: FilmsPageMode.LIST });

        this.makeRequest(async () => {
            const updatedFilm = await editFilm(this.state.selectedFilmID, filmFields);

            this.setState(({ films }) => ({
                films: update(films, this.state.selectedFilmID, updatedFilm),
                selectedFilmID: null,
            }));
        });
    }

    showClickedFilmInformation = () => {
        const clickedFilm = this.state.films.find((film) => film.id === this.state.selectedFilmID);

        return(
            <div className="film-info">
                <h3>{clickedFilm.name}</h3>
                <p>Год выпуска: {clickedFilm.year}</p>
                <p>Режиссёр: {clickedFilm.producer}</p>
                <p>Рэйтинг: {clickedFilm.rating}</p>
                <p>Статус просмотра: {clickedFilm.status}</p>
            </div>
        );
    }

    showAppropriateFilms = () => {
        var appropriateFilms;
        this.state.filmsToShow === 'Все фильмы' ? (appropriateFilms = this.state.films) : (appropriateFilms = this.state.films.filter((film) => film.status === this.state.filmsToShow));

        if(!appropriateFilms.length) {
            return (<span>Фильмов с данным статусом нет!</span>)
        }

        return(
            <ol>
                {appropriateFilms.map(film => (
                    <li key={film.id}>
                        <span onClick={(e) => this.setState({selectedFilmID: film.id})}>{film.name}</span>
                        <Button
                            kind="EDIT"
                            onClick={(e) => {
                                e.stopPropagation();
                                this.setState({ mode: FilmsPageMode.EDIT, selectedFilmID: film.id })
                            }}>
                            Изменить
                        </Button>
                        <Button
                            kind="DELETE"
                            onClick={(e) => {
                                e.stopPropagation();
                                if(this.state.selectedFilmID === film.id) {
                                    this.setState({ selectedFilmID: null });
                                }

                                this.makeRequest(async () => {
                                    await deleteFilm(film.id);

                                    this.setState(({ films }) => ({
                                        films: remove(films, film.id)
                                    }));
                                });
                            }}>
                            Удалить
                        </Button>
                    </li>
                ))}
            </ol>
        )
    }

    render() {
        if(this.state.isLoading) {
            return (
                <>
                    <Header />
                    <span>Грузим фильмы ...</span>
                </>
            )
        }

        if(this.state.error) {
            return (<div>{this.state.error}</div>);
        }

        if(this.state.mode !== FilmsPageMode.LIST) {
            return (
                <FilmForm
                    film = {
                        this.state.selectedFilmID &&
                        this.state.films.find(
                            (film) => film.id === this.state.selectedFilmID
                        )
                    }
                    onSave = {
                        this.state.mode === FilmsPageMode.ADD
                            ? this.addFilm
                            : this.updateFilm
                    }
                    onCancel ={() => this.setState({ mode: FilmsPageMode.LIST, selectedFilmID: null })}
                />
            );
        }

        return(
            <>
                <Header />
                <div className="after-header">
                    <Button
                        kind="ADD"
                        onClick={() => this.setState({ mode: FilmsPageMode.ADD, selectedFilmID: null })}>
                        Добавить фильм
                    </Button>
                    <select value={this.state.filmsToShow} onChange={(e) => this.setState({ filmsToShow: e.target.value })}>
                        <option value="Все фильмы">Все фильмы</option>
                        <option value="Просмотрено">Просмотрено</option>
                        <option value="Брошено">Брошено</option>
                        <option value="Буду смотреть">Буду смотреть</option>
                    </select>
                </div>
                {!this.state.films.length ? <span>На данный момент фильмов нет!</span> : this.showAppropriateFilms()}
                {this.state.selectedFilmID ?
                    this.showClickedFilmInformation()
                    : null
                }
            </>
        )
    }
}
