import React from 'react';

export function FilmForm(film, onSave, onCancel) {

    return(
        <form onSubmit={e => {
            e.preventDefault();
        }}>
            <input
                type="text"
                value={film.name}
                placeholder="Название фильма"
                onChange={(e) => <></>}
            />
            <input
                type="text"
                value={film.year}
                placeholder="Год выпуска"
                onChange={(e) => {
                    e.target.value = e.target.value.slice(0, 4);
                }}
            />
            <input
                type="text"
                value={film.producer}
                placeholder="Режиссёр"
                onChange={(e) => <></>}
            />
            <input
                type="text"
                value={film.rating}
                placeholder="Рэйтинг (0 - 5)"
                onChange={(e) => {
                    if(Number(e.target.value) > 5 || Number(e.target.value) < 1) {
                        e.target.value = e.target.value.slice(0, 1);
                    }

                }}
            />
            <select value={film.status} onChange={(e) => <></>}>
                <option value="Просмотрено">Просмотрено</option>
                <option value="Буду смотреть">Буду смотреть</option>
                <option value="Брошено">Брошено</option>
            </select>
            <button onClick={onSave}>
                Сохранить
            </button>
            <button onClick={onCancel}>
                Назад
            </button>
        </form>
    );
}
