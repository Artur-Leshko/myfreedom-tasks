import React from 'react';
import { Button } from '../../common/components/Button';

function validateYear(year) {
    let yearErrors = [];
    let nowYear = new Date().getFullYear();

    if(year > String(nowYear)) {
        yearErrors.push('Год больше текущего');
    }

    for(let digit of year) {
        if(digit < '0' || digit > '9') {
            yearErrors.push('Год может состоять только из цифр');
            break;
        }
    }

    return yearErrors;
}

function validateProducer(producer) {
    let producerErrors = [];

    for(let letter of producer) {
        if((letter < 'A' || letter > 'z') && (letter < 'А' || letter > 'я') && letter !== ' ') {
            producerErrors.push('Имя может состоять только из букв');
            break;
        }
    }

    return producerErrors;
}

function validateRating(rating) {
    let ratingErrors = [];

    if(rating > 5) {
        ratingErrors.push('Рэйтинг может быть от 0 до 5');
    }


    if(rating < '0' || rating > '9') {
        ratingErrors.push('Рэйтинг может состоять только из одной цифры');
    }


    return ratingErrors;
}

export class FilmForm extends React.Component {
    state = {
        name: this.props.film?.name || '',
        year: this.props.film?.year || '',
        producer: this.props.film?.producer || '',
        rating: this.props.film?.rating || '',
        status: this.props.film?.status || 'Просмотрено',
        errors: {
            year: [],
            producer: [],
            rating: []
        }
    }

    render() {
        return(
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input
                    type="text"
                    value={this.state.name}
                    placeholder="Название фильма"
                    onChange={(e) => this.setState({name: e.target.value})}
                />
                <input
                    type="text"
                    value={this.state.year}
                    placeholder="Год выпуска"
                    onChange={(e) => {
                        e.target.value = e.target.value.slice(0, 4);
                        this.setState({year: e.target.value});
                    }}
                />
                {this.state.errors.year.length ?
                    this.state.errors.year.map((error) => (
                        <span key={error} className="error">{error}</span>
                    )) :
                    null
                }
                <input
                    type="text"
                    value={this.state.producer}
                    placeholder="Режиссёр"
                    onChange={(e) => this.setState({producer: e.target.value})}
                />
                {this.state.errors.producer.length ?
                    this.state.errors.producer.map((error) => (
                        <span key={error} className="error">{error}</span>
                    )) :
                    null
                }
                <input
                    type="text"
                    value={this.state.rating}
                    placeholder="Рэйтинг (0 - 5)"
                    onChange={(e) => {
                        if(Number(e.target.value) > 5 || Number(e.target.value) < 1) {
                            e.target.value = e.target.value.slice(0, 1);
                        }
                        this.setState({rating: e.target.value})
                    }}
                />
                {this.state.errors.rating.length ?
                    this.state.errors.rating.map((error) => (
                        <span key={error} className="error">{error}</span>
                    )) :
                    null
                }
                <select value={this.state.status} onChange={(e) => this.setState({status: e.target.value})}>
                    <option value="Просмотрено">Просмотрено</option>
                    <option value="Буду смотреть">Буду смотреть</option>
                    <option value="Брошено">Брошено</option>
                </select>
                <Button
                    kind="EDIT"
                    onClick={() => {
                        const producerErrors = validateProducer(this.state.producer);
                        const yearErrors = validateYear(this.state.year);
                        const ratingErrors = validateRating(this.state.rating);

                        this.setState({
                            errors: {
                                producer: producerErrors,
                                year: yearErrors,
                                rating: ratingErrors
                            }
                        });

                        if(producerErrors.length || yearErrors.length || ratingErrors.length) {
                            return null;
                        }

                        const objectToShare = {
                            name: this.state.name,
                            year: this.state.year,
                            producer: this.state.producer,
                            rating: this.state.rating,
                            status: this.state.status
                        }
                        this.props.onSave(objectToShare);
                }}>
                    Сохранить
                </Button>
                <Button
                    kind="CANCEL"
                    onClick={() => {
                        this.props.onCancel();
                }}>
                    Назад
                </Button>
            </form>
        )
    }
}
