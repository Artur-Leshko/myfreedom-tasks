import { makeRequest } from '../../common/utils/makeRequest';

export const getFilms = () => makeRequest('/films');
export const addFilm = (filmToAdd) => makeRequest('/films', 'POST', filmToAdd);
export const editFilm = (filmID, fieldsToChange) => makeRequest(`/films/${filmID}`, 'PATCH', fieldsToChange);
export const deleteFilm = (filmID) => makeRequest(`/films/${filmID}`, 'DELETE');
